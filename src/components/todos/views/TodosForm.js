import React, { Component } from 'react';
import TodoItem from './TodoItem.js';

export default class TodosForm extends Component {
    constructor(props) {
        super(props);
        this.onToggle = this.onToggle.bind(this);
        this.onDelete = this.onDelete.bind(this);
    }

    onToggle(e, item) {
        this.props.onToggle(e, item)
        console.log('item', item);
    }

    onDelete(e, item) {
        this.props.onDelete(e, item)
        console.log('item', item);
    }

    render() {
        let todoList = this.props.todo.filter((item) => !item.deleted).map((item, index) => (
            <li key={ item.key } style={ { textDecoration: item.completed ? 'line-through' : 'none' } }>
              <TodoItem todo={ item } onToggle={ this.onToggle } onDelete={ this.onDelete } />
            </li>
        ))
        return (
            <div>
              { todoList }
            </div>

        )
    }


}