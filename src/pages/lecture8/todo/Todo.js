/**
 * Created by LeutrimNeziri on 09/04/2019.
 */
import { Button, TextField } from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import TodoForm from "pages/lecture8/todo/TodoForm";
import ToDoList from "pages/lecture8/todo/ToDoList";
import React, { Fragment } from "react";
import uuid from 'uuid';
const styles = ({ typography }) => ({
  actionWrapper: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'space-between',
    width: '100%'
  },
})

class ReactIntegration extends React.Component {

  constructor (props) {
    super (props)

    this.state = {
      search: '',
      items: [{
        id: uuid.v1(),
        text: 'Gots to buy me some food!'
      }, {
        id: uuid.v1(),
        text: 'Gots to buy me some flowers!'
      }],
      open: false
    }
  }

  onChange = (event) => {
    this.setState({
      search: event.target.value
    })
  }

  onToggle = (item, checked) => {
    this.setState((prevState) => ({
      items: prevState.items.map(next => {
        if (next.id === item.id) {
          return {
            ...next,
            completed: checked
          }
        }
        return next
      })
    }))
  }

  onNewTaskClicked = () => {
    this.setState({
      open: true
    })
  }

  onHide = (event) => {
    if (event) {
      event.preventDefault()
    }

    this.setState({
      open: false
    })
  }

  onTodoAdded = (item) => {
    this.setState((prevState) => ({
      items: [...prevState.items, item],
      open: false
    }))
  }

  render() {
    const { classes } = this.props
    const { items, search, open } = this.state

    const filtered = items.filter(next => {
      const text = next.text || ''
      return text.toLowerCase().includes(search.toLowerCase())
    })
    return (
      <Fragment>
        <div className={classes.actionWrapper}>
          <TextField label="Search" value={search} onChange={this.onChange}/>
          <Button onClick={this.onNewTaskClicked}>Add new ToDo</Button>
        </div>
        <ToDoList items={filtered} onToggle={this.onToggle} />
        <TodoForm open={open} onHide={this.onHide} onTodoAdded={this.onTodoAdded} />
      </Fragment>
    )
  }
}

export default withStyles(styles)(ReactIntegration)
