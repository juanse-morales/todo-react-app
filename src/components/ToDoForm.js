import { useState } from 'react';
import './ToDoForm.css';
import { v4 as uuid } from 'uuid';

const ToDoForm = (props) => {
  
  const [inputText, setInputText] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const item = {
      id: uuid(),
      name: inputText,
      isCompleted: false
    };

    props.onSubmit(item);
  };
  
  return (
    <div className='form-main-container'>
      <form 
        className='task-form'
        onSubmit={handleSubmit}
      >
        <input 
          className='task-name-input'
          type='text'
          placeholder='Escribe la tarea'
          name='task-name'
          onChange={handleInputChange}
        />
        <button className='task-button'>
          Agregar Tarea
        </button>
      </form>
    </div>
  );
};

export default ToDoForm;