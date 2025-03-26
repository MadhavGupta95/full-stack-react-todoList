import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios"

const Todo = () => {
  const [todos, setTodo] = useState([]);
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState(null)

  const handleChange = (e) => {
    setInput(e.target.value);
    setError("");
  };

  useEffect(()=>{
    validateUser()
    getData()
  }, [])

  useEffect(()=>{
    getData()
  }, [])

  const validateUser = async()=>{
    try {
      const token = localStorage.getItem('token')
      if(!token){
        navigate("/login")
      }
      const {data : response} = await axios.get(`http://localhost:3300/api/auth/validateToken/${token}`)
      console.log(response.data);
      setUser(response.data)
    } catch (error) {
      navigate("/login")
      console.log(error.message);
    }
  }

  const getData = async()=>{
    try {
      const token = localStorage.getItem('token')
      const {data : response} = await axios.get('http://localhost:3300/api/todos',{
        headers : {
          Authorization : token
        }
      })
      console.log(response.data);
      setTodo(response.data)
    } catch (error) {
      navigate("/login")
      console.log(error.message);
    }
  }

  const navigate = useNavigate()


  // useEffect(() => {
  //   const loadData = localStorage.getItem("todos");
  //   if (loadData) {
  //     setTodo(JSON.parse(loadData));
  //   }
  // }, []);

  const handleAdd = async() => {
    try {
      const token = localStorage.getItem('token')
      const {data : newTodo} = await axios.post('http://localhost:3300/api/todos',{
        title : input
      },{
        headers : {
          Authorization : token
        }
      })
      setTodo((prevTodo) => [...prevTodo, newTodo.data]);
      setInput("")
      console.log(newTodo.data);
    // const prevTodos = localStorage.getItem("todos");
    // const parsedTodos = JSON.parse(prevTodos);
    // parsedTodos.push(newTodo);
    // localStorage.setItem("todos", JSON.stringify(parsedTodos));
    } catch (error) {
      console.log(error);
      navigate('/login')
    }
  };

  const handleDelete = async(id) => {
    const token = localStorage.getItem('token')
    await axios.delete(`http://localhost:3300/api/todos/${id}`,{
      headers : {
        Authorization : token
      }
    })
    setTodo((prevTodo)=> prevTodo.filter((todo)=>todo.id!==id))
    // localStorage.setItem("todos", JSON.stringify(filterTodo));
  };

  const handleEdit = async(id) => {
    try {
      const editTodo = prompt("Please enter updated todo : ");
    if (editTodo === null || editTodo.trim() === "") {
      alert("Invalid input. Please enter a valid todo.");
      return;
    }

    const token = localStorage.getItem('token')

    await axios.patch(`http://localhost:3300/api/todos/${id}`,{
      title : editTodo
    },{
      headers : {
        Authorization : token
      }
    })

    setTodo((prevData) =>prevData.map((todo)=> todo.id === id ? { ...todo, title: editTodo } : todo));
    // const updateTodo = todos.map((todo) =>
    //   todo.id === id ? { ...todo, title: editTodo } : todo
    // );
    
    // localStorage.setItem("todos", JSON.stringify(updateTodo));
    } catch (error) {
      console.log(error);
      navigate('/login')
    }
  };

  const logout = ()=>{
    localStorage.removeItem("token")
    navigate('/login')
  }

  return (
    <>
      {user ? (
        <>
          <h1 className="text-4xl p-3">Task List</h1>
          <button
                onClick={logout}
                className=" border-2 w-30 rounded-md"
              >
                Log Out
              </button>
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
      ) : ("Website Loading...")}
    </>
  );
};

export default Todo;
