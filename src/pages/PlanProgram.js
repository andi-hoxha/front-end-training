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
            <li>Introduction to the course, get to know each other, overview of the program, expectations, project setup and account setups</li>
            <li>Your first ever commit, making a Pull request and the importance of it, getting all the tasks setup for the rest of the training</li>
            <li>JavaScript variables, arrays, functions recap. </li>
            <li>React JS introduction, first ever component created, lifecycle introduction (Part 1)</li>
            <li>React JS introduction, first ever component created, lifecycle introduction (Part 2)</li>
            <li>List and sort layout and implementation, project structuring introduction, component hierarchy introduction, properties and state (Part 1)</li>
            <li>List and sort layout and implementation, project structuring introduction, component hierarchy introduction, properties and state (Part 2)</li>
            <li>State management and props management, React component hierarchy setup (Part 1)</li>
            <li>State management and props management, React component hierarchy setup (Part 2)</li>
            <li>Style management and CSS recap (Part 1)</li>
            <li>Style management and CSS recap (Part 2)</li>
            <li>Page skeleton implementation and Routing</li>
            <li>Higher level components, component composition (Part 1)</li>
            <li>Higher level components, component composition (Part 2)</li>
            <li>Introduction to Redux Part 1</li>
            <li>Introduction to Redux Part 2</li>
            <li>Redux + React interaction and store management (Part 1)</li>
            <li>Redux + React interaction and store management (Part 2)</li>
            <li>Middleware’s and store management</li>
            <li>REST-full API introduction + services setup</li>
            <li>API service structuring, promises introduction</li>
            <li>API project setup and introduction, Java recap</li>
            <li>REST-full API implementation introduction, you’re first GET, POST, PUT, DELETE requests </li>
            <li>Error handling and Roles management</li>
            <li>Advanced aggregations (introduction)</li>
            <li>Wrap UP!</li>
          </ol>
        </Typography>
      </Fragment>
    )
  }
}

export default withStyles(styles)(PlanProgram)
