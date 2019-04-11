/**
 * Created by LeutrimNeziri on 01/03/2019.
 */
import React from 'react'
import classNames from 'classnames'
import withStyles from 'ui/withStyles'


const styles = ({palette, size, shadows, transitions, typography}) => ({
  root: {
    display: 'flex',
    flexFlow: 'column wrap',
    alignContent: 'flex-start',
  },
  title: {
    width: '100%',
    ...typography.display,
    fontWeight: typography.weight.light
  },
  content: {
    width: '100%',
    fontSize: size.headerFontSize,
    margin: [size.spacing * 2, size.spacing / 2],
    marginRight: 0
  }
})

class Jumbotron extends React.Component {
  static get defaultProps() {
    return {
      title: ''
    }
  }

  render() {
    const {classes, className: classNameProp, children, title} = this.props

    const className = classNames(
      classes.root,
      classNameProp
    )
    return (
      <div className={className}>
        <span className={classes.title}>{title}</span>
        <div className={classes.content}>{children}</div>
      </div>
    )
  }
}

export default withStyles(styles)(Jumbotron)