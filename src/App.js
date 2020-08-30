import './App.css';
import React, {Component} from 'react';
import Todos from './components/Todo'

class App extends Component{
    state = {
        todos:[
            {
                id:1,
                title:'Take the trash out',
                completed: false

            },
            {
                id:2,
                title:'Dinner with girlfriend',
                completed: false

            },
            {
                id:3,
                title:'Meeting with Boss',
                completed: true

            }
        ]
    }

    render (){
        let markComplete = (id) =>{
            this.setState(
                {todos:this.state.todos.map(todo=>{
                    if (todo.id===id){
                        todo.completed =!todo.completed
                    }
                    return todo
                    })

                }

                )

        }
       return(
           <div className="App">
               <Todos todos={this.state.todos} markComplete={markComplete}></Todos>
           </div>
           )

  }
}

export default App;
