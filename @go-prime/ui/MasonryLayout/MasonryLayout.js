/**
 * Created by LeutrimNeziri on 01/03/2019.
 */

import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import withStyles from 'ui/withStyles'
const styles = ({size, typography, palette, shadows}) => ({
  root: {
    width: 'inherit',
    height: 'inherit',
    display: 'flex',
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    justifyContent: 'space-between'
  },
  column: {
    display: 'flex',
    flexFlow: 'column nowrap',
    alignContent: 'flex-start',
    width: '100%'
  }
})

class MasonryLayout extends React.Component {

  static get propTypes() {
    return {
      cols: PropTypes.number.isRequired
    }
  }

  static get defaultProps() {
    return {
      cols: 3
    }
  }

  state = {}

  createColumns = (col, colIndex) => {
    const {classes, cols, children, theme: {size}} = this.props
    //start putting items in the available space
    let index = 0
    let items = React.Children.map(children, (child, childIndex) => {
      // increment index to match the available columns
      index = childIndex % cols

      // if item index is larger than total number of columns reset index
      if (childIndex % cols >= cols - 1) {
        index = childIndex % cols
      }

      // return child if index matches column index
      if (index === colIndex) {
        return child
      }
    })

    return (
      <div className={classes.column} key={`${col}--${colIndex}`} style={{width: `calc((100% / ${cols} ) - ${size.spacing * 2}px)`}}>
        {items.map(next => next)}
      </div>
    )
  }

  render() {
    const {classes, className: classNameProp, children, cols, ...other} = this.props
    let className = classNames(
      classes.root,
      classNameProp
    )
    return (
      <div className={className} {...other}>
        {[...new Array(cols).keys()].map(this.createColumns)}
      </div>
    )
  }
}

export default withStyles(styles, {withTheme: true})(MasonryLayout)
