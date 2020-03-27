import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {

    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }

    };
    getTextStyle = () => {
        return { color: this.props.todo.color ? 'green' : 'black' }
    };

    render () {
        const {id, title} = this.props.todo;

        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind
                    (this, id)}/> {''}
                    <h3 style={this.getTextStyle()}>{title}</h3>
                <button onClick={this.props.delTodo.bind(this,id)}
                        style={btnStyle}>x</button>
                <button onClick={this.props.changeTodoColor.bind(this,id)}
                        style={newBtnStyle}>y</button>

                </p>
            </div>

        );

    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
};

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
};

const newBtnStyle = {
    background: '#9bff55',
    color: '#0e3332',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '30%',
    cursor: 'pointer',
    float: 'right',
};


export default TodoItem;