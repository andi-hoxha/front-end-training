/**
 * Created by LeutrimNeziri on 09/04/2019.
 */
import withStyles from "@material-ui/core/styles/withStyles";
import Divider from "presentations/Divider";
import Typography from "presentations/Typography";
import React, { Fragment } from "react";
import SimpleLink from "presentations/rows/SimpleLink";
const styles = ({ typography }) => ({
  root: {},
})

class Resources extends React.Component {
  render() {
    const { classes } = this.props
    return (
      <Fragment>
        <Typography variant={'heading'}>
          Resources
          <Divider />
        </Typography>
        <Typography variant='p'>
          <ul>
            <li><label>Install Node: <SimpleLink href="https://nodejs.org/en/download/">https://nodejs.org/en/download/</SimpleLink></label></li>
            <li><label>Install Source Tree: <SimpleLink href="https://www.sourcetreeapp.com/">https://www.sourcetreeapp.com/</SimpleLink></label></li>
            <li><label>Install Visual Studio Code: <SimpleLink href="https://code.visualstudio.com/">https://code.visualstudio.com/</SimpleLink></label></li>
            <li><label>GitLab: <SimpleLink href="https://gitlab.com">https://gitlab.com</SimpleLink></label></li>
            <li><label>GIT: <SimpleLink href="https://git-scm.com/">https://git-scm.com/</SimpleLink></label></li>
            <li><label>MongoDB: <SimpleLink href="https://www.mongodb.com/">https://www.mongodb.com/</SimpleLink></label></li>
            <li><label>JSON: <SimpleLink href="https://www.json.org/">https://www.json.org/</SimpleLink></label></li>
            <li><label>W3Schools JS: <SimpleLink href="https://www.w3schools.com/js/">https://www.w3schools.com/js/</SimpleLink></label></li>
            <li><label>ReactJS: <SimpleLink href="https://reactjs.org/docs/getting-started.html">https://reactjs.org/docs/getting-started.html</SimpleLink></label></li>
            <li><label>HTML: <SimpleLink href="https://www.w3schools.com/html/">https://www.w3schools.com/html/</SimpleLink></label></li>
            <li><label>CSS: <SimpleLink href="https://www.w3schools.com/css/">https://www.w3schools.com/css/</SimpleLink></label></li>
            <li><label>ES6 Javascript: <SimpleLink href="http://es6-features.org">http://es6-features.org</SimpleLink></label></li>
            <li><label>JSX: <SimpleLink href="https://reactjs.org/docs/introducing-jsx.html">https://reactjs.org/docs/introducing-jsx.html</SimpleLink></label></li>
            <li><label>React Dev Tool: <SimpleLink href="https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en">Chrome</SimpleLink> or 
            <SimpleLink href="https://addons.mozilla.org/en-US/firefox/addon/react-devtools/">Firefox</SimpleLink></label></li>
          </ul>
        </Typography>
      </Fragment>
    )
  }
}

export default withStyles(styles)(Resources)
