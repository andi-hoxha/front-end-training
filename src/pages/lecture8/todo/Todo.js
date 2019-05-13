/**
 * Created by LeutrimNeziri on 09/04/2019.
 */
import { Button, TextField } from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import TodoForm from "pages/lecture8/todo/TodoForm";
import ToDoList from "pages/lecture8/todo/ToDoList";
import React, { Fragment } from "react";
import uuid from 'uuid';
import { connect } from 'react-redux'
import { filter } from 'reducers/todo/ToDoActions'
const styles = ({ typography }) => ({
  actionWrapper: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'space-between',
    width: '100%'
  },
})

class Todo extends React.Component {

  state = {
    open: false
  }
  
  onChange = (event) => {
    const { filter } = this.props
    filter(event.target.value)
  }

  render() {
    const { classes, search } = this.props
    const { open } = this.state
    return (
      <Fragment>
        <div className={classes.actionWrapper}>
          <TextField label="Search" value={search} onChange={this.onChange}/>
          <Button onClick={this.onNewTaskClicked}>Add new ToDo</Button>
        </div>
        <ToDoList onToggle={this.onToggle} />
        <TodoForm open={open} onCancelClicked={this.onHide} />
      </Fragment>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    search: store.todo.filter
  }
}

const mapDispatchToProps = (dispatch) => ({
  filter: (text) => dispatch(filter(text))
})

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Todo))
