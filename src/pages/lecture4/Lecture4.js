/**
 * Created by LeutrimNeziri on 09/04/2019.
 */
import withStyles from "@material-ui/core/styles/withStyles";
import React from "react";
import Intro from "pages/lecture4/Intro";
import { PAGES } from 'Constants';
import HandlingEvents from "pages/lecture4/HandlingEvents";
import ConditionalRendering from "pages/lecture4/ConditionalRendering";
import Forms from "pages/lecture4/Forms";

const styles = ({ typography }) => ({
  root: {},
})

class Lecture4 extends React.Component {
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
      case PAGES.LECTURE_4.HANDLING_EVENTS:
        return <HandlingEvents {...props} />
      case PAGES.LECTURE_4.CONDITIONAL_RENDERING:
        return <ConditionalRendering {...props} />
      case PAGES.LECTURE_4.FORMS:
        return <Forms {...props} />
    }
    return <Intro {...props}/>
  }
}

export default withStyles(styles)(Lecture4)
