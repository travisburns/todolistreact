import React from 'react'


import styles from './TaskList.module.css';
import TaskItem from './TaskiTem';

const TaskList = ({tasks}) => {
  return (
    <ul className={styles.tasks}>
      {tasks.sort((a, b) =>b.id - a.id).map(task => 
        <TaskItem
         key={task.id}
         task={task}
        />
      )

      }
    </ul>
  )
}

export default TaskList
