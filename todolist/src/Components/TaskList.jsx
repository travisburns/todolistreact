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


import React from 'react'
import TaskItem from './TaskItem';
import styles from './TaskList.module.css';

const TaskList = ({tasks, deleteTask, updateTask, enterEditMode}) => {
  return (
    <div>
      <ul className='styles.tasks'>
      {
        tasks.sort((a, b) => b.id - a.id).map(task => (
          <TaskItem 
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          updateTask={updateTask}
          enterEditMode={enterEditMode}
          />
        ))
      }
      </ul>
    </div>
  )
}

export default TaskList

