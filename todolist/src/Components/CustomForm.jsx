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
//note

// import {useState} from 'react'
// import {PlusIcon} from '@heroicons/react/24/solid'


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
//     <div className="wrapper">
//       <input 
//       type="text"
//       id="task"
//       className="input"
//       value={task}
//       onInput={(e) => setTask(e.target.value)}
//       required
//       autoFocus
//       maxLength={60}
//       placeholder="Enter Task"
//       />
//       <label 
//         htmlFor="task"
//         className="label"
//         >Enter Task</label>
//     </div>
//     <button 
//        className="btn"
//        aria-label="Add Task"
//        type="submit"
//       >
//         <PlusIcon />
//       </button>
//        </form>
//   )
// }

// export default CustomForm




//setup the Custom form outline as a function that equals the addTask property and returns a hook of task setTask to equal a empty string
//create a function handleFormSubmit that equals a event listener that returns the preventDefault. 
//addTask returns its parameters, name, checked, id. 
//Create setTask to equal a empty string. 

//then return a form with the classname todo and has a onSubmit equal to the handleFormSubmit
//then write on a new div with the classname wrapper input with the attributes, type, id, classname = input. value, onInput, required, autofocus, manxlength, placeholder
//create the lavel and its appropriate attributes htmlfor, 
//Enter task should be made as the text between the label. 
//Create a button that has the classname of btn, aria label, type equal to submit, 
//Import plusicon.
//End







// library imports


import React from 'react'
import { useState } from 'react';
import { PlusIcon } from '@heroicons/react/24/solid'
const CustomForm = ({addTask}) => {
  const [task, setTask] = useState("")
  
  const handleFormSubmit = (e) => {
    e.preventDefault() 
    addTask(
      {
        name: task,
        checked: false,
        id: Date.now()
      }
    )
    setTask("")
  }


  return (
    <form
      className='todo'
      onSubmit={handleFormSubmit}
    >

      <div className="wrapper">
        <input 
          type='text'
          id='task'
          className='input'
          value={task}
          onInput={(e) => setTask(e.target.value) }
          required
          autoFocus
          maxLength={60}
          placeholder='Enter Task'
        />
      <label
        htmlFor='task'
        className='label'
      >Enter Task
      </label>
    </div>
    <button
    className='btn'
    aria-label='add Task'
    type='submit'
    >
      
      <PlusIcon />
      </button>  


    </form>
  )
}

export default CustomForm
