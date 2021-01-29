import React from "react";
import User from "pages/playground/container/User";
import {Button, withStyles} from "@material-ui/core";
import ACTIONS from "reducers/example/exReducerTypes";
import {connect} from "react-redux";

const styles = () => ({
    root: {
        display: 'flex',
        flexGrow: 1,
        flexDirection: 'column'
    },
    buttons:{
        marginBottom:20,
       '& > *':{
           marginRight:15
       }
    },
    users:{
        display: 'flex',
        flexDirection: 'column',
        alignItems:'center'
    }
})

const UsersExample = (props) => {

    const {classes,users = [],onAddNewUser} = props

    return (
        <div className={classes.root}>
            <div className={classes.buttons}>
            <Button variant="contained" size="large" color="primary" onClick={() => console.log('Users from redux',users)}>Test</Button>
            <Button variant="contained" size="large" color="primary" onClick={onAddNewUser}>Add new User</Button>
            </div>
            <div className={classes.users}>
            {users.map(next => {
                return (
                    <User name={next.name} age={next.age}/>
                )
            })}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        users:state.usersEx
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onAddNewUser: () => dispatch({type:'ADD_USER'})
    }
};

export default withStyles(styles)(connect(mapStateToProps,mapDispatchToProps)(UsersExample))