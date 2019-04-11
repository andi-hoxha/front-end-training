/**
 * Created by LeutrimNeziri on 28/02/2019.
 */
import React, {Fragment} from 'react'
import classNames from 'classnames'
import withStyles from 'ui/withStyles'
import Overlay from 'ui/Overlay'
import Slide from 'ui/Slide'
import {rgba} from 'polished'

const styles = ({size, shadows, palette, typography, transitions, zIndex, sizes}) => ({
  root: {
    height: '100vh',
    width: sizes.drawer,
    display: 'flex',
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    justifyContent: 'flex-start',
    flexFlow: 'row wrap',
    backgroundColor: rgba(palette.bgColor, 0.97),
    padding: size.spacing * 3,
    zIndex: zIndex.drawer,
    overflow: 'hidden',
    boxShadow: shadows.popover
  },
})

class Drawer extends React.Component {

  static get defaultProps() {
    return {
      direction: 'left',//From Right
      open: false
    }
  }

  onClose = event => {
    event.preventDefault()
    const {onClose} = this.props
    if (onClose) onClose(event)
  }

  render() {
    const {className: classNameProp, direction, classes, open, children, ...other} = this.props
    const className = classNames(
      classes.root,
      classNameProp
    )
    return (
      <Fragment>
        <Slide in={open} direction={direction}>
          <div className={className} {...other}>
            {children}
          </div>
        </Slide>
        <Overlay open={open} onClick={this.onClose}/>
      </Fragment>
    )
  }
}

export default withStyles(styles)(Drawer)
