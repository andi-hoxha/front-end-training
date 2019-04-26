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
  randomGroupsOfLength,
  uniqueValues
} from 'utils/DataGenerator'

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
const words = randomWordsOfLength(50)
const values = randomPositiveValues(50)

const items = values.map((value, index) => ({ group: groups[index % groups.length], word: words[index % words.length], value, inStock: index % 5 === 0 }))

const grouped = groups.map(group => {
  return {
    group,
    children: items.filter(next => next.group === group)
  }
})

class Exercise extends React.Component {

  render() {
    const { classes, section } = this.props
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
        </div>
      </Fragment>
    )
  }
}

export default withStyles(styles)(Exercise)
