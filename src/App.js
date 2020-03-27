import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import uuid from 'node-uuid';

import './App.css';

class App extends Component {
    state = {
        todos: [
            {
                id: uuid.v4(),
                title: "Take out the trash",
                completed: false,
                color: false
            },
            {
                id: uuid.v4(),
                title: "Vacuum the rug",
                completed: false,
                color: false
            },

            {
                id: uuid.v4(),
                title: "Read about React",
                completed: false,
                color: false
            },
        ]
    };

//Toggle complete
    markComplete = (id) => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {// Math.sum(a,b,c)  arr = [a,b,c] Math.sum(...arr)
                    todo.completed = !todo.completed
                }
                return todo;
            })
        });
    };

    //delete
    delTodo = (id) => {
        this.setState({todos: this.state.todos.filter(todo => todo.id !== id)})
    };

    //Add Todo
    addTodo = (title) => {
        if (title) {
            const newTodo = {
                id: uuid.v4(),
                title,
                completed: false,
                color: false
            };
            this.setState({todos: [...this.state.todos, newTodo]});
        }
    };

    //Change Todo colour

    changeTodoColor = (id) => {
        this.setState({todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    todo.color = !todo.color
                }
                return todo;
            })
        })
    };


    render() {
        return (
            <Router>
                <div className="App">
                    <div className="container">
                        <Header/>
                        <Route path="/" render={props => (
                            <React.Fragment>
                                <AddTodo addTodo={this.addTodo}/>
                                <Todos todos={this.state.todos} markComplete=
                                    {this.markComplete} delTodo={this.delTodo} changeTodoColor={this.changeTodoColor}/>
                            </React.Fragment>
                        )}/>
                        <Route path="/about" component={About}/>

                    </div>

                </div>
            </Router>

        );

    }
}


export default App;
