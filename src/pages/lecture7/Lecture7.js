/**
 * Created by LeutrimNeziri on 09/04/2019.
 */
import withStyles from "@material-ui/core/styles/withStyles";
import React from "react";
import Intro from "pages/lecture7/Intro";
import AssignmentsRecap from "pages/lecture7/AssignmentsRecap";
import WaysOfStyling from "pages/lecture7/WaysOfStyling";
import InlineStyling from "pages/lecture7/InlineStyling";
import VanillaCSS from "pages/lecture7/VanillaCSS";
import CssPreprocessors from "pages/lecture7/CssPreprocessors";
import CssInJS from "pages/lecture7/CssInJS";
import Assignment from "pages/lecture7/Assignment";
import { PAGES } from 'Constants';
import JCoders from "pages/lecture7/JCoders";

const styles = ({ typography }) => ({
  root: {},
})

class Lecture5 extends React.Component {
  render() {
    const { classes, breadcrumbs, ...other } = this.props

    let section = breadcrumbs[0]
    if (breadcrumbs.length > 1) {
      section = breadcrumbs[1]
    }

    const props = {
      section,
      ...other
    }

    switch (section.id) {
      case PAGES.LECTURE_7.ASSIGNMENT_RECAP:
        return <AssignmentsRecap {...props} />
      case PAGES.LECTURE_7.INTRO:
        return <WaysOfStyling {...props} />
      case PAGES.LECTURE_7.INLINE_STYLING:
        return <InlineStyling {...props} />
      case PAGES.LECTURE_7.VANILLA_CSS:
        return <VanillaCSS {...props} />
      case PAGES.LECTURE_7.CSS_PREPROCESSORS:
        return <CssPreprocessors {...props} />
      case PAGES.LECTURE_7.CSS_IN_JS:
        return <CssInJS {...props} />
        case PAGES.LECTURE_7.ASSIGNMENT:
          return <Assignment {...props} />
      case PAGES.LECTURE_7.JCODERS:
        return <JCoders {...props} />
    }
    return <Intro {...props}/>
  }
}

export default withStyles(styles)(Lecture5)
