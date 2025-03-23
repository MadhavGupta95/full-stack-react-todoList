import React, { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";

const AddTodo = () => {
  const [todos, setTodos] = useState("");

  const { setTodo } = useContext(TodoContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Todo added: ", todos);
    const newTodo = {
      id: Date.now(),
      title: todos,
      completed: false,
    };
    setTodo((prevTodos)=>[...prevTodos, newTodo]);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label className=" mr-2" htmlFor="">
          Enter a todo :{" "}
        </label>
        <input
          value={todos}
          onChange={(e) => setTodos(e.target.value)}
          className="border-2"
          placeholder="Enter a todo"
          type="text"
        ></input>
        <button className="border-2 ml-2">Add</button>
      </form>
    </div>
  );
};

export default AddTodo;
