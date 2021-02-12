import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Fab,
  TextField,
  withStyles
} from "@material-ui/core";
import AddPhotoIcon from "@material-ui/icons/AddPhotoAlternate";
import { addNewUser, deleteSingleUser, getAllUsers, updateSingleUser } from "reducers/assignment/UserActions";
import { connect } from "react-redux";
import * as moment from "moment";

const styles = () => ({
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

const UserDialog = (props) => {

  const {classes, state, open = false} = props
  const [newUser, setNewUser] = useState(state)


  const onValueChanged = (event) => {
    const {name, value} = event.target
    let user = {
      ...(newUser),
      [name]: name === 'age' ? parseInt(value) : value
    }
    setNewUser(user)
  }

  const uploadClick = (event) => {
    let file = event.target.files[0];
    const reader = new FileReader();
    let url = reader.readAsDataURL(file);

    reader.onloadend = function (e) {
      setNewUser({...newUser, avatar: reader.result})
    }.bind(this);
  };

  const onCancelClicked = () => {
    const {onClose} = props
    onClose()
  }

  const onSaveClicked = () => {
    const {addNewUser, onClose, editing, updateSingleUser} = props
    const user = {...newUser}
    user.createdAt = moment(Date.now()).format()
    if (!editing) {
      addNewUser(user)
    } else {
      updateSingleUser(user, user.id)
    }
    onClose()
  }


  return (
    <Dialog open={open}>
      <DialogTitle>
        Create/Update User
      </DialogTitle>
      <DialogContent>
        <TextField
          fullWidth
          margin="normal"
          value={newUser.name || ''}
          label="Name"
          name="name"
          onChange={onValueChanged}
        />
        <TextField
          fullWidth
          margin="normal"
          value={newUser.lastName || ''}
          label="Last Name"
          name="lastName"
          onChange={onValueChanged}
        />
        <TextField
          fullWidth
          margin="normal"
          value={newUser.email || ''}
          label="Email"
          name="email"
          onChange={onValueChanged}
        />
        <TextField fullWidth margin="normal" type="number" value={newUser.age || ''} label="Age" name="age"
                   onChange={onValueChanged}/>
        <TextField
          fullWidth
          margin="normal"
          value={newUser.about || ''}
          label="About"
          name="about"
          onChange={onValueChanged}
        />
        <TextField
          fullWidth
          margin="normal"
          value={newUser.avatar || ''}
          label="Avatar"
          name="avatar"
          onChange={onValueChanged}
        />

        <input
          accept="image/*"
          id="contained-button-file"
          multiple
          type="file"
          className={classes.input}
          onChange={uploadClick}
        />
        <label htmlFor="contained-button-file" className={classes.uploadImg}>
          <Fab component="span" className={classes.uploadButton}>
            <AddPhotoIcon/>
          </Fab>
        </label>

      </DialogContent>
      <DialogActions>
        <Button color={"secondary"} onClick={onCancelClicked}>
          Cancel
        </Button>
        <Button color="primary" onClick={onSaveClicked}>
          Save
        </Button>
      </DialogActions>
    </Dialog>

  )
}

const mapDispatchToProps = {
  addNewUser,
  updateSingleUser
}

export default withStyles(styles)(connect(null, mapDispatchToProps)(UserDialog))
