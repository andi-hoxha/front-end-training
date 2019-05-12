/**
 * Created by LeutrimNeziri on 09/04/2019.
 */
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import React from "react";
import uuid from 'uuid';
const styles = ({ typography }) => ({
})

class TodoForm extends React.Component {

  constructor (props) {
    super (props)

    this.state = {
      text: ''
    }
  }

  onValueChanged = (event) => {
    event.preventDefault()

    this.setState({
      text: event.target.value
    })
  }

  onSaveClicked = (event) => {
    event.preventDefault()

    const { onTodoAdded } = this.props
    const { text } = this.state
    if (onTodoAdded) {
      onTodoAdded({
        id: uuid.v1(),
        text: text
      })
    }
    this.setState({
      text: ''
    })
  }

  render() {
    const { classes, open, onCancelClicked } = this.props
    const { text } = this.state
    return (
      <Dialog open={open} onClose={onCancelClicked}>
        <DialogTitle>
          Add new Todo
        </DialogTitle>
        <DialogContent>
          <TextField fullWidth margin="normal" name="text" onChange={this.onValueChanged} value={text} label="Name"/>
        </DialogContent>
        <DialogActions>
          <Button onClick={onCancelClicked} color="secondary">
            Cancel
          </Button>
          <Button onClick={this.onSaveClicked} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    )
  }
}

export default withStyles(styles)(TodoForm)
