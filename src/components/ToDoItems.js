import { useEffect, useState } from "react";
import "./ToDoItems.css";
import ToDoTask from "./ToDoTask";

const ToDoItems = ({initialItems, onChangeItems}) => {
  const [items, setItems] = useState(initialItems);

  // Update state when props change
  useEffect(() => {
    setItems(initialItems);
  }, [initialItems]); // Dependency on prop

  const completeTask = (id) => {
    if (id) {
      const updatedItems = items.map((item) => {
        if (item.id === id) {
          item.isCompleted = !item.isCompleted;
        }
        return item;
      });
      setItems(updatedItems);
      onChangeItems(updatedItems);
    }
  };

  const deleteTask = (id) => {
    if (id) {
      const updatedItems = items.filter((item) => item.id !== id);
      setItems(updatedItems);
      onChangeItems(updatedItems);
    }
  };

  return (
    <>
      
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
