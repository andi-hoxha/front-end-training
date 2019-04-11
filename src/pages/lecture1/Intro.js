/**
 * Created by LeutrimNeziri on 09/04/2019.
 */
import withStyles from "@go-prime/ui/withStyles";
import Divider from "presentations/Divider";
import Typography from "presentations/Typography";
import React, { Fragment } from "react";
const styles = ({ typography }) => ({
  root: {},
})

class Intro extends React.Component {
  render() {
    const { classes } = this.props
    return (
      <Fragment>
        <Typography variant={'heading'}>
          Lecture 1
          <Divider />
        </Typography>
        <Typography variant='p'>
          The purpose of the lecture one is to onboard the participants, get them acquainted with the way of working, the program plan, the tools that they need to setup and the training program structure.
        </Typography>
        <Typography variant='p'>
          The lecture 1 will contain these underlying pages:
          <ol>
            <li>Getting Started</li>
            <li>Project Setup</li>
            <li>Agile Methodology Introduction</li>
            <li>Way of Working</li>
          </ol>
        </Typography>
      </Fragment>
    )
  }
}

export default withStyles(styles)(Intro)
