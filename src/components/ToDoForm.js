import './ToDoForm.css';


const ToDoForm = () => {
  return (
    <div className='form-main-container'>
      <form className='task-form'>
        <input 
          className='task-name-input'
          type='text'
          placeholder='Escribe la tarea'
          name='task-name'
        />
        <button className='task-button'>
          Agregar Tarea
        </button>
      </form>
    </div>
  );
};

export default ToDoForm;