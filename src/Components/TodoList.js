import React from "react";
import Todo from "./Todo.js"
import "../index.css"


const TodoList = ({filterTodos, todos, setTodos}) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filterTodos.map(todo => (
                    <Todo setTodos={setTodos} todo={todo} todos={todos} text={todo.text} key={todo.id} completed={todo.completed}/>
                ))}
            </ul>
        </div>
    )
}

export default TodoList