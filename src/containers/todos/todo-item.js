import React, { Component } from 'react';

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.onItemClick(this.props.item);
  }

  render() {
    return (
      <li onClick={this.onClick}>
        {this.props.item.text}
      </li>
    );
  }
}
