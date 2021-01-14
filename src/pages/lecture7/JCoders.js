/**
 * Created by LeutrimNeziri on 09/04/2019.
 */
import withStyles from "@material-ui/core/styles/withStyles";
import Divider from "presentations/Divider";
import PageLink from "presentations/rows/nav/PageLink";
import Typography from "presentations/Typography";
import React, {Fragment} from "react";
import {Button} from "@material-ui/core";
import ArrowDropDown from "presentations/icons/ArrowDropDown";
import classNames from 'classnames'
import render from "enzyme/src/render";
import {disConnect} from "echarts/src/echarts";
import Grid from "pages/lecture7/assignmentsComp/Grid";
import Position from "pages/lecture7/assignmentsComp/Position";
import CollapseDrag from "pages/lecture7/assignmentsComp/CollapseDrag";
import Resizable from "pages/lecture7/assignmentsComp/Resizable";

const styles = ({typography}) => ({
    root: {},
    div: {
        width: '100%'
    }
})

// Write the HOC here, and plug it in at Position Component

const Nav = (props) => {
    return (
        <Typography variant={'title'}>
            I'm a nav component
            <Divider/>
        </Typography>
    )
}

const Info = (props) => {
    return (
        <Typography variant={'p'}>
            I'm a generic info component
            <Divider/>
        </Typography>
    )
}


const containerStyles = (theme) => ({
    root: {
        width: '100%',
        display: 'flex',
        flexFlow: 'row nowrap'
    },
    side: {
        flex: 1,
    },
    middle: {
        flex: 3
    }
})


const cardStyles = ({size}) => ({
    card: {
        backgroundColor: 'white',
        width: 280,
        height: 140,
        margin: size.spacing,
        padding: 8,
        display: 'flex',
        flexFlow: 'column wrap',
        alignItems: 'flex-start'
    },
})

const Card = (props) => {
    const {title, classes, children, ...other} = props
    return (
        <div className={classes.card} {...other}>
            <Typography variant={'title'}>{title}</Typography>
            <Typography variant={'p'}>
                Here is some of my content
            </Typography>
            {children}
        </div>
    )
}

const GridContainer = (props) => {
    const {children, cols = 5, gap = 16} = props

    if(children.length === 0){
        return null
    }

    const manipulateChildren = (child, index) => {
        const width = (100 / cols)

        const extendedProps = {
            ...child.props,
            style: {
                ...child.props.style,
                width: `calc(${width}% - ${gap}px)`,
                marginLeft: 0,
                marginRight: gap + 'px'
            }
        }

        return React.cloneElement(child, extendedProps, [<div>Kosova</div>])
    }

    return (
        <Grid>
            {React.Children.toArray(children).map(manipulateChildren)}
        </Grid>
    )
}


const mousePosition = (WrappedComponent) => {
    return class extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                x: 0,
                y: 0
            }
        }

        componentDidMount() {
            document.addEventListener('mousemove', this.onMouseUpdate)
            document.addEventListener('mouseenter', this.onMouseUpdate)
        }

        onMouseUpdate = (event) => {
            this.setState({
                x: event.pageX,
                y: event.pageY
            })
        }

        render() {
            const {x, y} = this.state

            return (
                <WrappedComponent x={x} y={y}/>
            )
        }

    }
}

const CardWithStyles = withStyles(cardStyles)(Card)
const PositionStyle = mousePosition(Position)

const Container = (props) => {
    const {classes, children, items} = props

    // get all Nav components to the left

    // get all Info components to the right

    // all the rest place them on middle

    return (
        <div className={classes.root}>
            <div className={classes.side}>
                <Typography variant='title'>
                    Left Nav
                    {children.filter(next => next.type === Nav)}
                </Typography>
            </div>
            <div className={classes.middle}>
                <Typography variant='title'>Content</Typography>
                {children.filter(next => next.type !== Nav && next.type !== Info)}
            </div>
            <div className={classes.side}>
                <Typography variant='title'>
                    Info Nav
                    {children.filter(next => next.type === Info)}
                </Typography>
            </div>
        </div>
    )
}

const ContainerWithStyles = withStyles(containerStyles)(Container)
class Assignment extends React.Component {

    render() {
        const {classes, section} = this.props
        return (
            <Fragment>
                <Typography variant={'heading'}>
                    {section.display}
                    <Divider/>
                </Typography>
                <Typography variant='title'>1. CV with styling</Typography>
                <Typography variant='p'>
                    Implement CV using CSS in JS (using classes). Change your components and style them. Bonus
                    points for those of you who separate components into their own files (within a folder)
                </Typography>
                <Typography variant='title'>2. React HOC assignments</Typography>
                <Typography variant='p'>
                    Using a HOC wrap the current component such that it shows the position of the mouse on page, by
                    providing x and y to the component below.
                </Typography>

                {/*<Position className={classes.div}/>*/}
                <PositionStyle/>

                {/* <Typography variant='p'>
          Using a HOC wrap the current component such that its resizable
        </Typography> */}

                <Resizable/>

                <Typography variant='title'>2. React Children API assignments</Typography>
                <Typography variant='p'>
                    Make the component below position elements to specific places
                </Typography>

                <ContainerWithStyles >
                    <Nav/>
                    <Info/>
                    <Info/>
                    <Nav/>
                    <Typography variant='p'>
                        More content which is not a nav nor an info
                    </Typography>
                    <Typography variant='p'>
                        More content which is not a nav nor an info
                    </Typography>
                </ContainerWithStyles>

                <Typography variant='p'>
                    When an item is dragged from the left side to the content, expand it. Do this using React
                    Children API
                </Typography>
                <CollapseDrag/>

                <Typography variant='p'>
                    Place the current cards in a grid view with specific columns, and specific margin
                </Typography>
                <GridContainer cols={5}>
                    <CardWithStyles title={"I'm placed within a grid"} style={{backgroundColor: 'red'}}/>
                    <CardWithStyles title={"I'm placed within a grid"}>
                    </CardWithStyles>
                    <CardWithStyles title={"I'm placed within a grid"}/>
                    <CardWithStyles title={"I'm placed within a grid"}/>
                    <CardWithStyles title={"I'm placed within a grid"}/>
                    <CardWithStyles title={"I'm placed within a grid"}/>
                    <CardWithStyles title={"I'm placed within a grid"}/>
                    <CardWithStyles title={"I'm placed within a grid"}/>
                    <CardWithStyles title={"I'm placed within a grid"}/>
                    <CardWithStyles title={"I'm placed within a grid"}/>
                    <CardWithStyles title={"I'm placed within a grid"}/>
                    <CardWithStyles title={"I'm placed within a grid"}/>
                    <CardWithStyles title={"I'm placed within a grid"}/>
                    <CardWithStyles title={"I'm placed within a grid"}/>
                    <CardWithStyles title={"I'm placed within a grid"}/>
                </GridContainer>
            </Fragment>
        )
    }
}

export default withStyles(styles)(Assignment)
