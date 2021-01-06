/**
 * Created by LeutrimNeziri on 09/04/2019.
 */
import withStyles from "@material-ui/core/styles/withStyles";
import BinarySearchTreeImage from "assets/images/lecture5/binary_search_tree.png";
import Code from "presentations/Code";
import Divider from "presentations/Divider";
import {Italic} from "presentations/Label";
import PageLink from "presentations/rows/nav/PageLink";
import SimpleLink from "presentations/rows/SimpleLink";
import Typography from "presentations/Typography";
import React, {Fragment} from "react";
import EditIcon from '@material-ui/icons/Edit'
import RemoveIcon from '@material-ui/icons/Clear'
import {
    Table,
    TableHead,
    TableRow,
    TableBody,
    TableCell,
    IconButton,
    Dialog,
    DialogTitle,
    DialogContent,
    TextField,
    DialogActions,
    Button,
    ListItem,
    RadioGroup,
    Radio,
    FormControlLabel
} from "@material-ui/core";
import Chart from "presentations/Chart";
import {number} from "prop-types";


const styles = ({typography, size}) => ({
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
        <Chart className={graphClass} options={options}/>
    </div>
}


class Assignments extends React.Component {

    state = {
        isOpen: false,
        currentUser: {name: '', lastName: '', username: '', type: '', age: 0, gender: ''},
        item: [],
        showData: false
    }

    /**
     * TODO: Implement Binary Search Tree Method
     * @param {Object} node
     * @param {int} search
     */
    binarySearchTree(node, search) {
        // implement

        // -1 means I cannot find it. Todo return the node
        return -1
    }

    onValueChanged = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        let user = this.state.currentUser;
        name === "age" ? user[name] = parseInt(value || 0) : user[name] = value;
        this.setState(prevState => ({
            // ...prevState.item,
            currentUser: user
        }));
        console.log('user', user)
    }

    onSaveClicked = (event) => {
        event.preventDefault();

        const {item, currentUser} = this.state
        let index = item.indexOf(currentUser)
        let found = item.includes(currentUser)

        if (found) {
            item[index] = currentUser
            this.setState(prevState => ({
                item: [...prevState.item],
                isOpen: !this.state.isOpen,
                currentUser: {name: '', lastName: '', username: '', type: '', age: 0, gender: ''}
            }));
        } else {
            this.setState(prevState => ({
                item: [...prevState.item, currentUser],
                isOpen: !this.state.isOpen,
                currentUser: {name: '', lastName: '', username: '', type: '', age: 0, gender: ''}
            }));
        }
        console.log('Element found ', found)
    }

    openModal = () => {
        this.setState({
            isOpen: !this.state.isOpen,
            currentUser: {name: '', lastName: '', username: '', type: '', age: 0, gender: ''}
        })
    }

    onEdit = (index) => {
        let actualUser = this.state.item[index]
        this.setState({
            isOpen: !this.state.isOpen,
            currentUser: actualUser
        });
        console.log('actualUser', actualUser)
        console.log('user1', this.state.currentUser)
    }

    avgBetweenTypes = () => {
        const {item = []} = this.state
        const admins = item.filter(next => next.type === "Admin")
        const normal = item.filter(next => next.type === "Normal")

        const totalAdminAge = admins.reduce((a, b) => a + b.age, 0)
        const totalNormalAge = normal.reduce((a, b) => a + b.age, 0)
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

    malesVsFemales = () => {
        const {item} = this.state
        const males = item.filter(next => next.gender === "M")
        const females = item.filter(next => next.gender === "F")

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
        const {classes, section} = this.props
        const search = 10
        const value = this.binarySearchTree(tree, search)
        const items = this.state.item.slice();

        const cardProps = {
            titleClass: classes.title,
            className: classes.card,
            graphClass: classes.graph
        }

        // TODO: bind this to the model, calculate it based on the list of items
        const averageAge = {
            series: [
                {
                    name: 'Average age between types',
                    type: 'pie',
                    data: this.state.item
                }
            ]
        }
        // TODO: bind this to the model, calculate it based on the list of items
        const genderEquality = {
            series: [
                {
                    name: 'Average age between types',
                    type: 'pie',
                    data: this.state.item
                }
            ]
        }

        return (
            <Fragment>
                <Typography variant={'heading'}>
                    {section.display}
                    <Typography variant='p'>
                        Home Assignment
                    </Typography>
                    <Divider/>
                </Typography>
                <Typography variant='p'>
                    Title: "Implement add/update/delete on a User List"<br/>
                    We've created the following skeleton and we want to make it functional. Fill in the missing pieces
                    of the code! The requirements are:
                    <ol>
                        <li>Hold a array of users at the state of this component</li>
                        <li>Render rows on the table based on the items of the array</li>
                        <li>When edit button is clicked edit that item in the dialog, by passing the model there (TIP:
                            hold the item being edited on the state of this component, when that exists the dialog
                            opens)
                        </li>
                        <li>Add the remove functionality</li>
                        <li>Based on user types show a graf of the average age of the user</li>
                    </ol>
                </Typography>
                <TextField fullWidth margin="normal" value={''} label="Search"/>
                <Button color="primary" onClick={this.openModal}>Add New Item</Button>
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
                        {items.map((next, index) => {
                            return (
                                <TableRow>
                                    <TableCell>{next.name}</TableCell>
                                    <TableCell>{next.lastName}</TableCell>
                                    <TableCell>{next.username}</TableCell>
                                    <TableCell>{next.type}</TableCell>
                                    <TableCell>{next.age}</TableCell>
                                    <TableCell>{next.gender}</TableCell>
                                    <TableCell>
                                        <IconButton>
                                            <EditIcon onClick={() => this.onEdit(index)}/>
                                        </IconButton>
                                        <IconButton>
                                            <RemoveIcon/>
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
                <Dialog open={this.state.isOpen}>
                    <DialogTitle>
                        My Awesome Dialog
                    </DialogTitle>
                    <DialogContent>
                        <TextField fullWidth margin="normal" value={this.state.currentUser.name} label="Name"
                                   name="name" onChange={this.onValueChanged}/>
                        <TextField fullWidth margin="normal" value={this.state.currentUser.lastName} label="Last Name"
                                   name="lastName" onChange={this.onValueChanged}/>
                        <TextField fullWidth margin="normal" value={this.state.currentUser.username} label="User Name"
                                   name="username" onChange={this.onValueChanged}/>
                        <TextField fullWidth margin="normal" select value={this.state.currentUser.type}
                                   label="Select Type" name="type" onChange={this.onValueChanged}>
                            <ListItem value="Admin">Admin</ListItem>
                            <ListItem value="Normal">Normal</ListItem>
                        </TextField>
                        <TextField fullWidth margin="normal" type="number" value={this.state.currentUser.age}
                                   label="Age" name="age" onChange={this.onValueChanged}/>
                        <RadioGroup name="gender" value={this.state.currentUser.gender} onChange={this.onValueChanged}>
                            <FormControlLabel value="M" control={<Radio/>} label="Male"/>
                            <FormControlLabel value="F" control={<Radio/>} label="Female"/>
                        </RadioGroup>
                    </DialogContent>
                    <DialogActions>
                        <Button color="secondary" onClick={this.openModal}>
                            Cancel
                        </Button>
                        <Button color="primary" onClick={this.onSaveClicked}>
                            Save
                        </Button>
                    </DialogActions>
                </Dialog>
                <div className={classes.graphs}>
                    <Card options={this.avgBetweenTypes()} {...cardProps} title={'Average age between types'}/>
                    <Card options={this.malesVsFemales()} {...cardProps} title={'Males vs Females between types'}/>
                </div>
                <Typography variant='p'>
                    Title: "Implement the Binary Search Tree"<br/>
                    Description: "Using Binary Search Tree I will search for the given value at the given tree
                    structure"<br/>
                    To understand how binary search tree works visit: <SimpleLink
                    href="https://www.tutorialspoint.com/data_structures_algorithms/binary_search_tree.htm">Binary
                    Search Tree Explanation</SimpleLink><br/>
                </Typography>
                <Typography variant='p'>
                    Implement the algorythm that searches the given tree and returns the node where the
                    value {search} exists:
                </Typography>
                <img src={BinarySearchTreeImage}/>
            </Fragment>
        )
    }
}

export default withStyles(styles)(Assignments)
