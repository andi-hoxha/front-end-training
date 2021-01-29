import React from "react";
import {withStyles} from "@material-ui/core";

const styles = () => ({
    userDiv: {
        display: 'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        width: '70%',
        height: '70px',
        backgroundColor: '#f5f6fa',
        marginBottom:15,
        '&:hover':{
            boxShadow: '5px 5px 20px',
        },
        '& > *':{
            margin:0
        }
    }
})

const User = (props) => {

    const {classes,name = '',age = 0} = props

    return (
        <div className={classes.userDiv}>
            <h2>{name}</h2>
            <h4>Age:{age}</h4>
        </div>
    )
}

export default withStyles(styles)(User)