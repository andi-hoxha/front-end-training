/**
 * Created by LeutrimNeziri on 21/03/2019.
 */
import React from 'react'
import withStyles from 'ui/withStyles'
import EventListener, {withOptions} from 'react-event-listener'

class ClickAwayListener extends React.Component {

  static get defaultProps() {
    return {
      target: 'window'
    }
  }

  render() {
    const {target, ...props} = this.props

    return (
      <EventListener target={target}  {...props}/>
    )
  }
}

export default ClickAwayListener