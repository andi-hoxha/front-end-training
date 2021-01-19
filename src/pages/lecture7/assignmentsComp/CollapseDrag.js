import withStyles from "@material-ui/core/styles/withStyles";
import Divider from "presentations/Divider";
import PageLink from "presentations/rows/nav/PageLink";
import Typography from "presentations/Typography";
import React, { Fragment } from "react";
import { Button } from "@material-ui/core";
import ArrowDropDown from "presentations/icons/ArrowDropDown";
import classNames from 'classnames'

const collapasibleStyles = (theme) => ({
  root: {
    width: 320
  },
  title: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'space-between',
    padding: 4,
    alignItems: 'center'
  },
  content: {
    width: '100%',
    display: 'flex',
    flexFlow: 'row wrap'
  },
  open: {
    display: 'flex',
  },
  closed: {
    display: 'none',
  }
})

const Collapsable = (props) => {
  const { className, open, classes, title, item, draggable = true, ...other } = props
  const contentClass = classNames(classes.content, open ? classes.open : classes.closed)

  const onDragStart = (event) => {
    event.dataTransfer.setData('item', JSON.stringify(item))
  }

  return (
    <div draggable={draggable} onDragStart={onDragStart} className={classNames(className, classes.root)} {...other}>
      <Typography className={classes.title}>
        {item.text} <ArrowDropDown />
      </Typography>
      <div className={contentClass}>
        <Typography variant='p'>Here is my content for {item.text}, now you see it</Typography>
        <Typography variant='p'>Here is my content for {item.text}, now you see it</Typography>
        <Typography variant='p'>Here is my content for {item.text}, now you see it</Typography>
        <Typography variant='p'>Here is my content for {item.text}, now you see it</Typography>
      </div>
    </div>
  )
}
const CollapsableWithStyles = withStyles(collapasibleStyles)(Collapsable)

const collapseContainerStyles = (theme) => ({
  content: {
    flex: 1,
    display: 'flex',
    flexFlow: 'row wrap',
  },
  card: {
    background: 'white',
    margin: 8,
    padding: 8,
    borderRadius: 8
  },
  leftSide: {
    minWidth: 320
  },
  dragOver:{
    border: '2px dashed red'
  }
})

class CollapsableContainer extends React.Component {
  state = {
    dragOver: false
  }

  onDrop = (which, event) => {
    const item = event.dataTransfer.getData('item')
    console.log('on drop', event, item)

    const { onDrop } = this.props
    onDrop(JSON.parse(item), which)
    // let the parent that an item is dropped
  }

  onDragOver = (event) => {
    event.preventDefault()
    event.dataTransfer.dropEffect = 'move'
    if(event.target.id === 'right'){
      this.setState({
        dragOver:true
      })
    }
  }

  onDragLeave = (event) => {
    event.preventDefault()
    this.setState({
      dragOver:false
    })
  }

  render() {
    const { className, classes, children, ...other } = this.props
    const {dragOver} = this.state

    return (
      <div className={classes.content}>
        <div className={classNames(classes.leftSide, classes.card)}
             onDrop={(event) => this.onDrop('left',event)}
             onDragOver={this.onDragOver}
        >
          {children.filter(next => next.props.item.placement === 'left')}
        </div>
        <div
          id={'right'}
          className={classNames(classes.content, classes.card, dragOver ? classes.dragOver:null)}
          onDrop={(event) => this.onDrop('right', event)}
          onDragOver={this.onDragOver}
          onDragLeave={this.onDragLeave}
        >
          {children.filter(next => next.props.item.placement === 'right').map(next => React.cloneElement(next,{open:true}))}
        </div>
      </div>
    )
  }
}

const CollapsableContainerWithStyles = withStyles(collapseContainerStyles)(CollapsableContainer)


const styles = (theme) => ({
})

class CollapseDrag extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [
        { id: 1, text: 'First Draggable', placement: 'left' },
        { id: 2, text: 'Second Draggable', placement: 'left' },
        { id: 3, text: 'Third Draggable', placement: 'left' },
        { id: 4, text: 'Forth Draggable', placement: 'left' },
        { id: 5, text: 'Fifth Draggable', placement: 'left' },
        { id: 6, text: 'Sixth Draggable', placement: 'left' }
      ]
    }
  }

  onDrop = (item,which) => {
    this.setState(prevState => ({
      items: prevState.items.map(next => {
        if (next.id === item.id) {
          return { ...item, placement: which }
        }
        return next
      })
    }))
  }

  render() {
    const { className, classes, ...other } = this.props
    const { items } = this.state
    console.log('items', items)
    return (
      <CollapsableContainerWithStyles onDrop={this.onDrop}>
        {items.map(next => <CollapsableWithStyles key={next.id} item={next} />)}
      </CollapsableContainerWithStyles>
    )
  }
}

export default withStyles(styles)(CollapseDrag)
