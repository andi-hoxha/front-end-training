/**
 * Created by LeutrimNeziri on 09/04/2019.
 */
import withStyles from "@material-ui/core/styles/withStyles";
import BinarySearchTreeImage from "assets/images/lecture5/binary_search_tree.png";
import Code from "presentations/Code";
import Divider from "presentations/Divider";
import { Italic } from "presentations/Label";
import PageLink from "presentations/rows/nav/PageLink";
import SimpleLink from "presentations/rows/SimpleLink";
import Typography from "presentations/Typography";
import React, { Fragment } from "react";
import EditIcon from '@material-ui/icons/Edit'
import RemoveIcon from '@material-ui/icons/Clear'
import { Table, TableHead, TableRow, TableBody, TableCell, IconButton, Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button, ListItem, RadioGroup, Radio, FormControlLabel } from "@material-ui/core";
import Chart from "presentations/Chart";
import uuid from 'uuid'


const styles = ({ typography, size }) => ({
  graphs: {
    display: 'flex',
    flexFlow: 'row wrap',
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    width: '100%'
  },
  card: {
    backgroundColor: 'white',
    width: `calc(50% - ${size.spacing * 2}px)`,
    margin: size.spacing,
    height: 420,
    padding: 8,
    display: 'flex',
    flexFlow: 'column wrap',
    alignItems: 'flex-start'
  },
  graph: {
    display: 'flex',
    flex: 1,
    width: '100%',
    height: 'auto'
  }
})

/**
 * This tree is represented by Nodes that look like this:
 * {
 *  value: 10,
 *  left: a node to the left, same model
 *  right: a node to the right, same model
 * }
 */
const tree = {
  value: 27,
  left: {
    value: 14,
    left: {
      value: 10
    },
    right: {
      value: 19
    }
  },
  right: {
    value: 35,
    left: {
      value: 31
    },
    right: {
      value: 42
    }
  }
}

const Card = ({options, title, titleClass, graphClass, ...other}) => {
  return <div {...other}>
    <Typography variant={'title'} className={titleClass}>{title}</Typography>
    <Chart className={graphClass} options={options} />
  </div>
}


class AssignmentsRecap extends React.Component {

  constructor (props) {
    super (props)
    this.state = {
      text: '',
      items: [
        {
          id: uuid.v1(),
          name: "Agon",
          lastName: "Lohaj",
          username: "agon_lohaj",
          type: "Admin",
          age: 28,
          gender: "M"
        },
        {
          id: uuid.v1(),
          name: "Trim",
          lastName: "Lohaj",
          username: "trim_lohaj",
          type: "Normal",
          age: 36,
          gender: "M"
        },
        {
          id: uuid.v1(),
          name: "Festina",
          lastName: "Ymeri",
          username: "festina_ymeri",
          type: "Normal",
          age: 24,
          gender: "F"
        }
      ]
    }
  }
  
  /**
   * TODO: Implement Binary Search Tree Method
   * @param {Object} node 
   * @param {int} search 
   */
  binarySearchTree(node, search) {
    if (!node) {
      return -1
    }
    // implement 
    if (node.value === search) {
      return node
    }

    if (node.value > search) {
      return this.binarySearchTree(node.left, search)
    }
    return this.binarySearchTree(node.right, search)
  }

  onSearchChanged = (event) => {
    event.preventDefault()
    this.setState({
      text: event.target.value
    })
  }
  
  onValueChanged = (event) => {
    event.preventDefault()
    const { value, name } = event.target
    this.setState((prevState) => ({
      editing: {
        ...prevState.editing,
        [name]: value
      }
    }))
  }

  onEdit = (item, event) => {
    event.preventDefault()

    this.setState({
      editing: item
    })
  }

  onAddNewClicked = (event) => {
    event.preventDefault()

    this.setState({
      editing: {
        id: uuid.v1(),
        type: "Admin",
        gender: "F"
      }
    })
  }

  onSaveClicked = (event) => {
    event.preventDefault()

    const { items, editing } = this.state
    let found = items.find(which => which.id === editing.id)

    let state = {
      items
    }

    if (found) {
      state = {
        ...state,
        items: items.map(next => {
          if (next.id === editing.id) {
            return editing
          }
          return next
        })
      }
    } else {
      state = {
        ...state,
        items: [...items, editing]
      }
    }

    this.setState({
      ...state,
      editing: undefined
    })
  }

  onCancelClicked = (event) => {
    if (event) {
      event.preventDefault()
    }
    this.setState({
      editing: undefined
    })
  }

  onRemove = (item, event) => {
    event.preventDefault()

    this.setState((prevState) => ({
      items: prevState.items.filter(next => next.id !== item.id)
    }))
  }

  averageAgeOptions (items) {
    const admins = items.filter(next => next.type === "Admin")
    const normal = items.filter(next => next.type === "Normal")

    const ageSum = (sum, next) => {
      return sum + next.age
    }
    const totalAdminAge = admins.reduce(ageSum, 0)
    const totalNormalAge = normal.reduce(ageSum, 0)
    return {
      series: [
        {
          name: 'Average age between types',
          type: 'pie',
          data: [
            {
              name: 'Admin',
              value: totalAdminAge / (admins.length || Infinity)
            },
            {
              name: 'Normal',
              value: totalNormalAge / (normal.length || Infinity)
            }
          ]
        }
      ]
    }
  }

