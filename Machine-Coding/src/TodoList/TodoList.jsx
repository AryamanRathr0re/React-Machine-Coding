import React, { useState } from "react";

const TodoList = () => {
  const [input, setInput] = useState("");
  const [todoList, setTodoList] = useState([]);

  function addTodo() {
    let newItem = {
      id: Date.now(),
      task: input,
      completed: false,
    };
    setTodoList((prev) => [...prev, newItem]);
    setInput("");
  }
  function toggleCheckbox(id) {
    setTodoList(
      todoList.map((elem) => {
        if (elem.id === id) {
          return {
            ...elem,
            completed: !elem.completed,
          };
        } else {
          return elem;
        }
      }),
    );
  }
  function deleteTodo(id) {
    setTodoList(todoList.filter((elem) => elem.id !== id));
  }
  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addTodo}>Add task</button>
      <ul>
        {todoList.map((elem, id) => {
          return (
            <li key={elem.id}>
              <input
                type="checkbox"
                checked={elem.completed}
                onChange={() => toggleCheckbox(elem.id)}
              />
              <span className={elem.completed ? "strike" : ""}>
                {elem.task}
              </span>
              <button onClick={() => deleteTodo(elem.id)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
