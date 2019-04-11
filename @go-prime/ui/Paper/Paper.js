/**
 * Created by LeutrimNeziri on 01/03/2019.
 */
import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import withStyles from 'ui/withStyles'

const depthOptions = {
  default: 'default',
  hover: 'hover',
  popover: 'popover',
  modal: 'modal'
}

const styles = ({palette, size, shadows, transitions, typography}) => ({
  root: {
    display: 'flex',
    borderRadius: size.baseRadius,
    boxShadow: shadows.default,
    backgroundColor: palette.common.white,
    padding: size.spacing * 2
  },
  transparent: {
    backgroundColor: 'transparent'
  },
  default: {
    boxShadow: shadows.default
  },
  hover: {
    boxShadow: shadows.hover
  },
  popover: {
    boxShadow: shadows.popover
  },
  modal: {
    boxShadow: shadows.modal
  },
})

class Paper extends React.Component {

  static get defaultProps() {
    return {
      transparent: false,
      depth: depthOptions.default, //default,hover, popover, modal
    }
  }

  render() {
    const {classes, className: classNameProp, children, transparent, depth, ...other} = this.props
    const className = classNames(
      classes.root,
      transparent && classes.transparent,
      depth === depthOptions.default && classes.default,
      depth === depthOptions.hover && classes.hover,
      depth === depthOptions.popover && classes.popover,
      depth === depthOptions.modal && classes.modal,
      classNameProp
    )
    return (
      <div className={className} {...other}>
        {children}
      </div>
    )
  }
}

Paper.propTypes = {
  transparent: PropTypes.bool,
  depth: PropTypes.oneOf(Object.keys(depthOptions))
}

export default withStyles(styles)(Paper)
