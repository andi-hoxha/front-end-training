/**
 * Created by LeutrimNeziri on 14/03/2019.
 */
import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import withStyles from 'ui/withStyles'
import Input from 'ui/Input'
import classNames from 'classnames'

const styles = ({palette, size, typography, transitions, shadows}) => ({
  root: {}
})

class Select extends React.Component {

  render() {
    const {
      classes,
      className: classNameProp,
      variant,
      InputProps,
      open,
      other
    } = this.props


    return (
      <Fragment>
        <Input variant={variant}/>
      </Fragment>
    )
  }
}

export default withStyles(styles)(Select)