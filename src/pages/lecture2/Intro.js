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
          Lecture 2: Javascript and React (Part 1)
          <Divider />
        </Typography>
        <Typography variant='p'>
          The purpose of Lecture 2, is to introduce the participants with the web app structure, and have an introduction to React JS as well as JavaScript programming recap.
        </Typography>
        <Typography variant='p'>
          The lecture 2 will contain these underlying pages:
          <ol>
            <li>JavaScript programming language recap</li>
            <li>React Introduction</li>
            <li>Project Structure</li>
            <li>Assignments (small get to know React assignments)</li>
          </ol>
        </Typography>
      </Fragment>
    )
  }
}

export default withStyles(styles)(Intro)
