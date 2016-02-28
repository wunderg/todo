import React, { Component } from 'react';
import Todo from './todo-item';

class Todos extends Component {
  constructor(props){
    super(props);
    // this.onItemClick = this.onItemClick.bind(this);
  }

  // onItemClick(item){
  //   console.log(this);
  //   this.props.toogle(item.id);
  // }

  render() {
    return (
      <ul>
        {this.props.todos.map(item  =>
          <Todo key={item.id} item={item} toggle={this.props.toggle} />
        )}
      </ul>
    );
  }
}

export default Todos;
