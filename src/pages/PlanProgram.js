/**
 * Created by LeutrimNeziri on 09/04/2019.
 */
import withStyles from "@material-ui/core/styles/withStyles";
import Divider from "presentations/Divider";
import Typography from "presentations/Typography";
import React, { Fragment } from "react";
const styles = ({ typography }) => ({
  root: {},
})

class PlanProgram extends React.Component {
  render() {
    const { classes } = this.props
    return (
      <Fragment>
        <Typography variant={'heading'}>
          Plan Program
          <Divider />
        </Typography>
        <Typography variant='p'>
          <ol>
            <li>
              Introduction to the course, get to know each other, overview of the program, expectations, project setup and account setups and <br/>
              Your first ever commit, making a Pull request and the importance of it, getting all the tasks setup for the rest of the training
            </li>
            <li>
              JavaScript variables, arrays, functions recap and <br/>
              React JS introduction, first ever component created (Part 1)
            </li>
            <li>
              React JS introduction, first ever component created, lifecycle introduction (Part 2) and <br/>
              Project Structure Introduction
            </li>
            <li>
              List and sort layout and implementation, component hierarchy introduction, properties and state (Part 2) and <br/>
              State management and props management, React component hierarchy setup (Part 1)
            </li>
            <li>
              State management and props management, React component hierarchy setup (Part 2) and <br/>
              Page skeleton implementation and Routing and
            </li>
            <li>
              Style management and CSS recap (Part 1) and <br/>
              Style management and CSS recap (Part 2)
            </li>
            <li>
              Higher level components, component composition (Part 1) and <br/>
              Higher level components, component composition (Part 2)
            </li>
            <li>
              Introduction to Redux Part 1 and <br/>
              Introduction to Redux Part 2
            </li>
            <li>
              Redux + React interaction and store management (Part 1) and <br/>
              Redux + React interaction and store management (Part 2)
            </li>
            <li>
              Middleware’s and store management and <br/>
              REST-full API introduction + services setup
            </li>
            <li>
              API service structuring, promises introduction and <br/>
              API project setup and introduction, Java recap
            </li>
            <li>
              REST-full API implementation introduction, you’re first GET, POST, PUT, DELETE requests and <br/>
              Error handling and Roles management
            </li>
            <li>
              Advanced aggregations (introduction) and <br/>
              Wrap UP!
            </li>
          </ol>
        </Typography>
      </Fragment>
    )
  }
}

export default withStyles(styles)(PlanProgram)
