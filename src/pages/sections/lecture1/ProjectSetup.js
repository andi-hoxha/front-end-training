/**
 * Created by LeutrimNeziri on 09/04/2019.
 */
import Code from "@go-prime/ui/Code/index";
import withStyles from "@go-prime/ui/withStyles";
import Divider from "presentations/Divider";
import SimpleLink from "presentations/rows/nav/SimpleLink";
import Typography from "presentations/Typography";
import React, { Fragment } from "react";
const styles = ({ typography }) => ({
  root: {},
})

class ProjectSetup extends React.Component {
  render() {
    const { classes, section } = this.props
    let running = section.children[0]
    return (
      <Fragment>
        <Typography variant={'heading'}>
          Project Setup
          <Typography>Follow the steps to get access and create your fork of the main repository.</Typography>
          <Divider />
        </Typography>
        <Typography variant={'p'}>
          <ol>
            <li><label>Open your browser and go to this link: <SimpleLink href="https://gitlab.com">https://gitlab.com</SimpleLink></label></li>
            <li><label>Use your previously created account to login</label></li>
            <li><label>Share your account name with your trainer or assistant. You will be given access now!</label></li>
            <li><label>Follow this link to go to the main project in gitlab (maintained by PRIME): <SimpleLink href="https://gitlab.com/agonlohaj/prime-front-end-training">https://gitlab.com/agonlohaj/prime-front-end-training</SimpleLink></label></li>
            <li><label>Click the fork button</label></li>
            <li><label>Select the "Training Program Group" to fork the project</label></li>
          </ol>
        </Typography>

        <Typography variant={'p'}>
          Now in order to have the project locally, we will have to clone it using Source Tree. Follow the instructions listed here:
        </Typography>

        <Typography variant={'p'}>
          <ol>
            <li>Go to your forked project page</li>
            <li>Click the clone icon (TODO: INSERT IMAGE)</li>
            <li>Use the clone with HTTPS, copy the url (TODO: INSERT IMAGE)</li>
            <li>Open Source tree on your local machine</li>
            <li>Go ahead and choose the File -> Clone/New option. You can also find it using the add button and going at the Clone Tab</li>
            <li>Paste the link at the source path, that you obtained from step 3</li>
            <li>Choose a folder on your local machine</li>
            <li>Click Clone</li>
          </ol>
        </Typography>
        <Typography variant={'p'}>
          Now that you have the code locally, go ahead and open VS Code and import the project. Follow these steps to do that:
        </Typography>

        <Typography id={running.id} variant={'title'}>
          Running the application
        </Typography>
        <Typography variant={'p'}>
          Open CommandPrompt or Terminal at the project root directory. Once your there run the following command to install all the project dependencies:
        </Typography>
        <Code>
          {`npm install`}
        </Code>
        <Typography variant={'p'}>
          After that is completed successfully, in order to run the project, simply type
        </Typography>
        <Code>
          {`npm start`}
        </Code>
        <Typography variant={'p'}>
          Open your browser at: <SimpleLink href="http://localhost:8080">http://localhost:8080</SimpleLink> and enjoy!
        </Typography>

        <Typography variant={'p'}>
          <br/>
          In case you are experiencing difficulties starting the application, try the following:
          <ol>
            <li>
              Run the Command Prompt as an administrator
            </li>
            <li>
              Run: 
              <Code>
                {`npm install -g webpack-dev-server`}
              </Code>
              <Code>
                {`npm install -g webpack`}
              </Code>
              <Code>
                {`npm install -g webpack-cli`}
              </Code>
            </li>
          </ol>
        </Typography>
      </Fragment>
    )
  }
}

export default withStyles(styles)(ProjectSetup)
