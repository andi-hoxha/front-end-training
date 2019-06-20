/**
 * Created by LeutrimNeziri on 09/04/2019.
 */
import withStyles from "@material-ui/core/styles/withStyles";
import Divider from "presentations/Divider";
import PageLink from "presentations/rows/nav/PageLink";
import Typography from "presentations/Typography";
import React, { Fragment } from "react";
const styles = ({ typography }) => ({
  root: {},
})

class Assignment extends React.Component {
  render() {
    const { classes, section } = this.props
    return (
      <Fragment>
        <Typography variant={'heading'}>
          {section.display}
          <Divider />
        </Typography>
        <Typography variant='p'>
          Build a CV Component composed by small Components(as some of you did in previous lecture), and if we pass a prop inverted
          everything should appear as inverted (eg: if you were using black color for text and white for bg's invert those colors)
          <br/>
          Implement CV using CSS in JS (using classes)
        </Typography>
        <Typography variant='title'>Happy Coding</Typography>
      </Fragment>
    )
  }
}

export default withStyles(styles)(Assignment)
