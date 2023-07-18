import { useState } from 'react'

// custom components
import CustomForm from './Components/CustomForm'
import TaskList from './Components/TaskList'

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks(prevState => [...prevState, task])
  }

 const updateTask = (id) => {
  setTasks(prevState => prevState.map(t => (
    t.id == id
     ? {...t, checked: !t.checked }
     : t 
    )))

 }


  const deleteTask = (id) => {
    setTasks(prevState => prevState.filter(t => t.id !== id));
  }

  return (
    <div className="container">
      <header>
        <h1>My Task List</h1>
      </header>
      <CustomForm addTask={addTask}/>
      {tasks && (
        <TaskList
          tasks={tasks}
          updateTask={updateTask}
          deleteTask={deleteTask}
        />
      )}
    </div>
  )
}

export default App