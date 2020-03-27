import React, {Component} from 'react';
import TodoItem from "./TodoItem";
import PropTypes from 'prop-types';

class Todos extends Component {

    render() {

        return this.props.todos.map((todo) => ( // arr=[a,b,c]    arr.forEach((something) => {console.log(something)}) // a, b, c
            //arr=[1,2,3]    processed = arr.map((something) => { return something+2}); // processed = [3,4,5]
            //arr=[1,2,3]    processed = arr.filter((something) => { return something % 2 === 1})    // processed = [1,3]
            <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete}
            delTodo={this.props.delTodo} changeTodoColor={this.props.changeTodoColor}/>
        ));

    }
}

    Todos.propTypes = {
        todos: PropTypes.array.isRequired
    };

export default Todos;
