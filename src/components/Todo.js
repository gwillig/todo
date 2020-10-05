import React from 'react';
import TodoItem from "./TodoItem";
import PropTypes from 'prop-types'

function Todos(props) {
    return props.todos.map((todoItem)=>(

        <TodoItem
            key={todoItem.id}
            todo={todoItem}
            markComplete={props.markComplete}
            delTodo = {props.delTodo}
        ></TodoItem>
        )
    )

}

Todos.propTypes = {
    todos: PropTypes.array.isRequired
}


export default Todos;
