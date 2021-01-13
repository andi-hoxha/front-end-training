import React, {Component} from "react";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = () => ({
    divider: {
        display: 'flex',
        justifyContent: 'flex-start',
        borderTop: '2px solid #484848',
        borderRadius: '5px'
    }
})

class Divider2 extends Component {

    render() {
        const {classes, width} = this.props
        return (
            <span className={classes.divider} style={{width: width + 'px'}}/>
        )
    }
}

export default withStyles(styles)(Divider2)