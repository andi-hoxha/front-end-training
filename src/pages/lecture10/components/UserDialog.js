import React from "react";
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, Fab, TextField, withStyles} from "@material-ui/core";
import AddPhotoIcon from "@material-ui/icons/AddPhotoAlternate";
import {addNewUser, deleteSingleUser, getAllUsers, updateSingleUser} from "reducers/assignment/UserTransactionActions";
import {connect} from "react-redux";
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

class UserDialog extends React.Component {

    state = {
        newUser:this.props.state
    }

    onValueChanged = (event) => {
        event.preventDefault()
        const {name, value} = event.target
        let user = {
            ...(this.state.newUser),
            [name]:name === 'age' ? parseInt(value) : value
        }
        this.setState({
            newUser:user
        })
    }

    uploadClick = (event) => {
        let file = event.target.files[0];
        const reader = new FileReader();
        let url = reader.readAsDataURL(file);

        reader.onloadend = function (e) {
            this.setState(prevState => ({
                newUser: {...prevState.newUser, avatar: reader.result}
            }));
        }.bind(this);
    };

    onCancelClicked = () => {
       const {onClose} = this.props
        onClose()
    }

    onSaveClicked = () => {
        const {addNewUser,onClose,editing,updateSingleUser} = this.props
        const user = {...this.state.newUser}
        user.createdAt = moment(Date.now()).format()
        if(!editing){
            addNewUser(user)
        }else {
            updateSingleUser(user,user.id)
        }
        onClose()
    }


    render() {
        const {classes} = this.props
        const {newUser = {}} = this.state
        return (
            <Dialog open={true}>
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
                        onChange={this.onValueChanged}
                    />
                    <TextField
                        fullWidth
                        margin="normal"
                        value={newUser.lastName || ''}
                        label="Last Name"
                        name="lastName"
                        onChange={this.onValueChanged}
                    />
                    <TextField
                        fullWidth
                        margin="normal"
                        value={newUser.email || ''}
                        label="Email"
                        name="email"
                        onChange={this.onValueChanged}
                    />
                    <TextField fullWidth margin="normal" type="number" value={newUser.age || ''} label="Age" name="age" onChange={this.onValueChanged}/>
                    <TextField
                        fullWidth
                        margin="normal"
                        value={newUser.about || ''}
                        label="About"
                        name="about"
                        onChange={this.onValueChanged}
                    />
                    <TextField
                        fullWidth
                        margin="normal"
                        value={newUser.avatar || ''}
                        label="Avatar"
                        name="avatar"
                        onChange={this.onValueChanged}
                    />

                    <input
                        accept="image/*"
                        id="contained-button-file"
                        multiple
                        type="file"
                        // style={styles.input}
                        className={classes.input}
                        onChange={this.uploadClick}
                    />
                    <label htmlFor="contained-button-file" className={classes.uploadImg}>
                        <Fab component="span" className={classes.uploadButton}>
                            <AddPhotoIcon/>
                        </Fab>
                    </label>

                </DialogContent>
                <DialogActions>
                    <Button color="secondary" onClick={this.onCancelClicked}>
                        Cancel
                    </Button>
                    <Button color="primary" onClick={this.onSaveClicked}>
                        Save
                    </Button>
                </DialogActions>
            </Dialog>

        )
    }
}

const mapDispatchToProps = {
    addNewUser,
    updateSingleUser
}

export default withStyles(styles)(connect(null,mapDispatchToProps)(UserDialog))