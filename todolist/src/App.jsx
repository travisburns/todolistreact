import { useState } from 'react'
import TaskList from './Components/TaskList';

// components
import CustomForm from './Components/CustomForm'

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks(prevState => [...prevState, task])
  }


  return (
    <>
      <div className='container'>
        <header>
          <h1>
            My Task List
          </h1>
        </header>
        <CustomForm addTask = {addTask} />
        {tasks && <TaskList  tasks={tasks}/>}
      </div>
    </>
  )
}

export default App
