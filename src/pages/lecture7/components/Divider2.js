import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Divider from 'presentations/Divider'

const styles = () => ({
  divider: {
    display: 'flex',
    justifyContent: 'flex-start',
    '&:before': {
      height: 2,
      width: '100%',
      borderRadius: '5px',
      backgroundColor: '#484848'
    },
  }
})

class Divider2 extends Component {

  render () {
    const {classes, width} = this.props
    return (
      <Divider className={classes.divider} style={{width: width + 'px'}}/>
    )
  }
}

export default withStyles(styles)(Divider2)
