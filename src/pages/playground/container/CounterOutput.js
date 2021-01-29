import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = () => ({
    counterOutput:{
        width:'100%',
        backgroundColor:'#fa923f',
        color:'white',
        fontSize:28,
        textAlign:'center',
        padding:'20px 0',
        boxSizing:'border-box',
        display:'flex',
        justifyContent:'center'
    }
})

const counterOutput = (props) => {
    const {classes,value} = props

    return (
        <div className={classes.counterOutput}>
            Current Counter: {value}
        </div>
    )
}

export default withStyles(styles)(counterOutput)