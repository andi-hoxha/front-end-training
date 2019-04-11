/**
 * Created by LeutrimNeziri on 03/04/2019.
 */

import React from 'react'
import PropTypes from 'prop-types'
import {timing} from '@go-prime/ui/utils/transitions'
import {Transition} from 'react-transition-group'


class Slide extends React.Component {

  static get defaultProps() {
    return {
      direction: 'left',//if variant === slide choose between right left bottom top,
      in: false,
      timeout: {
        enter: 150,
        exit: 150,
      }
    }
  }

  getSlideTransition = direction => {
    let style = {
      entering: {
        transform: 'translateX(-100%)',
        transformOrigin: 'left',
        boxShadow: 'none',
        transitionProperty: 'transform'
      },
      entered: {
        transform: 'translateX(0)',
        transformOrigin: 'left',
        transitionProperty: 'transform'
      },
      exiting: {
        transform: 'translateX(-100%)',
        transformOrigin: 'left',
        transitionProperty: 'transform'
      },
      exited: {
        display: 'none',
      }
    }

    if (direction === 'right') {
      style = {
        ...style,
        entering: {
          ...style.entering,
          transformOrigin: 'right'
        },
        entered: {
          ...style.entered,
          transformOrigin: 'right'
        },
        exiting: {
          ...style.exiting,
          transformOrigin: 'right'
        }
      }
    }
    return style
  }

  getTransition() {
    const {direction} = this.props

    let defaultStyle = {
      transition: `all ${timing.short}ms ease-in-out`
    }

    let transitionStyle = this.getSlideTransition(direction)

    return {
      defaultStyle,
      transitionStyle
    }
  }

  processChild = state => {
    const {children} = this.props
    let {defaultStyle = {}, transitionStyle = {}} = this.getTransition()
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

Slide.propTypes = {
  in: PropTypes.bool.isRequired
}

export default Slide
