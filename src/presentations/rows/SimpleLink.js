/**
 * Created by LeutrimNeziri on 01/03/2019.
 */
import React from 'react'
import withStyles from '@go-prime/ui/withStyles'
import classNames from 'classnames'

const styles = ({palette, size, transitions}) => ({
  root: {
    padding: [0, size.spacing / 2],
    fontSize: size.titleFontSize,
    transition: transitions.common,
    '&:hover': {
      color: palette.leadColor
    },
  },
  active:{
    color: palette.leadColor
  }
})

const SimpleLink = props => {
  const {classes, children, className: classNameProp, active, ...other} = props
  const className = classNames(
    classes.root,
    active && classes.active,
    classNameProp
  )


  return (
    <a className={className} {...other}>
      {children}
    </a>
  )
}

export default withStyles(styles)(SimpleLink)
