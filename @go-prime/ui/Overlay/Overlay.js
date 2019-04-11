/**
 * Created by LeutrimNeziri on 01/03/2019.
 */
import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Transition from 'ui/Transition'
import {rgba} from 'polished'
import withStyles from 'ui/withStyles'

const styles = ({size, palette, zIndex, typography, transitions}) => ({
  root: {
    position: 'fixed',
    width: '100vw',
    height: '100vh',
    top: 0,
    left: 0,
    display: 'flex',
    transition: transitions.common,
    backgroundColor: rgba(palette.leadDarkAccent1, 0.2),
    zIndex: zIndex.overlay
  },
  transparent: {
    backgroundColor: 'transparent'
  }
})

class Overlay extends React.Component {

  static get defaultProps() {
    return {
      open: false,
      transparent: false,
      onClick: () => {
      }
    }
  }


  onClick = event => {
    const {onClick} = this.props
    event.preventDefault()
    if (onClick) onClick(event)
  }

  render() {
    const {className: classNameProp, transparent, open, classes, other} = this.props

    const className = classNames(
      classes.root,
      transparent && classes.transparent,
      classNameProp
    )

    return (
      <Transition variant="fade" in={open}>
        <div onClick={this.onClick} {...other} className={className}/>
      </Transition>
    )
  }
}

Overlay.propTypes = {
  open: PropTypes.bool.isRequired,
  transparent: PropTypes.bool,
  onClick: PropTypes.func.isRequired
}

export default withStyles(styles)(Overlay)
