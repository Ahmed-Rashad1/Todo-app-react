import React, {  } from "react";
import "../index.css"


const Form = ({ setStatus, setInput, input, todos, setTodos}) => {
  
  const inputTextHandler = (e) => {
    setInput(e.target.value)
  }
  const submitHandler = (e) => {
    e.preventDefault();
    if(input !== ""){
      setTodos([...todos, { text: input, completed: false, id: Math.floor(Math.random() * 1000 )},]);
      
      setInput("");
    }
  }
  const statusHandler = (e) => {
    setStatus(e.target.value)
  }
  return (
    <form>
      <input value={input} type="text" className="todo-input" onChange={inputTextHandler}/>
      <button onClick={submitHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler}  name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed" >completed</option>
          <option value="uncompleted">uncompleted</option>
        </select>
      </div>
      
    </form>
    )
}


export default Form
