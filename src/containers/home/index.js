import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addTodo, toggleTodo, fetchTodos, postTodo, deleteTodo } from '../../actions';

import TodoList from '../todos/todos-list';
import TextInput from '../text-input';

// import Colors from 'material-ui/lib/styles/colors';

// const style = {
//   margin: 12,
//   paddingTop: 10,
//   color: Colors.blue200
// };

class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchTodos();
  }

  render() {
    return (
      <div className="wrap container-fluid">
        <div className="row around-xs">
          <div className="col-xs-9 center-xs">
            <div className="box">
              <TextInput
                addTodo={this.props.addTodo}
                postTodo={this.props.postTodo}
              />
            </div>
          </div>
        </div>
        <div className="row around-xs">
          <div className="col-xs-5">
            <div className="box">
              <TodoList
                todos={this.props.todos}
                visible={this.props.visible}
                postTodo={this.props.postTodo}
                toggle={this.props.toggleTodo}
                delete={this.props.deleteTodo}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
};

function mapStateToProps(state) {
  return {
    todos: state.todos,
    visible: state.visible
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addTodo, toggleTodo, fetchTodos, postTodo, deleteTodo }, dispatch);
}

Home.propTypes = {
  addTodo: PropTypes.func,
  toggleTodo: PropTypes.func,
  todos: PropTypes.array,
  postTodo: PropTypes.func,
  fetchTodos: PropTypes.func,
  deleteTodo: PropTypes.func,
  visible: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
