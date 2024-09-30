import "./App.css";
import ToDoForm from "./components/ToDoForm";
import ToDoItems from "./components/ToDoItems";

function App() {
  return (
    <div className="main-container">
      <div className="header-container">
        <h1 className="header-title">ToDo App</h1>
      </div>
      <div className="todo-main-container">
        <div className="todo-title-container">
          <h3 className="todo-title">Lista de tareas</h3>
        </div>

        <ToDoForm />

        <ToDoItems />
      </div>
    </div>
  );
}

export default App;
