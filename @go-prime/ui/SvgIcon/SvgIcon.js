/**
 * Created by LeutrimNeziri on 28/02/2019.
 */
import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import withStyles from 'ui/withStyles'

const styles = ({size}) => ({
  root: {
    userSelect: 'none',
    width: '1em',
    height: '1em',
    display: 'inline-block',
    fill: 'currentColor',
    flexShrink: 0,
  },
  defaultFontSize: {
    fontSize: size.iconSize
  },
  inheritFontSize: {
    fontSize: 'inherit'
  }
})

const SvgIcon = props => {
  const {classes, children, className: classNameProp, fontSize, nativeColor, viewBox, ...other} = props
  //TODO: add color property
  const className = classNames(
    classes.root,
    fontSize === 'default' && classes.defaultFontSize,
    fontSize === 'inherit' && classes.inheritFontSize,
    classNameProp
  )
  return (
    <svg
      color={nativeColor}
      className={className}
      viewBox={viewBox}
      focusable="false"
      {...other}>
      {children}
    </svg>
  )
}

SvgIcon.defaultProps = {
  color: 'inherit',
  fontSize: 'default',
  viewBox: '0 0 30 30',
}

export default withStyles(styles)(SvgIcon)