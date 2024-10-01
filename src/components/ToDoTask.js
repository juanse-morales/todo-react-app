import './ToDoTask.css';
import { AiOutlineCloseCircle } from 'react-icons/ai';

const ToDoTask = ({id, name, isCompleted, completeTask, deleteTask}) => {
  return (
    <div className={isCompleted ? 'task-container completed':'task-container'}>
      <div 
        className='task-name'
        onClick={() => completeTask(id)}
      >
        {name}
      </div>
      <div 
        className='icon-container'
        onClick={() => deleteTask(id)}
      >
        <AiOutlineCloseCircle className='close-icon' />
      </div>
    </div>
  )
};

export default ToDoTask;