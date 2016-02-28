import React, { Component } from 'react';
import ListItem from 'material-ui/lib/lists/list-item';
import Checkbox from 'material-ui/lib/checkbox';

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  render() {
    return (
      <ListItem
        onClick={this.onClick}
        primaryText={this.props.item.text}
        leftCheckbox={<Checkbox checked={this.props.item.completed}/>} />
    );
  }

  onClick() {
    this.props.toggle(this.props.item.id);
  }

}
