// import { useState } from 'react'

// // custom components
// import CustomForm from './components/CustomForm'
// import EditForm from './components/EditForm'
// import TaskList from './components/TaskList'

// function App() {
//   const [tasks, setTasks] = useState([]);
//   const [previousFocusEl, setPreviousFocusEl] = useState(null);
//   const [editedTask, setEditedTask] = useState(null);
//   const [isEditing, setIsEditing] = useState(false);

//   const addTask = (task) => {
//     setTasks(prevState => [...prevState, task])
//   }

//   const deleteTask = (id) => {
//     setTasks(prevState => prevState.filter(t => t.id !== id));
//   }

//   const toggleTask = (id) => {
//     setTasks(prevState => prevState.map(t => (
//       t.id === id
//         ? { ...t, checked: !t.checked }
//         : t
//     )))
//   }

//   const updateTask = (task) => {
//     setTasks(prevState => prevState.map(t => (
//       t.id === task.id
//         ? { ...t, name: task.name }
//         : t
//     )))
//     closeEditMode();
//   }

//   const closeEditMode = () => {
//     setIsEditing(false);
//     previousFocusEl.focus();
//   }

//   const enterEditMode = (task) => {
//     setEditedTask(task);
//     setIsEditing(true);
//     setPreviousFocusEl(document.activeElement);
//   }

//   return (
//     <div className="container">
//       <header>
//         <h1>My Task List</h1>
//       </header>
//       {
//         isEditing && (
//           <EditForm
//             editedTask={editedTask}
//             updateTask={updateTask}
//             closeEditMode={closeEditMode}
//           />
//         )
//       }
//       <CustomForm addTask={addTask}/>
//       {tasks && (
//         <TaskList
//           tasks={tasks}
//           deleteTask={deleteTask}
//           toggleTask={toggleTask}
//           enterEditMode={enterEditMode}
//         />
//       )}
//     </div>
//   )
// }

// export default App




// import { useState } from 'react'
// import CustomForm from './components/CustomForm';
// import TaskList from './Components/TaskList';
// import EditForm from './Components/EditForm';
// // custom components

// function App() {
//   const [tasks, setTasks] = useState([]);
//   const [previousFocusEl, setPreviousFocusEl] = useState(null);
//   const [editedTask, setEditedTask] = useState(null);
//   const [isEditing, setIsEditing] = useState(false);

//   const addTask = (task) => {
//     setTasks(prevState => [...prevState, task])
//   }

//   const deleteTask = (id) => {
//     setTasks(prevState => prevState.filter(t => t.id !== id));
//   }

//   const toggleTask = (id) => {
//     setTasks(prevState => prevState.map(t => (
//       t.id === id
//         ? { ...t, checked: !t.checked }
//         : t
//     )))
//   }

//   const updateTask = (task) => {
//     setTasks(prevState => prevState.map(t => (
//       t.id === task.id
//         ? { ...t, name: task.name }
//         : t
//     )))
//     closeEditMode();
//   }

//   const closeEditMode = () => {
//     setIsEditing(false);
//     previousFocusEl.focus();
//   }

//   const enterEditMode = (task) => {
//     setEditedTask(task);
//     setIsEditing(true);
//     setPreviousFocusEl(document.activeElement);
//   }

//   return (
//     <div className="container">
//       <header>
//         <h1>My Task List</h1>
//       </header>
//       {
//         isEditing && (
//           <EditForm
//             editedTask={editedTask}
//             updateTask={updateTask}
//             closeEditMode={closeEditMode}
//           />
//         )
//       }
//       <CustomForm addTask={addTask}/>
//       {tasks && (
//         <TaskList
//           tasks={tasks}
//           deleteTask={deleteTask}
//           toggleTask={toggleTask}
//           enterEditMode={enterEditMode}
//         />
//       )}
//     </div>
//   )
// }

// export default App

// import React, {useState} from 'react'
// import CustomForm from './components/CustomForm';
// import TaskList from './components/TaskList';
// import EditForm from './components/EditForm';

// const App = () => {
//   const [tasks, setTasks] = useState([]);
//   const [setPreviousFocusEl, setSetPreviousFocusEl] = useState(null);
//   const [editedTask, setEditedTask] = useState([]);
//   const [isEditing, setIsEditing] = useState([]);


//   const addTask = (task) => {
//     setTasks(prevState => [...prevState, task])
//   }

//   const deleteTask = (id) => {
//     setTasks(prevState => prevState.filter(t => t.id !== id));
//   }

//   const toggleTask = (id) => {
//     setTasks(prevState => prevState.map(t => (
//       t.id === id
//         ? { ...t, checked: !t.checked }
//         : t
//     )))
//   }

//   const updateTask = (task) => {
//     setTasks(prevState => prevState.map(t => (
//       t.id === task.id
//         ? { ...t, name: task.name }
//         : t
//     )))
   
//   }


// const CloseEditMode = (task) => {
//   setIsEditing(false);
//   previousFocusEl.focus(); 
// }


//  const enterEditMode = (task) => {
//     setEditedTask(task);
//     setIsEditing(true);
//     setPreviousFocusEl(doucment.activeElement)
//  }


//   return (
//     <div className='container'>
//       <header>
//         <h1>My task List</h1>
//       </header>
//       {  
//          isEditing && (
//           <EditForm  
//           editedTask={editedTask}
//           updateTask={updateTask}
    
//           />
//          )
        
//       }
     
//       <CustomForm addTask={addTask}/>
//       {tasks && (
//       <TaskList 
//       tasks={tasks} 
//       deleteTask={deleteTask} 
//       toggleTask={toggleTask}
//       enterEditMode={enterEditMode}
//       />
//     )}
    
//       </div>
 
//   )
//   }
// export default App




// import { useState } from 'react'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <div className="App">

//     </div>
//   )
// }

// export default App










//custom components
///set up app component -


//set up a function that takes in the parameter task and returns a console of the task for now -
 

  //return a div of container className that contains a header. Within the header exists a h1 with the name my Task List
  //below the header exists The CustomForm component with the passed property of addTask equaling addTask

import React from 'react'
import CustomForm from './components/CustomForm'
const App = () => {
  
  const addTask = (task) => {
    console.log(task)
  }


  
  return (
    
    <div className='container'>
      <header>
        <h1>Task List</h1>
      </header>
      <CustomForm  addTask={addTask}/>
    </div>
  )
}

export default App

