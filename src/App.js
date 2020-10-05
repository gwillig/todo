import './App.css';
import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Todos from './components/Todo'
import Header from './components/laylout/Header'
import AddTodo  from './components/AddTodo'
import About from './components/pages/About'
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios'

class App extends Component{
    state = {todos:[]}

    componentDidMount(){
        axios
            .get('https://jsonplaceholder.typicode.com/todos?_limit=10')
            .then(res => this.setState({ todos: res.data }));
    }
    delTodo = (id) =>{
        /*
        * @descriptipon
        *  Marks a given DotoItem
        * */
        this.setState(
            {todos:this.state.todos.filter(todo=>{
                    return todo.id!==id

                })

            }

        )

    }
    markComplete = (id) =>{
        /*
        * @descriptipon
        *  Delete a given DotoItem
        * */
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
    addTodo=(title)=>{
        console.log(title)
        const newTodo={
            id:uuidv4(),
            title:title,
            completed:false
        }
        this.setState({todos:[...this.state.todos,newTodo]})
    }
    render (){

       return(
           <Router>
               <div className="App">
                   <div className="container">
                       <Header></Header>
                       <Route exact path="/" render={props=>(
                           <React.Fragment>
                               <AddTodo addTodo={this.addTodo}></AddTodo>
                               <Todos
                                   todos={this.state.todos}
                                   markComplete={this.markComplete}
                                   delTodo={this.delTodo}
                               ></Todos>
                           </React.Fragment>
                       )}

                       />
                       <Route path="/about" component={About}></Route>

                   </div>
               </div>
           </Router>

           )

  }
}



export default App;
