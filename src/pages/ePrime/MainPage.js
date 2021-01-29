import React from "react";
import {Button, withStyles} from "@material-ui/core";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

const styles = () => ({
    root:{
        display:'flex',
    }
})

const MainPage = (props) => {
    const {classes,shop} = props

    const testState = () => {
        console.log('Redux State',shop)
    }

    return (
        <div className={classes.root}>
            <Button variant="contained" onClick={testState}>Test State</Button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        shop:state
    }
};


export default withStyles(styles)(connect(mapStateToProps)(MainPage));