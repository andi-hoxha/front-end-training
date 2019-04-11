/**
 * Created by LeutrimNeziri on 03/04/2019.
 */

import React from 'react'
import PropTypes from 'prop-types'
import {Transition} from 'react-transition-group'
import {timing} from 'ui/utils/transitions'


class Fade extends React.Component {

  static get defaultProps() {
    return {
      timeout: {
        enter: 150,
        exit: 150,
      }
    }
  }


  processChild = state => {
    const {children} = this.props

    let defaultStyle = {
      transition: `all ${timing.short}ms ease-in-out`
    }

    //Fade Style
    let transitionStyle = {
      entering: {display: 'flex', opacity: 0},
      entered: {opacity: 1},
      exiting: {opacity: 0},
      exited: {display: 'none', opacity: 0}
    }
    const child = React.Children.only(children)
    return React.cloneElement(child, {
      ...child.props,
      style: {
        ...child.props.style,
        ...defaultStyle,
        ...transitionStyle[state]
      }
    })
  }

  render() {

    const {in: inProp, timeout} = this.props

    return (
      <Transition in={inProp} timeout={timeout}>
        {this.processChild}
      </Transition>
    )
  }
}

Fade.propTypes = {
  in: PropTypes.bool.isRequired
}

export default Fade
