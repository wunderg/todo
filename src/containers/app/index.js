import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Colors from 'material-ui/lib/styles/colors';
import Toolbar from 'material-ui/lib/toolbar/toolbar';
import ToolbarGroup from 'material-ui/lib/toolbar/toolbar-group';
import ToolbarSeparator from 'material-ui/lib/toolbar/toolbar-separator';
import ToolbarTitle from 'material-ui/lib/toolbar/toolbar-title';

const style = {
  color: Colors.blue100,
  marginLeft: 10,
  marginTop: 5
};

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div classNameName="">
        <Toolbar>
          <ToolbarGroup firstChild={true} float="left">
            <i className="fa fa-github-alt fa-3x fa-spin" style={style}></i>
          </ToolbarGroup>
        </Toolbar>
        { this.props.children }
      </div>
    );
  }
}

