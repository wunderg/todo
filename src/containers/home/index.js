import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { increment, decrement, reset } from '../../actions';
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
              <h1 style={style}>Hello</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
};

// function mapStateToProps(state) {
//   return { count: state.counter.count };
// }

export default connect()(Home);
