// import { useState } from 'react';

// // styles
// import styles from './TaskItem.module.css';

// // Library imports
// import { CheckIcon  } from '@heroicons/react/24/outline';
// import { PencilSquareIcon  } from '@heroicons/react/24/outline';
// import { TrashIcon } from '@heroicons/react/24/outline';

// const TaskItem = ({ task, deleteTask, toggleTask, enterEditMode }) => {
//   const [isChecked, setIsChecked ] = useState(task.checked);

//   const handleCheckboxChange = (e) =>{
//     setIsChecked(!isChecked);
//     toggleTask(task.id);
//   }

//   return (
//     <li className={styles.task}>
//       <div className={styles["task-group"]}>
//         <input
//           type="checkbox"
//           className={styles.checkbox}
//           checked={isChecked}
//           onChange={handleCheckboxChange}
//           name={task.name}
//           id={task.id}
//         />
//         <label
//           htmlFor={task.id}
//           className={styles.label}
//         >
//           {task.name}
//           <p className={styles.checkmark}>
//             <CheckIcon strokeWidth={2} width={24} height={24}/>
//           </p>
//         </label>
//       </div>
//       <div className={styles["task-group"]}>
//         <button
//           className='btn'
//           aria-label={`Update ${task.name} Task`}
//           onClick={() => enterEditMode(task)}
//         >
//           <PencilSquareIcon width={24} height={24} />
//         </button>

//         <button
//           className={`btn ${styles.delete}`}
//           aria-label={`Delete ${task.name} Task`}
//           onClick={() => deleteTask(task.id)}
//         >
//           <TrashIcon width={24} height={24} />
//         </button>

//       </div>
//     </li>
//   )
// }
// export default TaskItem

// import React, {useState} from 'react';
// // styles
// import styles from './TaskItem.module.css';

// // Library imports
// import { CheckIcon  } from '@heroicons/react/24/outline';
// import { PencilSquareIcon  } from '@heroicons/react/24/outline';
// import { TrashIcon } from '@heroicons/react/24/outline';

// const TaskItem = ({task, deleteTask, toggleTask, enterEditMode }) => {
//   const [isChecked, setIsChecked ] = useState(task.checked);

//   const handleCheckboxChange = (e) =>{
//     setIsChecked(!isChecked);
//     toggleTask(task.name)
//   }

//   return (
//     <li className={styles.task}>
//       <div className={styles["task-group"]}>
//         <input
//           type="checkbox"
//           className={styles.checkbox}
//           checked={isChecked}
//           onChange={handleCheckboxChange}
//           name={task.name}
//           id={task.id}
//         />
//         <label
//           htmlFor={task.id}
//           className={styles.label}
//         >
//           {task.name}
//           <p className={styles.checkmark}>
//             <CheckIcon strokeWidth={2} width={24} height={24}/>
//           </p>
//         </label>
//       </div>
//       <div className={styles["task-group"]}>
//         <button
//           className='btn'
//           aria-label={`Update ${task.name} Task`}
//            onClick={() => enterEditMode(task)}
//         >
//           <PencilSquareIcon width={24} height={24} />
//         </button>

//         <button
//           className={`btn ${styles.delete}`}
//           aria-label={`Delete ${task.name} Task`}
//           onClick={()=> deleteTask(task.id) }
//         >
//           <TrashIcon width={24} height={24} />
//         </button>

//       </div>
//     </li>
//   )
// }
// export default TaskItem




//part 3 create a function TaskItem that accepts the prop task being passed from TaskList
//part 3 create a hook that has ischecked, setIsChecked equal to useState task.checked
// part 3 create a handleCheckBoxChange that accepts e as a parameter and returns setIsChecked(!sChecked)
// part 3 return a list with classname styles.task as a prop
//part 3 create a div with the classname equal to a prop styles and a array""Task-group"
//part 3 create a input with type equal to checkbox, classname equal to styles.checkbox, checked equal to prop is checked, onChange equal to handleCheckBoxChange, name equal to property task.name, and id equal to task.id prop

//part 3 create a label with htmlFor equal to prop task.id and className equal to prop styles.label
//part 3 pass the property task.name

//part 3 below the task.name create a p tag with className equal to styles.checkmark
// part 3 pass the CHeckIcon with strokeWidth equal to 2, width equal to 24, and height equal to 24
//part 3 create a additional div with classname equal to object styles, array "task-group", similiar to the one above
//part 3 create a buttton with classname equal to btn, aria-label equal to templete literal "update ${task.name} task" as a property
// part 3 note in the onClick

//part 3 Pass the PencilSquareIcon with width equal to 24 height equal to 24, end the button
//part 3 create another button with className equal to templete literal "btn ${styles.delete}" as a property
//part 3 create a aria-label equal to a object templte literal Delete ${task.name} task as a property
// part 3 add a onclick note
// part 3 Pass a TrashIcon with width 24 height 24
// part 3 end the button

//part 4 add onclick that returns deleteTask(task.id)


import { useState } from 'react';

// styles
import styles from './TaskItem.module.css';

// Library imports
import { CheckIcon  } from '@heroicons/react/24/outline';
import { PencilSquareIcon  } from '@heroicons/react/24/outline';
import { TrashIcon } from '@heroicons/react/24/outline';

const TaskItem = ({ task, deleteTask, toggleTask }) => {
  const [isChecked, setIsChecked ] = useState(task.checked);

  const handleCheckboxChange = (e) =>{
    setIsChecked(!isChecked);
    toggleTask(!isChecked)
  }

  return (
    <li className={styles.task}>
      <div className={styles["task-group"]}>
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={isChecked}
          onChange={handleCheckboxChange}
          name={task.name}
          id={task.id}
        />
        <label
          htmlFor={task.id}
          className={styles.label}
        >
          {task.name}
          <p className={styles.checkmark}>
            <CheckIcon strokeWidth={2} width={24} height={24}/>
          </p>
        </label>
      </div>
      <div className={styles["task-group"]}>
        <button
          className='btn'
          aria-label={`Update ${task.name} Task`}
         //onClick={}
        >
          <PencilSquareIcon width={24} height={24} />
        </button>

        <button
          className={`btn ${styles.delete}`}
          aria-label={`Delete ${task.name} Task`}
          onClick = {() => deleteTask(task.id) }
        >
          <TrashIcon width={24} height={24} />
        </button>

      </div>
    </li>
  )
}
export default TaskItem