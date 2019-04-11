/**
 * Created by LeutrimNeziri on 14/03/2019.
 */
import React, {Fragment} from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import withStyles from 'ui/withStyles'
import Paper from 'ui/Paper'
import Transition from 'ui/Transition'
import ClickAwayListener from 'ui/ClickAwayListener'
import Position from 'ui/utils/Position'
import {popoverPositions} from 'ui/utils/Props'

const styles = ({size, palette, typography, transitions, zIndex}) => ({
  root: {
    position: 'fixed',
    zIndex: zIndex.popover,
    width: 200
  }
})

class Popover extends React.Component {

  static get defaultProps() {
    const {horizontalOptions, verticalOptions} = popoverPositions
    return {
      open: false,
      anchorEl: null,
      placeHorizontally: horizontalOptions.left,
      placeVertically: verticalOptions.top,
      verticalOffset: 8,
      horizontalOffset: 0
    }
  }

  state = {
    //it determines if it has an element and it could place the paper under the given position
    dirty: false,
    style: {},
  }

  containerRef = React.createRef()

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.anchorEl) {
      return {
        dirty: true
      }
    }
    return {dirty: false}
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.dirty !== this.state.dirty && this.state.dirty) {
      this.getCoordinates()
    }
  }

  /**
   * TODO: other props to take into consideration
   * form which point to display the container horizontally
   * from which point to display the container vertically
   * support offset for both axis
   */


  /**
   * TODO: use this logic for tooltips and other components, make this an utility function
   * TODO: add support to automatically place in opposite direction of target element if no available room in window
   * get the coordinates of the anchor element
   * and position the content at the requested place
   */
  getCoordinates = () => {
    const {anchorEl, placeHorizontally, placeVertically, verticalOffset, horizontalOffset} = this.props
    const {dirty} = this.state
    // if no anchor el supplied as prop don't do anything
    if (!dirty) {
      return
    }

    let options = {
      verticalOffset,
      horizontalOffset,
      placeHorizontally,
      placeVertically
    }

    let style = Position.getPoperPositions(anchorEl, options)

    this.setState({
      style
    })
  }


  /*TODO: Add Callbacks to trigger event if user clicks the target element or the container element*/

  /**
   * close the popover
   * @param event
   */
  onClose = event => {
    const {onClose, anchorEl} = this.props
    let container = ReactDOM.findDOMNode(this.containerRef.current)

    if (event.target === anchorEl) {
      console.log('the element clicked is the target')
      return
    }
    if (event.target === container) {
      console.log('the element clicked is the container')
      return
    }
    if (onClose) onClose(event)
  }


  render() {
    const {classes, className: classNameProp, open, children, anchorEl, placeHorizontally, placeVertically, verticalOffset, style: styleProp, horizontalOffset, ...other} = this.props
    const {style} = this.state
    const className = classNames(
      classes.root,
      classNameProp
    )
    /*console.log('la style', style)
     console.log('is dirty', this.state.dirty)*/
    return (
      <Fragment>
        <Transition in={open} variant={'collapse'}>
          <Paper depth={'popover'} className={className}
                 ref={this.containerRef} style={{...style, ...styleProp}} {...other}>
            {children}
          </Paper>
        </Transition>
        {open && <ClickAwayListener onClick={this.onClose}/>}
      </Fragment>
    )
  }
}

Popover.propTypes = {
  open: PropTypes.bool.isRequired,
  anchorEl: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  onClose: PropTypes.func,
  placeHorizontally: PropTypes.oneOf(Object.keys(popoverPositions.horizontalOptions)),
  placeVertically: PropTypes.oneOf(Object.keys(popoverPositions.verticalOptions)),
  verticalOffset: PropTypes.number,
  horizontalOffset: PropTypes.number,
}

export default withStyles(styles, {withTheme: true})(Popover)

