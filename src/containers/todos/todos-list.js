import React, { Component } from 'react';
import Todo from './todo-item';

class Todos extends Component {
  onItemClick(item){
    console.log(item);
  }
  render() {
    return (
      <ul>
        {this.props.todos.map(item  =>
          <Todo key={item.id} item={item} onItemClick={this.onItemClick} />
        )}
      </ul>
    );
  }
}

export default Todos;
