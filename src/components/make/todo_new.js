import React, { Component } from 'react';
import { TextField } from 'material-ui';

class TodoNew extends Component {
  render() {
    return (
      <div className="todo-new">
        <TextField
          hintText="What do you wish to do ?"
          floatingLabelText="Your Wish"
          floatingLabelFixed={true}
          fullWidth={true}
          value={this.state.task || ''}
          onChange={ (event, newValue) => this.onTaskChange(event) }
          onBlur={(event) => this.onValueChange("task", event.target.value)}
          errorText=""
        /><br />
      </div>
    )
  }
}
export default Manage


