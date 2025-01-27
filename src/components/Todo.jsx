import React from "react";

function Todo({ todo, delTodo, index }) { // THESE ARE THE TASKS TO BE ADDED, TODO PROP IS A STATIC TASK // 
    return (
        <div className='todo'>
            <p>{todo}</p>
            <div className='actions'>

                <input type='checkbox' />
                <button onClick={() => delTodo(index)}>Delete</button>
            </div>
        </div>
    )
}

export default Todo