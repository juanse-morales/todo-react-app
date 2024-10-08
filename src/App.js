import { useState } from "react";
import "./App.css";
import ToDoItems from "./components/ToDoItems";
import ToDoForm from "./components/ToDoForm";

function App() {
  
  const [items, setItems] = useState([]);
  
  const addItem = (item) => {
    const taskName = item.name.trim();
    if (taskName) {
      item.name = taskName;
      const updatedItems = [item, ...items];
      setItems(updatedItems);
    }
  };

  const handleChangeItem = (itemsList) => {
    setItems(itemsList);
  };

  return (
    <div className="main-container">
      <div className="header-container">
        <h1 className="header-title">ToDo App</h1>
      </div>
      <div className="todo-main-container">
        <div className="todo-title-container">
          <h3 className="todo-title">Lista de tareas</h3>
        </div>
        <ToDoForm onSubmit={addItem} />
        <ToDoItems 
          initialItems={items} 
          onChangeItems={handleChangeItem}
        />
      </div>
    </div>
  );
}

export default App;
