import React from "react";
import "../index.css"


const Todo = ({ todos, setTodos, todo, text, completed}) => {
    const deleteHandler = (e) => {
        setTodos(todos.filter(el => el.id !== todo.id
        ))
    }

    const checkHandler = () => {
        setTodos(todos.map((el => {
            if(el.id === todo.id) {
                return {
                    ...el, completed: !el.completed
                }
            }
            return el;
        })))
    }

    return (
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ""}`} data-status={completed}>{text}</li>
            <button onClick={checkHandler} className="complete-btn"><i className="fas fa-check"></i></button>
            <button onClick={deleteHandler} className="trash-btn"><i className="fas fa-trash"></i></button>
        </div>
    )
}

export default Todo