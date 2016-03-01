import React, { Component, PropTypes } from 'react';

import Todo from './todo-item';
import Toggles from './toggles';

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
      <div className="">
        <List subheader="TODO LIST" zDepth={1} style={style}>
          {this.props.visible.todos.map(item =>
          <Todo
            key={item._id}
            item={item}
            toggle={this.props.toggle}
            postTodo={this.props.postTodo}
            delete={this.props.delete}
          />
          )}
        </List>
        <div className="col-xs-offset-2 col-xs-8 around-xs">
          <Toggles visible={this.props.visible} />
        </div>
      </div>
    );
  }
}

Todos.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object),
  toggle: PropTypes.func,
  postTodo: PropTypes.func,
  delete: PropTypes.func,
  visible: PropTypes.object
};

export default Todos;
