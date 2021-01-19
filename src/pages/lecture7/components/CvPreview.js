import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import LeftSide from "pages/lecture7/components/LeftSide";
import RightSide from "pages/lecture7/components/RightSide";

const styles = () => ({
  root: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    marginTop: '50px',
    alignItems: 'stretch',
    justifyContent: 'stretch',
    backgroundColor: '#fffcf5'
  }
})

const CvPreview = (props) => {

  const {classes, state = {}} = props
  return (
    <div className={classes.root}>
      <LeftSide state={state}/>
      <RightSide state={state}/>
    </div>
  );

}

export default withStyles(styles)(CvPreview)
