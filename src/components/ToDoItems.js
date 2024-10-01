import { useState } from "react";
import "./ToDoItems.css";
import ToDoTask from "./ToDoTask";
import ToDoForm from "./ToDoForm";

const ToDoItems = () => {
  const [items, setItems] = useState([]);
  
  const addItem = (item) => {
    const taskName = item.name.trim();
    if (taskName) {
      item.name = taskName;
      const updatedItems = [item, ...items];
      setItems(updatedItems);
    }
    
  };

  const completeTask = (id) => {
    if (id) {
      const updatedItems = items.map((item) => {
        if (item.id === id) {
          item.isCompleted = !item.isCompleted;
        }
        return item;
      });
      setItems(updatedItems);
    }
  };

  const deleteTask = (id) => {
    if (id) {
      const updatedItems = items.filter((item) => item.id !== id);
      setItems(updatedItems);
    }
  };

  return (
    <>
      <ToDoForm onSubmit={addItem} />
      <div className="todo-items-container">
        {items.map((item) => (
          <ToDoTask
            key={item.id}
            id={item.id}
            name={item.name}
            isCompleted={item.isCompleted}
            completeTask={completeTask}
            deleteTask={deleteTask}
          />
        ))}
      </div>
    </>
  );
};

export default ToDoItems;
