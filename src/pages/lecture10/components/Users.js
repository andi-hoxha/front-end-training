import React, {Fragment} from "react";
import {
    Button,
    Dialog, DialogActions,
    DialogContent,
    DialogTitle, Fab,
    TextField,
    withStyles
} from "@material-ui/core";
import UserCard from "pages/lecture10/components/UserCard";
import uuid from "uuid";
import AddPhotoIcon from "@material-ui/icons/AddPhotoAlternate";
import {connect} from "react-redux";
import {getAllUsers, addNewUser, updateSingleUser, deleteSingleUser} from "reducers/assignment/UserTransactionActions";
import UserDialog from "pages/lecture10/components/UserDialog";
import * as moment from "moment";
import TransactionDialog from "pages/lecture10/components/TransactionDialog";

const styles = () => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
    },
    button: {
        display: 'flex',
        width: 'fit-content'
    },
    input: {
        display: 'none'
    },
    uploadImg: {
        marginLeft: 20
    },
    uploadButton: {
        color: '#3f51b5',
        margin: 10
    }
})

const GridContainer = (props) => {
    const {children, cols = 4, gap = 20} = props

    if (children.length === 0) {
        return null
    }

    const manipulateChildren = (child, index) => {
        const width = (100 / cols)
        const {props = {}, props: {style = {}} = {}} = child

        const extendedProps = {
            ...props,
            style: {
                ...style,
                height: '100%',
                width: `calc(${width}% - ${gap}px)`,
                marginLeft: 0,
                marginRight: gap + 'px',
                display: 'flex',
                justifyContent: 'flex-start'
            }
        }

        return React.cloneElement(child, extendedProps)
    }

    return (
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
            {React.Children.toArray(children).map(manipulateChildren)}
        </div>
    )
}


class Users extends React.Component {
    state = {
        _search: ''
    }

    componentDidMount() {
        const {users, getAllUsers} = this.props
        getAllUsers()
        console.log("ALL USERS", users)
    }

    onValueChanged = (event) => {
        event.preventDefault()
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    onAddClicked = () => {
        this.setState({
            newUser: {
                id: uuid.v1()
            }
        })
    }

    onCancelClicked = () => {
        this.setState({
            newUser: undefined,
            userId:undefined
        })
    }

    onEdit = (item) => {
        this.setState({
            newUser: item,
            edit: 'Edit'
        });
    }

    onTransactionClick = (userId) => {
        this.setState({
            userId: userId
        })
    }


    render() {
        const {classes, users, deleteSingleUser} = this.props
        const {newUser, edit, _search,userId} = this.state

        const filteredUsers = users.filter(next => {
            const search = _search.toLowerCase()
            const name = next.name ? next.name.toLowerCase() : ''
            const lastName = next.lastName ? next.lastName.toLowerCase() : ''
            const fullName = name.concat(" ", lastName).toLowerCase()
            const email = next.email ? next.email.toLowerCase() : ''
            return fullName.includes(search) || email.includes(search)
        }).sort((a, b) => moment(b.createdAt).valueOf() - moment(a.createdAt).valueOf())

        const columns = screen.width > 1536 ? 4 : 3

        const dialog = () => {
            if (!newUser) {
                return
            }
            return (
                <UserDialog state={newUser} editing={edit} onClose={this.onCancelClicked}/>
            )
        }

        const transactionDialog = () => {
            if(!userId) {
                return
            }
            return (
                <TransactionDialog onClose={this.onCancelClicked}/>
            )
        }

        return (
            <div className={classes.root}>
                <Button color="primary" onClick={this.onAddClicked} className={classes.button}>Add New User</Button>
                <TextField fullWidth margin="normal" name="_search" value={_search} onChange={this.onValueChanged}
                           label="Search"/>
                <GridContainer cols={columns}>
                    {filteredUsers.map((user, index) => {
                        return (
                            <div key={index}>
                                <UserCard
                                    name={user.name}
                                    lastName={user.lastName}
                                    email={user.email}
                                    img={user.avatar}
                                    about={user.about}
                                    createdAt={user.createdAt}
                                    age={user.age}
                                    onEditClick={() => this.onEdit(user)}
                                    onDeleteClick={() => deleteSingleUser(user.id)}
                                    onTransactionClicked={() => this.onTransactionClick(user.id)}
                                />
                            </div>
                        )
                    })}
                </GridContainer>
                {dialog()}
                {transactionDialog()}
            </div>
        )
    }
}

const mapToStateProps = (state) => ({
    users: state.userTransactions.users
})

const mapDispatchToProps =
    {
        getAllUsers,
        addNewUser,
        updateSingleUser,
        deleteSingleUser
    }

export default withStyles(styles)(connect(mapToStateProps, mapDispatchToProps)(Users))