import React from "react";
import Todo from "./Todo";

function TodoContainer({ todos, todo, delTodo }) { // THIS IS USED TO UPDATE THE TODO CONTAINER WITH EACH TASK // 
    return (
        <div className='container'>
            {todos.map((todo , index) => { // IT WILL MAP THE INDEX OF EACH ELEMENT TOO // 
                return (
                    <Todo todo={todo} index={index} delTodo={delTodo} />
                )
            })}
        </div>
    )
}

export default TodoContainer;