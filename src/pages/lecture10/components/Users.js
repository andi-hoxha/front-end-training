import React from "react";
import {
    Button,
    TextField,
    withStyles
} from "@material-ui/core";
import UserCard from "pages/lecture10/components/UserCard";
import uuid from "uuid";
import {connect} from "react-redux";
import {getAllUsers, addNewUser, updateSingleUser, deleteSingleUser} from "reducers/assignment/UserActions";
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
    },
    loadingDialog: {
        width: '100%',
        height: '100%',
        position: 'fixed',
        top: 0,
        left: 0,
        backgroundColor: `rgba(255, 255, 255, 0.2)`,
        zIndex: 1400,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 48
    }
})

const GridContainer = (props) => {
    const {children, cols = 4, gap = 20} = props

    if (children.length === 0) {
        return null
    }

    const manipulateChildren = (child) => {
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
        _search: '',
        isLoading: false
    }

    componentDidMount() {
        const {getAllUsers} = this.props
        getAllUsers()
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
            userId: undefined,
            transaction: undefined
        })
    }

    onEdit = (item) => {
        this.setState({
            newUser: item,
            edit: 'Edit'
        });
    }

    onTransactionClick = () => {
        this.setState({
            transaction: true
        })
    }

    createUsersCard = (user, index) => {
        const {deleteSingleUser} = this.props
        return (
            <div key={index}>
                <UserCard
                    user={user}
                    onEditClick={() => this.onEdit(user)}
                    onDeleteClick={() => deleteSingleUser(user.id)}
                    onTransactionClicked={() => this.onTransactionClick(user.id)}
                />
            </div>
        )
    }

    render() {
        const {classes, users} = this.props
        const {newUser, edit, _search, transaction} = this.state

        const openDialog = newUser !== undefined

        const filteredUsers = users.filter(next => {
            const search = _search.toLowerCase()
            const name = next.name ? next.name.toLowerCase() : ''
            const lastName = next.lastName ? next.lastName.toLowerCase() : ''
            const fullName = name.concat(" ", lastName).toLowerCase()
            const email = next.email ? next.email.toLowerCase() : ''
            return fullName.includes(search) || email.includes(search)
        }).sort((a, b) => moment(b.createdAt).valueOf() - moment(a.createdAt).valueOf())

        const columns = screen.width > 1536 ? 4 : 3

        return (
            <div className={classes.root}>
                <Button color="primary" onClick={this.onAddClicked} className={classes.button}>Add New User</Button>
                <TextField fullWidth margin="normal" name="_search" value={_search} onChange={this.onValueChanged}
                           label="Search"/>
                <GridContainer cols={columns}>
                    {filteredUsers.map(this.createUsersCard)}
                </GridContainer>
                <UserDialog state={newUser} editing={edit} onClose={this.onCancelClicked} open={openDialog}/>
                <TransactionDialog onClose={this.onCancelClicked} open={transaction}/>
            </div>
        )
    }
}

const mapToStateProps = (state) => ({
    users: state.userTransactions.users,
})

const mapDispatchToProps = {
    getAllUsers,
    addNewUser,
    updateSingleUser,
    deleteSingleUser
}

export default withStyles(styles)(connect(mapToStateProps, mapDispatchToProps)(Users))