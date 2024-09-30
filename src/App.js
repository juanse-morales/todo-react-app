
import './App.css';
import Header from './components/Header';
import ToDoForm from './components/ToDoForm';

function App() {
  return (
    <div>
      <div className="header">
        <Header />
      </div>
      <div className='container-main'>
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
