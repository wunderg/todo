import React, { Component, PropTypes } from 'react';
import { connect,  } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addTodo } from '../../actions';

import Todos from '../todos/todos-list';
import TextInput from '../text-input';

import FlatButton from 'material-ui/lib/flat-button';
import Colors from 'material-ui/lib/styles/colors';
import storeConfig from '../../store';

const style = {
  margin: 12,
  paddingTop: 10,
  color: Colors.blue200
};

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="wrap container-fluid">
        <div className="row around-xs">
          <div className="col-xs-3 center-xs">
            <div className="box">
              <TextInput addTodo={this.props.addTodo}/>
            </div>
          </div>
        </div>
        <div className="row around-xs">
          <div className="col-xs-3 center-xs">
            <div className="box">
              <Todos todos={this.props.todos} />
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
  return bindActionCreators({addTodo}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
