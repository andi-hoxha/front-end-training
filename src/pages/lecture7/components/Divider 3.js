import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = () => ({
    divider2: {
        display:'flex',
        justifyContent: 'flex-start',
        borderTop: '2px solid #cacaca',
        borderRadius: '5px'
    }
})

const Divider3 = (props) => {

    const {classes,width} = props
    return (
        <span className={classes.divider2} style={{width:width + 'px'}}/>
    )
}

export default withStyles(styles)(Divider3)