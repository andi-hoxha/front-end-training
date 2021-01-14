import React, { Fragment } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Code from "presentations/Code";
import Divider from "presentations/Divider";
import SimpleLink from "presentations/rows/SimpleLink";
import Typography from "presentations/Typography";
import { Button } from "@material-ui/core";

const Card = (props) => {
  const { title, titleClass, content, ...other } = props
  const resizableBox = {
    width:10,
    height:10,
    backgroundColor: 'red',
    position: 'absolute',
    right:0,
    bottom:0,
    cursor:'se-resize',
  }
  return (
    <div {...other} id={'mainDiv'}>
      <Typography variant={'title'} className={titleClass}>{title}</Typography>
      <Typography variant={'p'} className={content} >
        I want to be draggable!
			</Typography>
      <div style={resizableBox} onMouseDown={props.test}/>
    </div>
  )
}

// x, y = 0
const draggable = (WrappedComponent) => {
  return class extends React.Component {
    constructor(props) {
      super(props)

      this.state = {
        x: 0,
        y: 0
      }
    }

    componentDidMount() {
      document.addEventListener('mousemove', this.onMouseMove)
      document.addEventListener('mouseup', this.onMouseUp)
    }
    componentWillUnmount() {
      document.removeEventListener('mousemove', this.onMouseMove)
      document.removeEventListener('mouseup', this.onMouseUp)
    }


    onMouseDown = (event) => {
      const { pageX, pageY } = event
      const { x, y } = this.state
      this.setState({
        location: {
          x: pageX - x,
          y: pageY - y
        }
      })
      const divElement = document.getElementById('mainDiv')
      console.log('Div element',divElement.offsetWidth + x)
      console.log('page X reset',event.pageX = 0 + x)
    }

    onMouseMove = (event) => {
      const { pageX, pageY } = event
      const { location } = this.state
      if (!location) {
        return
      }

      this.setState({
        x: pageX - location.x,
        y: pageY - location.y
      })
      console.log('page X new ',this.state.x)
    }

    onMouseUp = (event) => {
      this.setState({
        location: null
      })
    }

    render() {
      const { x, y } = this.state
      const { style: styleFromProps, onMouseDown, onMouseUp, onMouseMove, ...other } = this.props
      // { height: 50 }
      // const styleFromProps = this.props.style
      const style = {
        top: y,
        left: x,
        ...styleFromProps
      }
      return (
        <WrappedComponent
          onMouseDown={this.onMouseDown}
          style={style}
          {...other}
        />
      )
    }
  }
}

// x, y = 0
const resizable = (WrappedComponent) => {
  return class extends React.Component {
    constructor(props) {
      super(props)

      this.state = {
        width: 320,
        height: 180,
        x: 0,
        y: 0,
      }
    }

    componentDidMount() {
      document.addEventListener('mousemove', this.onMouseMove)
      document.addEventListener('mouseup', this.onMouseUp)
    }
    componentWillUnmount() {
      document.removeEventListener('mousemove', this.onMouseMove)
      document.removeEventListener('mouseup', this.onMouseUp)
    }

    //onMouseDown mark current pageX and pageY setState
    onMouseDown  = (event) => {
      this.setState({
        prevX: event.pageX,
        prevY: event.pageY
      })
      console.log(event.pageX)
    }

    //onMouseMove calculate difference frrom event.pageX and event.pageY (which will increase from state pageX and pageY )

    onMouseMove = (event) => {
      if(!this.state.prevX || !this.state.prevY){
        return
      }
      const {prevX, prevY} = this.state
      this.setState({
        x:event.pageX - prevX,
        y:event.pageY - prevY
      })
    }

    //onMouseUp reset prev.X and prev.Y
    onMouseUp = () => {
      this.setState({
        prevX: undefined,
        prevY: undefined
      })
    }

    render() {
      const { x , y } = this.state
      const { style: styleFromProps, ...other } = this.props

      const style = {
        ...styleFromProps,
        width:x === 0 ? 280+x : x,
        height:y === 0 ? 180+y : y
      }
      // { height: 50 }
      // const styleFromProps = this.props.style
      return (
        <div>
          <WrappedComponent {...other} test={this.onMouseDown} style={style}/>
          <div />
        </div>
      )
    }
  }
}

const DraggableCard = resizable(Card, false)

const styles = ({ size }) => ({
  root: {
    width: '100%',
    background: 'grey',
    height: 720,
    position: 'relative'
  },
  card: {
    backgroundColor: 'white',
    width: 280,
    height: 140,
    margin: size.spacing,
    padding: 8,
    display: 'flex',
    position: 'absolute',
    flexFlow: 'column wrap',
    alignItems: 'flex-start',
  },
})

const Resizable = (props) => {
  const { classes, ...other } = props

  const cardProps = {
    titleClass: classes.title,
    className: classes.card,
    content: classes.content
  }
  return (
    <div className={classes.root}>
      <DraggableCard {...cardProps}/>
    </div>
  )
}

export default withStyles(styles)(Resizable)