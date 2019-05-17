/**
 * Created by LeutrimNeziri on 30/03/2019.
 */
import withStyles from "@material-ui/core/styles/withStyles";
import Content from 'anatomy/Content';
import { PAGES } from 'Constants';
import Home from 'pages/Home';
import Playground from "pages/playground/Playground";
import Support from "pages/support/Support";
import React from "react";
import routes from 'utils/Routes';
import Lecture1 from 'pages/lecture1/Lecture1';
import Lecture2 from "pages/lecture2/Lecture2";
import Lecture3 from "pages/lecture3/Lecture3";
import Lecture4 from "pages/lecture4/Lecture4";
import Lecture5 from "pages/lecture5/Lecture5";
import Lecture7 from "pages/lecture7/Lecture7";
import Lecture8 from "pages/lecture8/Lecture8";
import Lecture9 from "pages/lecture9/Lecture9";

const styles = ({typography}) => ({
  root: {}
})

class Factory extends React.Component {

  constructor (props) {
    super(props)

    this.contentRef = React.createRef();
  }

  componentDidMount () {
    this.scrollToDiv()
  }

  componentDidUpdate (prevProps, prevState) {

    const {match: {params: {id = ''} = {}} = {}} = this.props
    const {match: {params: {id: nextId = ''} = {}} = {}} = prevProps

    if (id !== nextId) {
      this.scrollToDiv()
    }
  }

  scrollToDiv() {
    const {match: {params: { id = ''} = {}} = {}} = this.props
    const element = document.getElementById(id)
    const content = document.getElementById('content')
    if (!element || !content) {
      content.scrollTo(0, 0)
      return
    }
    content.scrollTo(0, element.offsetTop - 100)
  }

  reducer = (children, parents, breadcrumbs, section) => {
    if (!children) {
      return breadcrumbs
    }
    return children.reduce((breadcrumbs, next) => {
      breadcrumbs = this.reducer(next.children, [...parents, next], breadcrumbs, section)
      if (next.id === section) {
        return [...breadcrumbs, ...parents, next]
      }
      return breadcrumbs
    }, breadcrumbs)
  }

  renderSections = (breadcrumbs) => {
    const {match, match: {params: {id = ''} = {}} = {}, location} = this.props

    let page = breadcrumbs[0]
    switch (page.id) {
      case PAGES.LECTURE_1.ID:
        return <Lecture1 breadcrumbs={breadcrumbs} />
      case PAGES.LECTURE_2.ID:
        return <Lecture2 breadcrumbs={breadcrumbs} />
      case PAGES.LECTURE_3.ID:
        return <Lecture3 breadcrumbs={breadcrumbs} />
      case PAGES.LECTURE_4.ID:
        return <Lecture4 breadcrumbs={breadcrumbs} />
      case PAGES.LECTURE_5.ID:
        return <Lecture5 breadcrumbs={breadcrumbs} location={location} match={match}/>
      case PAGES.LECTURE_7.ID:
        return <Lecture7 breadcrumbs={breadcrumbs} />
      case PAGES.LECTURE_8.ID:
        return <Lecture8 breadcrumbs={breadcrumbs} />
      case PAGES.LECTURE_9.ID:
        return <Lecture9 breadcrumbs={breadcrumbs} />
      case PAGES.SUPPORT.ID:
        return <Support breadcrumbs={breadcrumbs} />
      case PAGES.PLAYGROUND:
        return <Playground page={page} />
      default:
        return <Home/>
    }
  }


  render() {
    const {classes, ...other} = this.props
    const {match: {params: {id = PAGES.HOME} = {}} = {}} = this.props
    const breadcrumbs = this.reducer(routes, [], [], id)
    return (
      <Content breadcrumbs={breadcrumbs} {...other}>
        {this.renderSections(breadcrumbs)}
      </Content>
    )
  }
}

export default withStyles(styles)(Factory)
