/**
 * Created by LeutrimNeziri on 09/04/2019.
 */
import { Table, TableBody, TableCell, TableHead, TableRow, Checkbox } from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import React from "react";
const styles = ({ typography }) => ({
  root: {
    minHeight: 600,
    width: '100%'
  }
})

class ToDoList extends React.Component {

  onToggle = (event, item) => {
    event.preventDefault()

    const { onToggle } = this.props
    onToggle(item, event.target.checked)
  }

  render() {
    const { classes, items } = this.props
    return (
      <div className={classes.root}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Text</TableCell>
              <TableCell>Completed</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((next, index) => {
              return <TableRow key={next.id}>
                <TableCell>{next.text}</TableCell>
                <TableCell><Checkbox checked={!!next.completed} onChange={(event) => this.onToggle(event, next)} /></TableCell>
              </TableRow>
            })}
          </TableBody>
        </Table>
      </div>
    )
  }
}

export default withStyles(styles)(ToDoList)
