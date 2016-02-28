import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addTodo, toggleTodo } from '../../actions';

import Todos from '../todos/todos-list';
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

  render() {
    return (
      <div className="wrap container-fluid">
        <div className="row around-xs">
          <div className="col-xs-9 center-xs">
            <div className="box">
              <TextInput addTodo={this.props.addTodo}/>
            </div>
          </div>
        </div>
        <div className="row around-xs">
          <div className="col-xs-5">
            <div className="box">
              <Todos todos={this.props.todos} toggle={this.props.toggleTodo} />
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
  return { todos: state.todos };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addTodo, toggleTodo }, dispatch);
}

Home.propTypes = {
  addTodo: PropTypes.func,
  toggleTodo: PropTypes.func,
  todos: PropTypes.array
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
