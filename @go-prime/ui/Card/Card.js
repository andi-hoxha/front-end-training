/**
 * Created by LeutrimNeziri on 01/03/2019.
 */
import React from 'react'
import classNames from 'classnames'
import withStyles from 'ui/withStyles'
import Paper from 'ui/Paper'
import IconButton from 'ui/IconButton'

const styles = ({palette, size, shadows, transitions, typography}) => ({
  root: {
    display: 'flex',
    flexFlow: 'column wrap',
    alignContent: 'flex-start',
    padding: 0
  },
  header: {
    minHeight: size.spacing * 8,
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'center',
    padding: [size.spacing * 2, size.spacing * 3]
  },
  title: {
    flex: 1,
    ...typography.header
  },
  content: {
    flex: 1,
    display: 'flex',
    flexFlow: 'row wrap',
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    width: '100%',
    transition: transitions.common,
    padding: [size.spacing * 2, size.spacing * 3]
  },
  expandableContent: {
    width: '100%',
    transition: transitions.common,
    height: 0,
    overflow: 'hidden',
    display: 'flex',
    padding: [0, size.spacing * 3]
  },
  expandableContentOpen: {
    minHeight: 200,
    height: 'auto',
    padding: [size.spacing * 2, size.spacing * 3]
  },
  actions: {
    width: '100%',
    padding: [size.spacing * 2, size.spacing * 3]
  }
})

class Card extends React.Component {
  static get defaultProps() {
    return {
      title: '',
      actions: [],
      depth: 'default',
      headerIcon: null
    }
  }

  state = {
    open: false
  }

  onMoreClick = event => {
    event.preventDefault()
    this.setState(prevState => ({
      open: !prevState.open
    }))
  }

  render() {
    const {classes, className: classNameProp, depth, title, headerIcon, children, expandableContent, actions, ...other} = this.props

    const {open} = this.state

    const className = classNames(
      classes.root,
      classNameProp
    )

    return (
      <Paper className={className} depth={depth} {...other}>
        <div className={classes.header}>
          <span className={classes.title}>{title}</span>
          {headerIcon && <IconButton onClick={this.onMoreClick}>
            {headerIcon}
          </IconButton>}
        </div>
        <div className={classes.content}>
          {/**TODO: Replace expandableContent with collapse transition*/}
          {expandableContent &&
          <div className={classNames(classes.expandableContent, open && classes.expandableContentOpen)}>
            {expandableContent}
          </div>}
          {children}
        </div>
        {actions && <div className={classes.actions}>
          {actions}
        </div>}
      </Paper>
    )
  }
}

export default withStyles(styles)(Card)