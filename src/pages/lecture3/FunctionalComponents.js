/**
 * Created by LeutrimNeziri on 09/04/2019.
 */
import withStyles from "@material-ui/core/styles/withStyles";
import Code from "presentations/Code";
import Divider from "presentations/Divider";
import Typography from "presentations/Typography";
import React, { Fragment } from "react";

const styles = ({ typography, size }) => ({
})

const square = `
class Square extends React.Component {
  render() {
    const { value, highlight, onClick } = this.props
    return (
      <Button style={stylesFromHighlight(highlight)} onClick={onClick}>
        {value || '-'}
      </Button>
    );
  }
}`


const functionalSquare = `
const Square = (props) => {
  const { value, highlight, onClick } = props
  return (
    <Button style={stylesFromHighlight(highlight)} onClick={onClick}>
      {value || '-'}
    </Button>
  );
}
`

const composition = `
<div>
  <Square value={1}/>
  <Square value={2}/>
  <Square value={3}/>
</div>
`

const pureFunction = `
const sum = (a, b) => {
  return a + b
}
`
const impure = `
const withdraw = (account, amount) => {
  account.total -= amount
  return account
}
`

const badTransactionsExample = `
class Transactions extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 5,
      multiplier: 3
    }
  }

  render() {
    const { classes } = this.props
    const { multiplier, value } = this.state

    return (
      <div>
        <Typography variant='p'>
          {\`Total : \${multiplier * value}\`}
        </Typography>
        <TextField value={multiplier} onChange={(event) => {
          this.setState({
            multiplier: event.target.value
          })
        }}/>
        <TextField value={value} onChange={(event) => {
          this.state.value = event.target.value
        }}/>
      </div>
    )
  }
}
`

class FunctionalComponents extends React.Component {
  render() {
    const { classes, section } = this.props
    // let introcution = section.children[0]
    // let tictactoe = section.children[1]
    return (
      <Fragment>
        <Typography variant={'heading'}>
          {section.display}
          <Typography variant='p'>
            In this section we are going to do a recap and talk about how can we turn a fnuctional component and a few tips and trics!
          </Typography>
          <Divider />
        </Typography>
        <Typography variant={'p'}>
          Functional components? You mean like a function rendering a component? Without any State?
        </Typography>
        <Typography variant={'p'}>
          Yep that's exactly what I mean. Lets see what we discussed so far about the "Square" component. Since it doens't have any state, like the "Game" component, can we make it simplier?
        </Typography>
        <Code>
          {square}
        </Code>
        <Typography variant={'p'}>
          The answer is, drum roll..., so called functional components:
        </Typography>
        <Code>
          {functionalSquare}
        </Code>
        <Typography variant={'p'}>
          Let us have a look at what exactly changed. First of all the "Square" is not any more a class, but rather a function. It only accepts properties and returns another tag. That is pretty straight forward isn't it? This is how react can also levarage functions to render components. If the component has no state we can simplyfy it!
        </Typography>

        <Typography variant={'p'}>
          They are called "functional components" because that is litteraly what they are: A javascript function that renders a component
        </Typography>
        <Typography variant={'p'}>
          You can even use composition (we will talk more in depth about this later) to render multiple of them like this:
        </Typography>
        <Code>
          {composition}
        </Code>

        <Typography variant={'p'}>
          However there is one strict rule that you must follow when using React components. That is that <label style={{fontWeight: 'bold'}}>Props are Read-Only</label>. Consider the following function:
        </Typography>

        <Code>
          {pureFunction}
        </Code>

        <Typography variant={'p'}>
          Such functions are called “pure” because they do not attempt to change their inputs, and always return the same result for the same inputs.
        </Typography>
        <Typography variant={'p'}>
          In contrast this function is considered impure, since it changes its input:
        </Typography>
        <Code>
          {impure}
        </Code>
        <Typography variant={'p'}>
          <label>Now this is an important rule since, a state change in a parent component causes a rerender of the tree and a new prop being passed into the children components and <label style={{fontWeight: 'bold'}}>not</label> a reference change. A reference change introduces a dependency that only the component modifying it is aware off, and not all the other child components that depend on the same prop! When working with React there is only one strict rule that you must follow, that is that: <label style={{fontWeight: 'bold'}}>All React components must act like pure functions with respect to their props.</label></label>
        </Typography>
        <Typography variant={'p'}>
          Consider the following example where a components relies on a transactions state to update multiple views. Itself it renders the ammounts of transactions that has happend so far:
        </Typography>
        <Code>
          {badTransactionsExample}
        </Code>
        <Typography variant={'p'}>
          The second "Text Field" component is changing the state value reference without the parent acknowledging it. This means that other views in the dependency tree could have missleading information.
        </Typography>
      </Fragment>

    )
  }
}

export default withStyles(styles)(FunctionalComponents)
