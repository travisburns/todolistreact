// // component import


// // styles
// import styles from './TaskList.module.css';
// import TaskItem from './TaskItem';

// const TaskList = ({ tasks, deleteTask, toggleTask, enterEditMode }) => {
//   return (
//     <ul className={styles.tasks}>
//       {tasks.sort((a, b) => b.id - a.id).map(task => (
//         <TaskItem
//           key={task.id}
//           task={task}
//           deleteTask={deleteTask}
//           toggleTask={toggleTask}
//           enterEditMode={enterEditMode}
//         />
//       ))
//       }
//     </ul>
//   )
// }
// export default TaskList


// import React from 'react'
// import TaskItem from './TaskItem';
// import styles from './TaskList.module.css';

// const TaskList = ({tasks}) => {
//   return (
//     <ul className={styles.tasks}>
//     {
//       tasks.sort((a, b) => b.id - a.id).map(task => (
//         <TaskItem 
//          key={task.id}
//          task={task}
//         />
//       ))
//     }
//     </ul>
//   )
// }

// export default TaskList


// import React from 'react'
// import TaskItem from './TaskItem';
// import styles from './TaskList.module.css';

// const TaskList = ({tasks, deleteTask, toggleTask, enterEditMode}) => {
//   return (
//     <div>
//       <ul className='styles.tasks'>
//       {
//         tasks.sort((a, b) => b.id - a.id).map(task => (
//           <TaskItem 
//           key={task.id}
//           task={task}
//           deleteTask = {deleteTask}
//           toggleTask = {toggleTask}
//           enterEditMode={enterEditMode}
//           />
//         ))
//       }
//       </ul>
//     </div>
//   )
// }

// export default TaskList



// part 3 create the taskList function that passes in the parameter tasks, remember at this point, what do you screw up on over and over. 
// part 3 return a div that will contain a ul classname styles.tasks
// part 3 within the ul, create a object bracket and create a tasks.map that maps task and returns TaskItem with parameters key equal to task.id, task equal to task
//part 3 wrap the tasks.map in a tasks.sort where parameters a.b exist and return b.id - a.id in order to sort. 

import React from 'react'
import TaskItem from './TaskItem'
const TaskList = ({tasks}) => {
  
  return (
    <div>
      <ul className='styles.tasks'>
      {
        tasks.sort((a,b) => (b.id -a.id ).map(task => <TaskItem 
          key='task.id'
          task={task}
        /> ))
      }
      </ul>
    </div>
  )
}

export default TaskList
