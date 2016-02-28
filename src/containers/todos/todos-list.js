import React, { Component } from 'react';
import Todo from './todo-item';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import Checkbox from 'material-ui/lib/checkbox';

const style = {
  marginTop: 10
}

class Todos extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <List subheader="TODO LIST" zDepth={1} style={style}>
        {this.props.todos.map(item  =>
          <Todo key={item.id} item={item} toggle={this.props.toggle} />
        )}
      </List>
    );
  }
}

export default Todos;
