
import './App.css';
import ToDoForm from './components/ToDoForm';
import ToDoItems from './components/ToDoItems';

function App() {
  return (
    <div className='main-container'>
      <div className="header">
        <h1 className='header-title'>ToDo App</h1>
      </div>
      <div className='todo-main-container'>
        <div className='todo-title'>
          <h3>Mis tareas</h3>
        </div>
        <div className='todo-form'>
          <ToDoForm />
        </div>
        <div className='todo-items'>
          <ToDoItems />
        </div>
      </div>
    </div>
  );
}

export default App;
