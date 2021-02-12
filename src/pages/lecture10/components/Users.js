import React, { useEffect, useState } from "react";
import {
  Button,
  TextField,
  withStyles
} from "@material-ui/core";
import UserCard from "pages/lecture10/components/UserCard";
import uuid from "uuid";
import { connect } from "react-redux";
import {
  getAllUsers,
  invalidateData,
  addNewUser,
  updateSingleUser,
  deleteSingleUser
} from "reducers/assignment/UserActions";
import UserDialog from "pages/lecture10/components/UserDialog";
import * as moment from "moment";
import TransactionDialog from "pages/lecture10/components/TransactionDialog";
import LoadingDialog from "pages/lecture10/components/LoadingDialog";

const styles = ({palette}) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
  },
  button: {
    display: 'flex',
    width: 'fit-content',
    color: palette.leadAccent1,
    borderColor: palette.leadAccent1
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


const Users = (props) => {

  const [searchText, setSearchText] = useState('')
  const [newUser, setNewUser] = useState()
  const [transaction, setTransaction] = useState('false')
  const [edit, setEdit] = useState()
  const [user, setUser] = useState()

  const {classes, users = [], deleteSingleUser, getAllUsers, invalidateData, isLoading} = props

  useEffect(() => {
    getAllUsers()
    return () => invalidateData()
  }, [])

  const onValueChanged = ({target: {value}}) => setSearchText(value)

  const onAddClicked = () => {
    setNewUser({id: uuid.v1()})
  }

  const onCancelClicked = () => {
    setNewUser(undefined)
    setTransaction(false)
    setEdit(undefined)
  }

  const onEdit = (user) => {
    setNewUser(user)
    setEdit('Edit')
  }

  const onTransactionClick = (user) => {
    setTransaction(true)
    setUser(user)
  }

  const filteredUsers = users.filter(next => {
    const search = searchText.toLowerCase()
    const name = next.name ? next.name.toLowerCase() : ''
    const lastName = next.lastName ? next.lastName.toLowerCase() : ''
    const fullName = name.concat(" ", lastName).toLowerCase()
    const email = next.email ? next.email.toLowerCase() : ''
    return fullName.includes(search) || email.includes(search)
  }).sort((a, b) => moment(b.createdAt).valueOf() - moment(a.createdAt).valueOf())

  const columns = screen.width > 1536 ? 4 : 3

  return (
    <div className={classes.root}>
      <Button variant="outlined" onClick={onAddClicked} className={classes.button}>Add New User</Button>
      <TextField
        fullWidth
        margin="normal"
        name="search"
        value={searchText}
        onChange={onValueChanged}
        label="Search"/>
      <GridContainer cols={columns}>
        {filteredUsers.map((user, index) => {
          return (
            <div key={index}>
              <UserCard
                user={user}
                onEditClick={() => onEdit(user)}
                onDeleteClick={() => deleteSingleUser(user.id)}
                onTransactionClicked={() => onTransactionClick(user)}
              />
            </div>
          )
        })}
      </GridContainer>
      {newUser && <UserDialog state={newUser} editing={edit} onClose={onCancelClicked} open={true}/>}
      {user && <TransactionDialog onClose={onCancelClicked} open={transaction} user={user}/>}
      {isLoading && <LoadingDialog/>}
    </div>
  )
}

const mapToStateProps = (state) => ({
  users: state.userTransactions.users.items,
  isLoading: state.userTransactions.users.isLoading
})

const mapDispatchToProps = {
  getAllUsers,
  addNewUser,
  updateSingleUser,
  deleteSingleUser,
  invalidateData
}

export default withStyles(styles)(connect(mapToStateProps, mapDispatchToProps)(Users))
