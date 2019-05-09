/**
 * Created by LeutrimNeziri on 09/04/2019.
 */
import withStyles from "@material-ui/core/styles/withStyles";
import StructureImage from "assets/images/lecture2/structure.png";
import Divider from "presentations/Divider";
import Typography from "presentations/Typography";
import React, { Fragment } from "react";
import Chart from "presentations/Chart";
import SimpleLink from "presentations/rows/SimpleLink";
import { Normal } from "presentations/Label";


const styles = ({ typography, size }) => ({
  root: {},
})

class AssignmentsRecap extends React.Component{
  render() {
    const { classes, section } = this.props
    return (
      <Fragment>
        <Typography variant={'heading'}>
            Home Assignments Recap
            <Divider />
        </Typography>
      </Fragment>
    )
  }
}

export default withStyles(styles)(AssignmentsRecap)