  malesVsFemales (items) {
    const males = items.filter(next => next.gender === "M")
    const females = items.filter(next => next.gender === "F")

    return {
      series: [
        {
          name: 'Males vs Females',
          type: 'pie',
          data: [
            {
              name: 'Male',
              value: males.length
            },
            {
              name: 'Female',
              value: females.length
            }
          ]
        }
      ]
    }
  }

  render() {
    const { classes, section } = this.props
    const { items, editing = {}, text } = this.state
    const search = 10
    const value = this.binarySearchTree(tree, search)
    console.log('value', value, 'search', search)
    
    const filtered = items.filter(next => {
      const searchText = this.state.text.toLowerCase()
      const name = next.name.toLowerCase()
      const username = next.username.toLowerCase()
      const lastName = next.lastName.toLowerCase()
      const type = next.type.toLowerCase()
      return name.includes(searchText) ||
        lastName.includes(searchText) ||
        username.includes(searchText) ||
        type.includes(searchText)
    })
    const cardProps = {
      titleClass: classes.title,
      className: classes.card,
      graphClass: classes.graph
    }

    return (
      <Fragment>
        <Typography variant={'heading'}>
          {section.display}
          <Typography variant='p'>
            Home Assignment
          </Typography>
          <Divider />
        </Typography>
        <Typography variant='p'>
          Title: "Implement add/update/delete on a User List"<br />
          We've created the following skeleton and we want to make it functional. Fill in the missing pieces of the code! The requirements are:
          <ol>
            <li>Hold a array of users at the state of this component</li>
            <li>Render rows on the table based on the items of the array</li>
            <li>When edit button is clicked edit that item in the dialog, by passing the model there (TIP: hold the item being edited on the state of this component, when that exists the dialog opens)</li>
            <li>Add the remove functionality</li>
            <li>Based on user types show a graf of the average age of the user</li>
          </ol>
        </Typography>
        <TextField fullWidth margin="normal" onChange={this.onSearchChanged} value={text} label="Search"/>
        <Button onClick={this.onAddNewClicked} color="primary">Add New Item</Button>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Username</TableCell>
              <TableCell>Type (Admin/Normal)</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filtered.map((next, index) => {
              return <TableRow key={next.id}>
                <TableCell>{next.name}</TableCell>
                <TableCell>{next.lastName}</TableCell>
                <TableCell>{next.username}</TableCell>
                <TableCell>{next.type}</TableCell>
                <TableCell>{next.age}</TableCell>
                <TableCell>{next.gender}</TableCell>
                <TableCell>
                  <IconButton onClick={(event) => this.onEdit(next, event)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={(event) => this.onRemove(next, event)}>
                    <RemoveIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            })}
          </TableBody>
        </Table>
        <Dialog open={!!editing.id} onClose={this.onCancelClicked}>
          <DialogTitle>
            My Awesome Dialog
          </DialogTitle>
          <DialogContent>
            <TextField fullWidth margin="normal" name="name" onChange={this.onValueChanged} value={editing.name} label="Name"/>
            <TextField fullWidth margin="normal" name="lastName" onChange={this.onValueChanged} value={editing.lastName} label="Last Name"/>
            <TextField fullWidth margin="normal" name="username" onChange={this.onValueChanged} value={editing.username} label="User Name"/>
            <TextField fullWidth margin="normal" name="type" onChange={this.onValueChanged} select value={editing.type} label="Select Type">
              <ListItem value="Admin">Admin</ListItem>
              <ListItem value="Normal">Normal</ListItem>
            </TextField>
            <TextField fullWidth margin="normal" name="type" onChange={this.onValueChanged} select value={editing.type} label="Select Type">
              <ListItem value="Admin">Admin</ListItem>
              <ListItem value="Normal">Normal</ListItem>
            </TextField>
            <TextField fullWidth margin="normal" name="age" onChange={this.onValueChanged} value={editing.age} label="Age"/>
            <RadioGroup name="gender" name="gender" onChange={this.onValueChanged} value={editing.gender}>
              <FormControlLabel value="M" control={<Radio />} label="Male"/>
              <FormControlLabel value="F" control={<Radio />} label="Female"/>
            </RadioGroup>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.onCancelClicked} color="secondary">
              Cancel
            </Button>
            <Button onClick={this.onSaveClicked} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>
        <div className={classes.graphs}>
          <Card options={this.averageAgeOptions(filtered)} {...cardProps} title={'Average age between types'} />
          <Card options={this.malesVsFemales(filtered)} {...cardProps} title={'Males vs Females between types'} />
        </div>
        <Typography variant='p'>
          Title: "Implement the Binary Search Tree"<br />
          Description: "Using Binary Search Tree I will search for the given value at the given tree structure"<br />
          To understand how binary search tree works visit: <SimpleLink href="https://www.tutorialspoint.com/data_structures_algorithms/binary_search_tree.htm">Binary Search Tree Explanation</SimpleLink><br />
        </Typography>
        <Typography variant='p'>
          Implement the algorithm that searches the given tree and returns the node where the value {search} exists:
        </Typography>
        <img src={BinarySearchTreeImage} />
      </Fragment>
    )
  }
}

export default withStyles(styles)(AssignmentsRecap)
