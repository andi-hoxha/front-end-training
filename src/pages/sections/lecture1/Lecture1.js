/**
 * Created by LeutrimNeziri on 09/04/2019.
 */
import withStyles from "@go-prime/ui/withStyles";
import { PAGES } from 'Constants';
import React from "react";
import AgileMethodology from "./AgileMethodology";
import GettingStarted from "./GettingStarted";
import Intro from "./Intro";
import ProjectSetup from "./ProjectSetup";
import WayOfWorking from "./WayOfWorking";
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

    switch (section.id) {
      case PAGES.LECTURE_1.GETTING_STARTED:
        return <GettingStarted {...props} />
      case PAGES.LECTURE_1.PROJECT_SETTUP:
        return <ProjectSetup {...props} />
      case PAGES.LECTURE_1.AGILE_METHODOLOGY:
        return <AgileMethodology {...props} />
      case PAGES.LECTURE_1.WAY_OF_WORKING:
        return <WayOfWorking {...props} />
    }
    return <Intro />
  }
}

export default withStyles(styles)(Lecture1)
