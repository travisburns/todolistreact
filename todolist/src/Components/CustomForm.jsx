// import { useState } from 'react';

// // library imports
// import { PlusIcon } from '@heroicons/react/24/solid'

// const CustomForm = ({ addTask }) => {
//   const [task, setTask] = useState("");

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     addTask({
//       name: task,
//       checked: false,
//       id: Date.now()
//     })
//     setTask("")
//   }

//   return (
//     <form
//       className="todo"
//       onSubmit={handleFormSubmit}
//       >
//       <div className="wrapper">
//         <input
//           type="text"
//           id="task"
//           className="input"
//           value={task}
//           onInput={(e) => setTask(e.target.value)}
//           required
//           autoFocus
//           maxLength={60}
//           placeholder="Enter Task"
//         />
//         <label
//           htmlFor="task"
//           className="label"
//         >Enter Task</label>
//       </div>
//       <button
//         className="btn"
//         aria-label="Add Task"
//         type="submit"
//         >
//         <PlusIcon />
//       </button>
//     </form>
//   )
// }
// export default CustomForm


// import React, {useState} from 'react'
// import { PlusIcon } from '@heroicons/react/24/solid'

// const CustomForm = ({addTask}) => {
// const [task, setTask] = useState("")

//   const handleFormSubmit = (e) => {
//         e.preventDefault();
//        addTask({
//            name: task,
//          checked: false,
//           id: Date.now(),
//         })
//         setTask("")
//       }

//   return (
//     <div>
//       <form 
//       className='todo' 
//       onSubmit={handleFormSubmit}
//       >
//       <div className='wrapper'>
//         <input type="text"
//          id="task" 
//          className='input'
//          value={task} 
//          onInput={(e) => setTask(e.target.value)}
//          required
//          autoFocus
//          maxLength={60}
//          placeholder="Enter Task"
//          />
//         <label
//         htmlFor="task"
//          className="label"
//         >
//           Enter Task
//        </label>
//         </div> 
//         <button
//        className="btn"
//        aria-label="Add Task"
//        type="submit"
//        >
//         <PlusIcon />
//        </button>
//       </form>
//     </div>
//   )
// }


// export default CustomForm
import { useState } from 'react'; 
import { PlusIcon } from '@heroicons/react/24/solid'

const CustomForm = ({ addTask }) => {
  const [task, setTask] = useState("");


  const handleFormSubmit = (e) => {
    e.preventDefault();
    addTask({
      name: task,
      checked: false,
      id: Date.now()
    }

    )
    setTask("")

  }

  return (
    <form 
    className="todo"
    onSubmit={handleFormSubmit}
    >
    <p>{task}</p>
    <div className="wrapper">
      <input 
         type="text" 
         id="task"
         className="input"
         //value={task}
         //onInput={(e) => setTask(e.target.value)}
         required
         autoFocus
         autoFocusmaxLength={60}
         placeholder="Enter Task"
         />
      <label 
      htmlFor="task"
      className="label"
      >Enter Task</label>
      <button 
      className="btn"
      aria-lavel="Add Task"
      type="submit"
      >
        <BeakerIcon className="h-6 w-6 text-blue-500" />
      </button>
      </div>  
    </form>
  )
}
