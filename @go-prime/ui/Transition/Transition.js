/**
 * Created by LeutrimNeziri on 07/03/2019.
 */
import React from 'react'
import PropTypes from 'prop-types'
import Fade from 'ui/Fade'
import Slide from 'ui/Slide'
import Collapse from 'ui/Collapse'


const transitionVariants = {
  fade: 'fade',
  slide: 'slide',
  grow: 'grow',
  collapse: 'collapse'
}

class Transition extends React.Component {

  static get defaultProps() {
    return {
      direction: 'left',//if variant === slide choose between right left bottom top
      variant: 'slide',// slide, zoom, grow, collapse, fade,
      in: false,
      timeout: {
        enter: 150,
        exit: 150,
      }
    }
  }

  render() {

    const {in: inProp, variant, children, timeout} = this.props

    let transition = undefined
    switch (variant) {
      case transitionVariants.fade:
        transition = <Fade in={inProp} timeout={timeout}>{children}</Fade>
        break
      case transitionVariants.slide:
        transition = <Slide in={inProp} timeout={timeout}>{children}</Slide>
        break
      case transitionVariants.collapse:
        transition = <Collapse in={inProp} timeout={timeout}>{children}</Collapse>
        break
    }

    return transition

  }
}

Transition.propTypes = {
  in: PropTypes.bool.isRequired,
  variant: PropTypes.oneOf(Object.keys(transitionVariants)),
  timeout: PropTypes.shape({
    enter: PropTypes.number,
    exit: PropTypes.number
  })
}

export default Transition

