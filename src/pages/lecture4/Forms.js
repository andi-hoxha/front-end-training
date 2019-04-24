/**
 * Created by LeutrimNeziri on 09/04/2019.
 */
import withStyles from "@material-ui/core/styles/withStyles";
import Code from "presentations/Code";
import Divider from "presentations/Divider";
import Typography from "presentations/Typography";
import React, { Fragment } from "react";
import SimpleLink from "presentations/rows/SimpleLink";
import { Italic } from "presentations/Label";

const styles = ({ typography, size }) => ({
})

const htmlForm = `
<form>
  <label>
    Name:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
</form>
`
const nameForm = `
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
  }

  onValueChanged = (event) => {
    this.setState({value: event.target.value});
  }

  onSubmit = (event) => {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.onValueChanged} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
`
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
  }

  onValueChanged = (event) => {
    this.setState({value: event.target.value});
  }

  onSubmit = (event) => {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.onValueChanged} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

class Forms extends React.Component {
  render() {
    const { classes, section } = this.props
    let controlledComponents = section.children[0]
    return (
      <Fragment>
        <Typography variant={'heading'}>
          {section.display}
          <Typography variant='p'>
            In this section we are going to talk how to handle Form HTML elements! Inspired by <SimpleLink href="https://reactjs.org/docs/forms.html">https://reactjs.org/docs/forms.html</SimpleLink>
          </Typography>
          <Divider />
        </Typography>

        <Typography variant='p'>
          HTML form elements work a little bit differently from other DOM elements in React, because form elements naturally keep some internal state. For example, this form in plain HTML accepts a single name:
          <Code>
            {htmlForm}
          </Code>
        </Typography>
        <Typography variant='p'>
          This form has the default HTML form behavior of browsing to a new page when the user submits the form. If you want this behavior in React, it just works. But in most cases, it’s convenient to have a JavaScript function that handles the submission of the form and has access to the data that the user entered into the form. The standard way to achieve this is with a technique called “controlled components”.
        </Typography>
        <Typography id={controlledComponents.id} variant={'title'}>
          {controlledComponents.display}
        </Typography>
        <Typography variant='p'>
          In HTML, form elements such as {`<input>, <textarea>, and <select>`} typically maintain their own state and update it based on user input. In React, mutable state is typically kept in the state property of components, and only updated with setState().
        </Typography>

        <Typography variant='p'>
         We can combine the two by making the React state be the “single source of truth”. Then the React component that renders a form also controls what happens in that form on subsequent user input. An input form element whose value is controlled by React in this way is called a “controlled component”.
        </Typography>

        <Typography variant='p'>
          For example, if we want to make the previous example log the name when it is submitted, we can write the form as a controlled component:
          <Code>
            {nameForm}
          </Code>
        </Typography>

        <Typography variant='p'>
          Since the value attribute is set on our form element, the displayed value will always be this.state.value, making the React state the source of truth. Since handleChange runs on every keystroke to update the React state, the displayed value will update as the user types.
        </Typography>
        <form>
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <input type="submit" value="Submit" />
        </form>

        <NameForm/>
      </Fragment>

    )
  }
}

export default withStyles(styles)(Forms)
