import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = () => ({
    counterControl: {
        width:150,
        padding:20,
        boxSizing:'border-box',
        margin:16,
        border:'1px solid #eee',
        fontWeight:'bold',
        cursor:'pointer',
        display:'flex',
        backgroundColor:'red',
        justifyContent:'center'
    }
})

const counterControl = (props) => {
    const {classes,clicked,label} = props

    return (
        <div className={classes.counterControl} onClick={clicked}>
            {label}
        </div>
    )
}

export default withStyles(styles)(counterControl)