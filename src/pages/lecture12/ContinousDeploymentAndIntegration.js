/**
 * Created by LeutrimNeziri on 09/04/2019.
 */
import withStyles from "@material-ui/core/styles/withStyles";
import LoggingImage from 'assets/images/lecture10/logging.png';
import Code from "presentations/Code";
import Divider from "presentations/Divider";
import { Bold, Italic } from "presentations/Label";
import SimpleLink from "presentations/rows/SimpleLink";
import Typography from "presentations/Typography";
import ReactRedux from 'assets/images/lecture8/react_redux.png';
import React, { Fragment } from "react";
import { connect } from 'react-redux';
import { Button } from "@material-ui/core";
const styles = ({ typography }) => ({
  root: {},
})

class ContinousDeploymentAndIntegration extends React.Component {

  render() {
    const { classes, section } = this.props
    return (
      <Fragment>
        <Typography variant={'heading'}>
          {section.display}
          <Typography variant='p'>
            In this section we are going to talk about the last task that we have when we develop and application! That is to bundle it and deploy it!
          </Typography>
          <Divider id="divider"/>
        </Typography>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
})

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(ContinousDeploymentAndIntegration))
