import React, { Component, PropTypes } from 'react';
import Todo from './todo-item';
import List from 'material-ui/lib/lists/list';

const style = {
  marginTop: 10
};

class Todos extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <List subheader="TODO LIST" zDepth={1} style={style}>
        {this.props.todos.map(item =>
        <Todo
          key={item._id}
          item={item}
          toggle={this.props.toggle}
          postTodo={this.props.postTodo}
        />
        )}
      </List>
    );
  }
}

Todos.propTypes = {
  todos: PropTypes.array,
  toggle: PropTypes.func,
  postTodo: PropTypes.func
};

export default Todos;
