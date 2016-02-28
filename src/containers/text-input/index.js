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
    return (
      <div className="">
        <TextField
          hintText="Hint Text"
          floatingLabelText="Floating Label Text"
          onChange={this.handleChange}
        />
        <FlatButton onClick={this.handleSubmit} label="Primary" primary={true} />
      </div>
    );
  }

  handleChange(e) {
    this.setState({ text: e.target.value})
  }

  handleSubmit(e) {
    this.props.addTodo(this.state.text);
    this.setState({text: ''});
  }
}

export default TextInput;
