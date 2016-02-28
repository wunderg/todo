import React, { Component, PropTypes } from 'react';
import ListItem from 'material-ui/lib/lists/list-item';
import Checkbox from 'material-ui/lib/checkbox';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.toggle(this.props.item.id);
  }

  render() {
    return (
      <ListItem
        onClick={this.onClick}
        primaryText={this.props.item.text}
        leftCheckbox={
        <Checkbox checked={this.props.item.completed} />}
      />
    );
  }


}

Todo.propTypes = {
  toggle: PropTypes.func,
  text: PropTypes.string,
  item: PropTypes.object
};

export default Todo;
