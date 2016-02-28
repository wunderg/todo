import React, { Component } from 'react';
import TextField from 'material-ui/lib/text-field';
import FlatButton from 'material-ui/lib/flat-button';

class TextInput extends Component {
  constructor(props) {
   super(props);
   this.state = {
     text: this.props.text || ''
   };
   this.handleChange = this.handleChange.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    console.log(this.state);
    return (
      <div className="">
        <TextField
          floatingLabelText="Type in Here"
          onChange={this.handleChange}
          value={this.state.text}
        />
        <FlatButton onClick={this.handleSubmit} label="Add Todo" primary={true} />
      </div>
    );
  }

  handleChange(e) {
    this.setState({ text: e.target.value})
  }

  handleSubmit(e) {
    this.setState({text: ''});
    this.props.addTodo(this.state.text);
  }
}

export default TextInput;
