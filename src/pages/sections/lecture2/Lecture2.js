/**
 * Created by LeutrimNeziri on 09/04/2019.
 */
import withStyles from "@go-prime/ui/withStyles";
import React from "react";
import Intro from "pages/sections/lecture2/Intro";
const styles = ({ typography }) => ({
  root: {},
})

class Lecture1 extends React.Component {
  render() {
    const { classes, breadcrumbs } = this.props

    let section = breadcrumbs[0]
    if (breadcrumbs.length > 1) {
      section = breadcrumbs[1]
    }

    const props = {
      section
    }
    return <Intro/>
  }
}

export default withStyles(styles)(Lecture1)
