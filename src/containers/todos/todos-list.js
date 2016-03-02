import React, { Component, PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import styles from './todos.css';

import Todo from './todo-item';
import Toggles from './toggles';

import List from 'material-ui/lib/lists/list';

const style = {
  marginTop: 10
};

class Todos extends Component {
  constructor() {
    super(...arguments);
    this.showAll = this.showAll.bind(this);
    this.showCompleted = this.showCompleted.bind(this);
    this.showInProgress = this.showInProgress.bind(this);
  }

  showAll() {
    this.props.showAll(this.props.todos);
  }

  showCompleted() {
    console.log(this);
    this.props.showCompleted(this.props.todos);
  }

  showInProgress() {
    console.log(this);
    this.props.showInProgress(this.props.todos);
  }

  render() {
    console.log(styles);
    const todos = this.props.visible.todos.map(item =>
      <Todo
        key={item._id}
        item={item}
        toggle={this.props.toggle}
        postTodo={this.props.postTodo}
        delete={this.props.delete}
      />
      );
    return (
      <div className="">
        <List subheader="TODO LIST" zDepth={1} style={style}>
          <ReactCSSTransitionGroup
            transitionName="smooth"
            transitionEnterTimeout={300}
            transitionLeaveTimeout={300}
            transitionAppearTimeout={100}
            transitionAppear={true}
          >
            {todos}
          </ReactCSSTransitionGroup>
        </List>
        <div className="col-xs-offset-2 col-xs-8 around-xs">
          <Toggles
            visible={this.props.visible}
            showAll={this.showAll}
            showCompleted={this.showCompleted}
            showInProgress={this.showInProgress}
          />
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
  visible: PropTypes.object,
  showAll: PropTypes.func,
  showCompleted: PropTypes.func,
  showInProgress: PropTypes.func
};

export default Todos;
