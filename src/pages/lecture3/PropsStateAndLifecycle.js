/**
 * Created by LeutrimNeziri on 09/04/2019.
 */
import withStyles from "@material-ui/core/styles/withStyles";
import lifecycle from 'assets/images/lecture3/lifecycle.png';
import Divider from "presentations/Divider";
import Typography from "presentations/Typography";
import React, { Fragment } from "react";
import SimpleLink from "presentations/rows/SimpleLink";
import Code from "presentations/Code";

const styles = ({ typography, size }) => ({
  root: {},
  columns: {
    width: '100%',
    display: 'flex',
    flexFlow: 'row nowrap',
    '& :first-child': {
      marginRight: size.spacing * 2
    },
    '& :last-child': {
      marginLeft: size.spacing * 2
    }
  },
  columnChild: {
    flex: 1,
    width: '30%',
  }
})

const ticker = `
class Playground extends React.Component {

  constructor (props) {
    super (props)
    this.state = {
      interval: 0
    }
  }

  componentDidMount () {
    this.tick()
  }

  tick() {
    setTimeout(() => {
      const { interval } = this.state
      this.setState({
        interval: interval + 1
      })
      this.tick()
    }, 1000)
  }

  shouldComponentUpdate (nextProps, nextState) {
    return nextState.interval % 2 === 0
  }

  componentDidUpdate (prevProps, prevState) {
    // What will I do, when the previous props, and previous state changed?
  }

  render() {
    const { interval } = this.state
    return (
      <Fragment>
        <Typography variant={'heading'}>
          Playground
          <Typography>This will be a page dedicated for experiments and fooling around. Do what ever you need right here, use the playground folder at the project to create more files for whatever reason.</Typography>
          <Divider />
        </Typography>

        {\`Interval: \${interval}\`}
      </Fragment>
    )
  }
}
`

const clean = `
componentWillUnmount () {
  clearInterval(this.timer)
}
`

class PropsStateAndLifecycle extends React.Component {
  render() {
    const { classes, section } = this.props
    // let introcution = section.children[0]
    // let tictactoe = section.children[1]
    return (
      <Fragment>
        <Typography variant={'heading'}>
          {section.display}
          <Divider />
        </Typography>
        <Typography variant='p'>
          Let us explore what else can we learn about the behaviour and the lifecycle of a React Component.
        </Typography>

        <Typography variant='p'>
          A lifecycle basically means the entire journey of a component from its creation until its deletion. In the latest React release (16.4) according to the latest documentation the following lifecycle is enforced:
        </Typography>

        <Typography variant='p'>
          <img src={lifecycle} />
        </Typography>
        <Typography variant='p'>
          Image taken from: <SimpleLink href="http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/">http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/</SimpleLink>
        </Typography>

        <Typography variant='p'>
          A React Component starts the lifecycle with constructor going forward with a render of the UI based on the initial state and props. Every state and props update triggers a re-render, followed by one of the respective lifecycle methods
        </Typography>

        <Typography variant='p'>
          Consider the following example: 
        </Typography>
        <Code>
          {ticker}
        </Code>
        <Typography variant='p'>
          When the component first mounts and the UI is rendered, we want to initiate a listener that sets off every 1 second (1000 miliseconds). Every time this interval occurese the state gets updated to increment to the next state. A React component has three main categories: Mounting, Updating and Unmountin. Lets look at the each lifecycle method one by one:
        </Typography>
        <Typography variant='p'>
          <ol>
            <li>constructor: The component creation constructor method. Gets initial props and assigns initial state via this.state = {`{...}`}</li>
            <li>componentDidMount: After the initial render. That is as soon as the component mounts. You can set state here, but with caution!</li>
            <li>componentDidUpdate: That is as soon as the component updates. Depending on the previous props and prev state, you have the ability to react! You can set state here, but with caution!</li>
          </ol>
        </Typography>
        <Code>
          {clean}
        </Code>
      </Fragment>

    )
  }
}

export default withStyles(styles)(PropsStateAndLifecycle)
