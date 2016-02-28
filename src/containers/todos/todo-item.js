import React, { Component } from 'react';

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    console.log(this);
    this.props.toggle(this.props.item.id);
  }

  render() {
    return (
      <li onClick={this.onClick}>
        {this.props.item.text}
      </li>
    );
  }
}
