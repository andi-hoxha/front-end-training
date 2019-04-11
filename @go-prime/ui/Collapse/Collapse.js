/**
 * Created by LeutrimNeziri on 03/04/2019.
 */

import React from 'react'
import PropTypes from 'prop-types'
import {Transition} from 'react-transition-group'
import {timing, expandAnimation, expandAnimationInverse} from 'ui/utils/transitions'
import withStyles from 'ui/withStyles'
import ReactDOM from 'react-dom'
import classNames from 'classnames'

const styles = ({size, transitions}) => ({
  expand: {
    overflow: 'hidden',
    animationTimingFunction: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
    animationDuration: timing.short,
    willChange: 'transform',
    animationName: '$expand'
  },
  expandInverse: {
    overflow: 'hidden',
    animationTimingFunction: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
    animationDuration: timing.short,
    willChange: 'transform',
    animationName: '$expandInverse'
  },
  collapseContainer: {
    overflow: 'hidden',
    transition: 'height 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, padding 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms'
  },
  collapseEntered: {
    height: 'auto',
    overflow: 'visible',
  },
  collapseWrapper: {
    display: 'flex',
    minHeight: 10,
    height: 'auto'
  },
  collapsed: {},
  collapseWrapperInner: {
    width: '100%'
  },
  '@keyframes expand': expandAnimation,
  '@keyframes expandInverse': expandAnimationInverse
})


class Collapse extends React.Component {

  static get defaultProps() {
    return {
      in: false,
      timeout: {
        enter: 500,
        exit: 500,
      }
    }
  }


  containerRef = React.createRef()

  state = {
    height: 0
  }

  componentDidMount() {
    this.setContainerHeight()
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.in !== this.props.in && this.props.in) {

      this.setContainerHeight()
    }
  }

  setContainerHeight = () => {
    let container = ReactDOM.findDOMNode(this.containerRef.current)
    let height = 0
    let rectContainer
    if (container) {
      rectContainer = container.getBoundingClientRect()
      height = container.offsetHeight

      console.log('rectContainer.height',height)
    }
    this.setState({
      height
    })
  }

  processChild = state => {
    const {children, classes} = this.props
    const {height} = this.state
    let transitionStyle = {}
    let wrapperStyle = {}

    const child = React.Children.only(children)
    let className = classNames(child.props.className, classes.collapseContainer)
    switch (state) {
      case 'entering':
        transitionStyle = {
          minHeight: 0
        }
        break
      case 'entered':
        transitionStyle = {
          minHeight: height
        }
        break
      case 'exiting':
        break
      case 'exited':
        transitionStyle = {
          paddingTop: 0,
          paddingBottom: 0,
          maxHeight: 0,
          height:0,
          overflow: 'hidden'
        }
        wrapperStyle = {}
        break
    }

    let childrenWrapper = <div className={classes.collapseWrapper}
                               style={wrapperStyle}
                               ref={this.containerRef}>
      {child.props.children}
    </div>

    let extendedProps = {
      ...child.props,
      className,
      style: {
        ...child.props.style,
        ...transitionStyle
      }
    }
    return React.cloneElement(child, {...extendedProps}, childrenWrapper)
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

Collapse.propTypes = {
  in: PropTypes.bool.isRequired
}

export default withStyles(styles)(Collapse)
