import React, {Component} from 'react';


// Hier weiter machen: https://youtu.be/sBws8MSXN7A?t=2727
function TodoItem(todo) {
    const btnStyle = {
        background: "#ff0000",
        color: "#fff",
        border: "none",
        padding: "5px 9px",
        borderRadius: "50%",
        cursor: "pointer",
        float: "right",
    }
    const itemStyle = {
        backgroundColor:'#f4f4f4',

    }

    let getStyle = ()=>{


            return {
                background: "#f4f4f4",
                padding: "10px",
                borderBottom: "1px #ccc dotted",
                textDecoration:todo.todo.completed?'line-through':'none'
            }
        }
    const {id,title} =todo.todo
    return (
        <div style={getStyle()}>
            <p>
                <input
                    type='checkbox'
                    onChange={todo.markComplete.bind(this,id)}>

                </input>{"   "}{title}
                <button
                    style={btnStyle}
                    onClick={todo.delTodo.bind(this,id)}
                >x</button>

            </p>
        </div>

    )


}

export default TodoItem;
