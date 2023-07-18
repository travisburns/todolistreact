// component import
import TaskItem from './TaskItem';

// styles
import styles from './TaskList.module.css';

const TaskList = ({ tasks, deleteTask, updateTask }) => {
  return (
    <ul className={styles.tasks}>
      {tasks.sort((a, b) => b.id - a.id).map(task => (
        <TaskItem
          key={task.id}
          task={task}
          updateTask={updateTask}
          deleteTask={deleteTask}
        />
      ))
      }
    </ul>
  )
}
export default TaskList