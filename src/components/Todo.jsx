import React, { useEffect, useState } from "react";

const Todo = () => {
  const [todos, setTodo] = useState([]);
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
    setError("");
  };

  useEffect(() => {
    const loadData = localStorage.getItem("todos");
    if (loadData) {
      setTodo(JSON.parse(loadData));
    }
  }, []);

  const handleAdd = () => {
    if (input === "") {
      setError("please enter something!");
      return;
    }
    const newTodo = {
      id: Date.now(),
      title: input,
      completed: false,
    };

    const prevTodos = localStorage.getItem("todos");
    const parsedTodos = JSON.parse(prevTodos);
    parsedTodos.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(parsedTodos));

    setTodo([...todos, newTodo]);
    setInput("");
    setError("");
  };

  const handleDelete = (id) => {
    const filterTodo = todos.filter((todo) => todo.id !== id);
    setTodo(filterTodo);
    localStorage.setItem("todos", JSON.stringify(filterTodo));
  };

  const handleEdit = (id) => {
    const editTodo = prompt("Please enter updated todo : ");
    if (editTodo === null || editTodo.trim() === "") {
      alert("Invalid input. Please enter a valid todo.");
      return;
    }

    const updateTodo = todos.map((todo) =>
      todo.id === id ? { ...todo, title: editTodo } : todo
    );
    setTodo(updateTodo);
    localStorage.setItem("todos", JSON.stringify(updateTodo));
  };

  return (
    <>
      <h1 className="text-4xl p-3">Task List</h1>
      <div className="flex items-center">
        <input
          value={input}
          onChange={handleChange}
          className="border-2 border-red-300 w-80 p-1 m-5 rounded-md hover:border-blue-300 focus:bg-blue-300 transition ease-in-out 3s"
          type="text"
        ></input>
        <button
          onClick={handleAdd}
          className="p-2 w-20 rounded-md h-9 bg-blue-300 active:bg-blue-500"
        >
          ✔
        </button>
      </div>

      {error && <p className="text-red-500 ml-5">{error}</p>}

      <ul>
        {todos.length > 0 ? (
          todos.map((todo) => (
            <li className="p-2 m-2 border-b-2 border-gray-200" key={todo.id}>
              {" "}
              {todo.title}
              <button
                onClick={() => handleEdit(todo.id)}
                className="ml-3 border-2 w-10 rounded-md"
              >
                edit
              </button>
              <button
                onClick={() => handleDelete(todo.id)}
                className=" border-2 w-10 rounded-md"
              >
                X
              </button>
            </li>
          ))
        ) : (
          <p className="text-red-500 pl-5">
            Please enter a todo to get started!
          </p>
        )}
      </ul>
    </>
  );
};

export default Todo;
