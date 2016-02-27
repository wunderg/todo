import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { increment, decrement, reset } from '../../actions';
import FlatButton from 'material-ui/lib/flat-button';
import Colors from 'material-ui/lib/styles/colors';
import storeConfig from '../../store';

const store = storeConfig();

const style = {
  margin: 12,
  paddingTop: 10,
  color: Colors.blue200
};

class Home extends Component {
  constructor(props) {
    super(props);
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }

  increment() {
    this.props.increment(this.props.count);
  }

  decrement() {
    this.props.decrement(this.props.count);
  }

  reset() {
    this.props.reset()
  }

  render() {
    console.log(store.getState());
    return (
      <div className="wrap container-fluid">
        <div className="row around-xs">
          <div className="col-xs-3 center-xs">
            <div className="box">
              <h1 style={style}>{this.props.count}</h1>
            </div>
          </div>
        </div>
        <div className="row around-xs">
          <div className="col-xs-5 center-xs">
            <div className="box">
              <div className="">
                <FlatButton onClick={ this.increment } primary={true} style={style} label={<i className="fa fa-plus fa-2x"></i>} />
                <FlatButton onClick={ this.reset } secondary={true} style={style} label={<i className="fa fa-times fa-2x"></i>} />
                <FlatButton onClick={ this.decrement } secondary={true} style={style} label={<i className="fa fa-minus fa-2x"></i>} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  count: PropTypes.number,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  reset: PropTypes.func
};

function mapStateToProps(state) {
  return { count: state.counter.count };
}

export default connect(mapStateToProps, { increment, decrement, reset })(Home);
