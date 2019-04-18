/**
 * Created by LeutrimNeziri on 09/04/2019.
 */
import withStyles from "@material-ui/core/styles/withStyles";
import Divider from "presentations/Divider";
import Typography from "presentations/Typography";
import React, { Fragment } from "react";
const styles = ({ typography }) => ({
  root: {},
})

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
    this.timer = setTimeout(() => {
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

  componentWillUnmount () {
    clearInterval(this.timer)
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

        {`Interval: ${interval}`}
      </Fragment>
    )
  }
}

export default withStyles(styles)(Playground)
