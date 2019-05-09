/**
 * Created by LeutrimNeziri on 09/04/2019.
 */
import withStyles from "@material-ui/core/styles/withStyles";
import Divider from "presentations/Divider";
import Code from "presentations/Code";
import PageLink from "presentations/rows/nav/PageLink";
import IconButton from '@material-ui/core/IconButton'
import Typography from "presentations/Typography";
import React, { Fragment } from "react";
import 'pages/lecture7/link.css'
const styles = ({ typography }) => ({
  root: {},
})


const cssLink = `
  //main.css
  link{
    background-color: '#fff';
    width: 400;
    color: #999;
    :hover{
      color: #000
    }
  }
`

const hoverState = `
import main.css
class Link extends React.Component{

  render(){
    const {to} = this.props
    return(
      <a className='link'
      href={to}>
        Go to google
      </a>
    )
  }
}
`

const hoverStateInline = `
const linkStyle = {
  backgroundColor: '#fff',
  width: 400,
  color: '#999'
}
class Link extends React.Component{

  state = {
    hover: false
  }

  onMouseOver = event => {
    event.preventDefault()
    this.setState({hover:true})
  }

  
  onMouseOut = event => {
    event.preventDefault()
    this.setState({hover:false})
  }

  render(){
    const {to} = this.props
    const {hover} = this.state
    return(
      <a 
      style={{
        ...linkStyle,
        color: hover ? '#000' : linkStyle.color
      }} 
      onMouseOver={this.onMouseOver}
      onMouseOut={this.onMouseOut}
      href={to}
      >
        Go to google
      </a>
    )
  }
}
`
const noSelectors = `
import IconButton from '@material-ui/core/IconButton'

const styles = {
  link:{
    backgroundColor: '#fff',
    width: 400,
  },
  labelStyle: {
    color: '#999',
    oveflow: 'hidden',
    textOveflow: 'ellipsis',
    whiteSpace: 'no-wrap'
  }
  iconStyle:{
    marginLeft: 8
  }
}

class Link extends React.Component{

  render(){
    const {to} = this.props
    return(
      <a style={styles.link} href={to}>
        <label style={styles.label}>
          Go to google
        </label>
        <IconButton style={styles.icon}>
          <Add/>
        </IconButton>
      </a>
    )
  }
}`

const withSelectorsStyleSheed  = `
//link.css
  .link{
    backgroundColor: #fff;
    width: 400;
  }
  .labelStyle {
    color: #999;
    oveflow: hidden;
    text-oveflow: ellipsis;
    white-space: no-wrap;
  }
  .link svg{
    margin-right: 8px;
  }
`

const withSelectors = `
import link.css
const LinkWithArrows = props =>{
  const {to,children} = props
  return(
    <a className='link' href={to}>
      <label className='label'>
        {children}
      </label>
      <IconButton>
        <Add/>
      </IconButton>
    </a>
  )
}`

const LinkWithArrows = props =>{
  const {to,children} = props
  return(
    <a className='link' href={to}>
      <label className='label'>
      {children}
      </label>
    </a>
  )
}
const beforeArrowCss  = `
//link.css
.link{
  background-color: #fff;
  width: 400;
}
.link::before{
  content: '>';
  font-size: 18px;
  color: red;
  margin: 0 10px;
}
.link::after{
  content: '<';
  font-size: 18px;
  color: red;
  margin: 0 10px;
}
.labelStyle {
  color: #999;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
`
const beforeArrow = `
import link.css
const LinkWithArrows = props =>{
  const {to,children} = props
  return(
    <a className='link' href={to}>
      <label className='label'>
      {children}
      </label>
    </a>
  )
}`

class VanillaCss extends React.Component {
  render() {
    const { classes, section } = this.props
    return (
      <Fragment>
        <Typography variant={'heading'}>
          {section.display}
          <Divider />
        </Typography>
        <Typography variant='p'>
          Vanilla CSS means writing css completly manually. 
          <br />
          As we can imagine this is not very handy for styling React Components let's demo this and look at pros and cons.
          <br />
          Note: Before we start let's keep in mind that every PreProcessor or React Hoc or whatever task runner we use it will 
          compile the code as vanilla css.
        </Typography>
        
        <Typography variant='title'>Use of Pseud Classes</Typography>
        <Typography variant='p'>
          Some of the pros for this styling approach are that we can use the pseudoElements and pseudoClasses. <br/>
          Let's take a look to the component that we did in the previous section and rewrite that using vanilla css.
        <Code>
          {cssLink}
        </Code>
        <Code>
          {hoverState}
        </Code>
        </Typography>
        <Typography>
          Look the component above how simple it becomes when using vanilla css, there is no need to add listeners to detect
          if it is on hover or not. <br/>
          
          When using the inline styling the component looked like this.
          <Code>{hoverStateInline}</Code>
        </Typography>
        <Typography variant="title">Use of Selectors</Typography>
        <Typography variant='p'>
          When using vanilla css we can use CSS Selectors and we are able to give some styling properties to children, 
          siblings, also we can add some extra properties when the children is the last one eg.
          <code>.parent .child:first-child {`{...someStyle}`}</code>.
        </Typography>

        <Typography variant="p">Let's give a try and convert the compoent below using vanilla CSS</Typography>
        <Typography variant="title">Using inline styling</Typography>
        <Code>
          {noSelectors}
        </Code>
        <Typography variant="title">Using Vanilla CSS</Typography>
        <Code>
          {withSelectorsStyleSheed}
        </Code>
        <Code>
          {withSelectors}
        </Code>
        
        <Typography variant="p">So as you can see there is no need to specify an extra classname for svg(IconButton)
        but instead we add style from parent link
        </Typography>

        <Typography variant="title">Use of Pseud Elements</Typography>
        <Typography variant="p">
        A CSS pseudo-element is a keyword added to a selector that lets you style a specific part of the selected element(s).
        For Example: <br/>
        let's say that we have a link and we want to give an extra arrow before and after text of the link.
        <Code>
          {beforeArrowCss}
        </Code>
        <Code>
          {beforeArrow}
        </Code>
        <LinkWithArrows>{'I have arrows'}</LinkWithArrows>
        </Typography>
      </Fragment>
    )
  }
}

export default withStyles(styles)(VanillaCss)
