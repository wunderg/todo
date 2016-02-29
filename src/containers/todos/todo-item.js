import React, { Component, PropTypes } from 'react';
import ListItem from 'material-ui/lib/lists/list-item';
import Checkbox from 'material-ui/lib/checkbox';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    e.preventDefault();
    this.props.toggle(this.props.item._id);
    this.props.postTodo({ _id: this.props.item._id })
    .then(result => {
      console.log(result.payload.statusText);
      if (result.payload.statusText !== 'OK') {
        this.props.toggle(this.props.item._id);
      }
    });
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
  item: PropTypes.object,
  postTodo: PropTypes.func
};

export default Todo;
