import React, {Fragment} from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Code from "presentations/Code";
import Divider from "presentations/Divider";
import SimpleLink from "presentations/rows/SimpleLink";
import Typography from "presentations/Typography";
import {Button} from "@material-ui/core";

const Card = (props) => {
    const {title, titleClass, content,onDoubleClicked,mouseDown, ...other} = props
    const resizableBox = {
        width: 10,
        height: 10,
        backgroundColor: 'red',
        position: 'absolute',
        right: 0,
        bottom: 0,
        cursor: 'se-resize',
    }
    return (
        <div {...other} id={'mainDiv'} onDoubleClick={onDoubleClicked}>
            <Typography variant={'title'} className={titleClass}>{title}</Typography>
            <Typography variant={'p'} className={content}>
                I want to be draggable!
            </Typography>
            <div style={resizableBox} onMouseDown={mouseDown}/>
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
            const {pageX, pageY} = event
            const {x, y} = this.state
            this.setState({
                location: {
                    x: pageX - x,
                    y: pageY - y
                }
            })
            const divElement = document.getElementById('mainDiv')
            console.log('Div element', divElement.offsetWidth + x)
            console.log('page X reset', event.pageX = 0 + x)
        }

        onMouseMove = (event) => {
            const {pageX, pageY} = event
            const {location} = this.state
            if (!location) {
                return
            }

            this.setState({
                x: pageX - location.x,
                y: pageY - location.y
            })
            console.log('page X new ', this.state.x)
        }

        onMouseUp = (event) => {
            this.setState({
                location: null
            })
        }

        render() {
            const {x, y} = this.state
            const {style: styleFromProps, onMouseDown, onMouseUp, onMouseMove, ...other} = this.props
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
                width: 0,
                height: 0,
                mouseX: 0,
                mouseY: 0,
                updatedWidth:0,
                updatedHeight:0,
                fullScreen:false
            }
        }
        onMouseDown = (event) => {
            const element = document.getElementById('mainDiv')
            const width = element.offsetWidth
            const height = element.offsetHeight
            this.setState({
                mouseX: event.pageX,
                mouseY: event.pageY,
                width: width,
                height: height
            })
            window.addEventListener('mousemove', this.onMouseMove)
            window.addEventListener('mouseup', this.stopResizing)
        }

        onMouseMove = (event) => {
            const {mouseX, mouseY, width, height} = this.state
            const updatedWidth = width + (event.pageX - mouseX)
            const updatedHeight = height + (event.pageY - mouseY)
            this.setState({
              updatedHeight:updatedHeight,
              updatedWidth:updatedWidth
            })
        }

        stopResizing = () => {
            this.setState({
              mouseX:undefined,
              mouseY:undefined
            })
            window.removeEventListener('mousemove', this.onMouseMove)
        }

        onDoubleClicked = () => {
          this.setState({
            fullScreen:!this.state.fullScreen
          })
          console.log("fullScreen:", this.state.fullScreen)
        }
        render() {
            const {updatedWidth,updatedHeight,fullScreen} = this.state
            const {style: styleFromProps, ...other} = this.props

            const style = {
                ...styleFromProps,
                minWidth:280,
                minHeight:140,
                maxWidth:'99%',
                maxHeight:712,
                width:updatedWidth,
                height:updatedHeight
            }
            const fullscreen = {
              ...styleFromProps,
              width:'99%',
              height:705
            }

            const cardStyle = fullScreen ? fullscreen : style

            // { height: 50 }
            // const styleFromProps = this.props.style
            return (
                <div>
                    <WrappedComponent {...other} onDoubleClicked={this.onDoubleClicked} mouseDown={this.onMouseDown} style={cardStyle} />
                    <div/>
                </div>
            )
        }
    }
}

const DraggableCard = resizable(Card, false)

const styles = ({size}) => ({
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
    const {classes, ...other} = props

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