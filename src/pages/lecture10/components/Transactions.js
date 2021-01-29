import React from "react";
import {withStyles} from "@material-ui/core";

const styles = () => ({
    root:{
        display:'flex',
        width:'100%',
        height:'100%'
    }
})

const Transactions = (props) => {
    const {classes} = props

    return (
        <div className={classes.root}>
            <h1>Transactions</h1>
        </div>
    )
}

export default withStyles(styles)(Transactions)