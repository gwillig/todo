import React, {Component} from 'react';
import TodoItem from "./TodoItem";

function Todos(props) {
    return props.todos.map((todoItem)=>(

        <TodoItem key={todoItem.id} todo={todoItem} markComplete={props.markComplete}></TodoItem>
        )
    )

}

export default Todos;
