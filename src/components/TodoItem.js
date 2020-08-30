import React, {Component} from 'react';

function TodoItem(todo) {
    const itemStyle = {
        backgroundColor:'#f4f4f4'
    }

    let getStyle = ()=>{


            return {
                backgroundColor:'#f4f4f4',
                borderBottom: '1px #ccc dotted',
                textDecoration:todo.todo.completed?'line-through':'none'
            }
        }
    const {id,title} =todo.todo
    return (
        <div style={getStyle()}>
            <p>
                <input type='checkbox' onChange={todo.markComplete.bind(this,id)}></input>
            {title}</p>
        </div>

    )


}

export default TodoItem;
