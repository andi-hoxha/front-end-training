/**
 * Created by LeutrimNeziri on 28/02/2019.
 */
import React from 'react'
import withStyles from 'ui/withStyles'
import propTypes from 'prop-types'
import Button from 'ui/Button'
import {rgba} from 'polished'
import classNames from 'classnames'

const styles = ({palette, size, typography}) => ({
  root: {
    cursor: 'pointer',
    width: 'auto',
    display: 'inline-flex',
    padding: size.spacing / 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    '&:hover': {
      backgroundColor: rgba(palette.common.black, 0.1)
    }
  }
})
export class IconButton extends React.Component {

  render() {
    const {
      className: classNameProp,
      children,
      color,
      disabled,
      variant,
      classes,
      onClick,
      onMouseDown,
      onMouseUp,
      onMouseMove,
      onMouseOver,
      onMouseOut,
      ...props
    } = this.props

    const className = classNames(
      classes.root,
      classNameProp
    )

    let listeners = disabled ? {} : {
      onClick: onClick,
      onMouseDown: onMouseDown,
      onMouseUp: onMouseUp,
      onMouseMove: onMouseMove,
      onMouseOver: onMouseOver,
      onMouseOut: onMouseOut
    }
    return (
      <Button className={className}
              color={color || 'inherit'}
              variant={variant || 'flat'}
              {...listeners}
              {...props}>
        {children}
      </Button>
    )
  }
}

export default withStyles(styles)(IconButton)