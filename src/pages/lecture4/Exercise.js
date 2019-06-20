/**
 * Created by LeutrimNeziri on 09/04/2019.
 */
import withStyles from "@material-ui/core/styles/withStyles";
import Divider from "presentations/Divider";
import Typography from "presentations/Typography";
import React, { Fragment } from "react";

import { 
  randomValuesOfLength,
  randomPositiveValues,
  randomWordsOfLength,
  randomGroupsOfLength
} from 'utils/DataGenerator'
import { TextField, FormControlLabel, Checkbox } from "@material-ui/core";
import { uniqueValues } from "utils/DataUtilities";

const styles = ({ typography, size }) => ({
  content: {
    width: '100%',
    display: 'flex',
    flexFlow: 'row wrap',
    alignItems: 'flex-start'
  },
  search: {
    width: '100%',
  }
})

const groups = uniqueValues(randomGroupsOfLength(5))
// ["Developer", "Loop"]
const words = randomWordsOfLength(50)
const values = randomPositiveValues(50)

const items = values.map((value, index) => ({ group: groups[index % groups.length], word: words[index % words.length], value, inStock: index % 5 === 0 }))
/*
[{
  group: '',
  word: '',
  value: 43,
  inStock: false
}]
*/
const grouped = groups.map(group => {
  return {
    group,
    children: items.filter(next => next.group === group)
  }
})

const Card = (props) => {
  return (
    <div style={{
      background: 'white', 
      borderRadius: 8, 
      width: 320, 
      height: 240, 
      display: 'flex', 
      flexFlow: 'column wrap',
      margin: 8,
      padding: 16}}>
      <div style={{fontSize: 16, fontWeight: 'bold', width: '100%'}}>
        {props.title}
      </div>
      <div style={{flex: 1, width: '100%', overflowY: 'auto'}}>
        {props.children}
      </div>
    </div>
  )
}

class Exercise extends React.Component {

  constructor (props) {
    super (props)
    this.state = {
      items: grouped,
      search: '',
      inStock: false
    }
  }
  onValueChanged = (event) => {
    this.setState({
      search: event.target.value
    })
  }

  onToggle = () => {
    this.setState((prevState) => ({
      inStock: !prevState.inStock
    }))
  }

  render() {
    const { classes, section } = this.props
    const { items, search, inStock } = this.state

    const filtered = items
    .map(item => {
      return {
        ...item,
        children: item.children
          .filter(child => {
            return child.word.includes(search)
          }).filter(child => {
            return !inStock || child.inStock === inStock
          })
      }
    }).filter(next => {
      return next.children.length > 0
    })
    
    
    return (
      <Fragment>
        <Typography variant={'heading'}>
          {section.display}
          <Typography variant='p'>
            In this section, we are going to do an exercise following the concepts that we learned in the previous sections/lectures.
          </Typography>
          <Divider />
        </Typography>
        <div className={classes.content}>
        <TextField fullWidth onChange={this.onValueChanged} label="Search" value={search} />
        <FormControlLabel onChange={this.onToggle} style={{width: '100%'}} control={
          <Checkbox checked={inStock} />
        } label="In Stock"/>
        {filtered.map((item, index) => {
          return <Card title={item.group} key={index}>
            {item.children.map((next, index) => {
              return <div key={`child-${index}`} style={{padding: 4, paddingRight: 8, width: '100%', display: 'flex', justifyContent: 'space-between', flexFlow: 'row wrap'}}>
                <div>Word: {next.word}</div>
                <div>{next.value} {next.inStock ? 'In Stock' : 'Sold Out'}</div>
              </div>
            })}
          </Card>
        })}
        </div>
      </Fragment>
    )
  }
}

export default withStyles(styles)(Exercise)
