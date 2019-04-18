/**
 * Created by LeutrimNeziri on 09/04/2019.
 */
import withStyles from "@material-ui/core/styles/withStyles";
import StructureImage from "assets/images/lecture2/structure.png";
import Divider from "presentations/Divider";
import Typography from "presentations/Typography";
import React, { Fragment } from "react";
import Chart from "presentations/Chart";
import SimpleLink from "presentations/rows/SimpleLink";

const styles = ({ typography, size }) => ({
  root: {},
  graphs: {
    display: 'flex',
    flexFlow: 'row wrap',
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    width: '100%'
  },
  card: {
    backgroundColor: 'white',
    width: `calc(32% - ${size.spacing * 2}px)`,
    margin: size.spacing,
    height: 420,
    padding: 8,
    display: 'flex',
    flexFlow: 'column wrap',
    alignItems: 'flex-start'
  },
  graph: {
    display: 'flex',
    flex: 1,
    width: '100%',
    height: 'auto'
  }
})

const Card = ({options, title, titleClass, graphClass, ...other}) => {
  return <div {...other}>
    <Typography variant={'title'} className={titleClass}>{title}</Typography>
    <Chart className={graphClass} options={options} />
  </div>
}

const valuesIntoAxisGraphOfType = (series) => {
  return {
    xAxis: {
      type: 'value'
    },
    yAxis: {
      type: 'value'
    },
    series
  };
}

const valuesIntoScatter = (values, type) => {
  return valuesIntoAxisGraphOfType([{
    data: values,
    type: 'scatter'
  }])
}

const valuesIntoLine = (values) => {
  return valuesIntoAxisGraphOfType([{
    data: values,
    type: 'line'
  }])
}

const doubleLineFunction = (values, values2) => {
  return valuesIntoAxisGraphOfType([{
    data: values,
    type: 'line'
  }, {
    data: values2,
    type: 'line'
  }])
}

const valuesIntoPie = (values) => {
  return {
    series: [{
      data: values.map(next => { 
        return {
          name: next[0], value: next[1]
        }
      }),
      type: 'pie'
    }]
  };
}

/**
 * Generates random values of length, can be positive or negative
 * @param {int} length 
 */
const randomValuesOfLength = (length) => {
  return randomPositiveValues(length).map(next => next - 50)
}

/**
 * Generates only positive values of length
 * @param {int} length 
 */
const randomPositiveValues = (length) => {
  return Array(length).fill(null).map(() => Math.abs(Math.random() * 100))
}

/**
 * Generates random words of a given length
 * @param {int} length 
 */
const randomWordsOfLength = (length) => {
  const words = ['Tell', 'Make', 'Pie', 'Peanut', 'Aunt', 'User', 'Contrast', 'Yellow', 'Ou My!', 'Jelly', 'Work', 'Mama', 'Queen', 'Knight']
  return Array(length).fill(null).map((next, index) => words[Math.floor(Math.random() * words.length)])
}

/**
 * Generates random groups of a certain length
 * @param {int} length 
 */
const randomGroupsOfLength = (length) => {
  const words = ['Developers', 'Designers', 'Magicians']
  return Array(length).fill(null).map((next, index) => words[Math.floor(Math.random() * words.length)])
}

const axisGraphDefaultOptions = {
  xAxis: {
    type: 'value'
  },
  yAxis: {
    type: 'value'
  }
}
const GRAPH_TYPES = {
  LINE: 'line',
  SCATTER: 'scatter',
  BAR: 'bar',
  PIE: 'pie',
  TREEMAP: 'treemap'
}
class Assignments extends React.Component {

  /**
   * Returns given a length, an array that contains that many elements of the form
   * {
   *  name: 'Random Word',
   *  value: 'Random Value'
   * }
   * @param {length} length 
   * @param {boolean} positive = false
   */
  randomCategoryData (length, positive = false) {
    const values = positive ? randomPositiveValues(length) : randomValuesOfLength(length)
    const words = randomWordsOfLength(length)
    const groups = randomGroupsOfLength(length)
    return words.map((next, index) => { return { name: next, group: groups[index], value: values[index]} })
  }

  /**
   * Function as Line: y = x * 2
   */
  function1 = () => {
    const values = randomValuesOfLength(30)
    return {
     ...axisGraphDefaultOptions,
      series: [
        {
          data: values.map(next => [next, next * 2]),
          type: GRAPH_TYPES.LINE
        }
      ]
    }
  }

  /**
   * Function as Scatter y = square root of the absolute value of ((x ^ 2) + (x * 4))
   */
  function2 = () => {
    const values = randomValuesOfLength(30)
    return {
     ...axisGraphDefaultOptions,
      series: [
        {
          data: values.map(next => [next, next * 2]),
          type: GRAPH_TYPES.SCATTER
        }
      ]
    }
  }

  /**
   * Function y = If 3^2 - x^2 > 0 than square root of (3^2 - x^2). If 3^2 - x^2 < 0 then - square root of absolute value of (3^2 - x^2)
   */
  function3 = () => {
    const values = randomValuesOfLength(30)
    return {
     ...axisGraphDefaultOptions,
      series: [
        {
          data: values.map(next => [next, next * 2]),
          type: GRAPH_TYPES.SCATTER
        }
      ]
    }
  }

  /**
   * Function as Line: y = sin(x)
   */
  function4 = () => {
    const values = randomValuesOfLength(30)
    return {
     ...axisGraphDefaultOptions,
      series: [
        {
          data: values.map(next => [next, next * 2]),
          type: GRAPH_TYPES.SCATTER
        }
      ]
    }
  }

  /**
   * Function as Line: y = cos(x)
   */
  function5 = () => {
    const values = randomValuesOfLength(30)
    return {
     ...axisGraphDefaultOptions,
      series: [
        {
          data: values.map(next => [next, next * 2]),
          type: GRAPH_TYPES.SCATTER
        }
      ]
    }
  }

  /**
   * 2 Line Functions displayed together, one for Sin and one for Cos, check only the series option to include two of them
   * Check previous functions
   */
  function6 = () => {
    const values = randomValuesOfLength(30)
    return {
     ...axisGraphDefaultOptions,
      series: [
        {
          data: values.map(next => [next, next * 2]),
          type: GRAPH_TYPES.SCATTER
        }
      ]
    }
  }

  /**
   * I want to see the top 4 performing categories, given the randomCategoryData, the value is an indicator of the performance
   */
  function7 = () => {
    const data = this.randomCategoryData(8, true)
    return {
      name: 'Tree',
      series: [
        {
          data,
          type: GRAPH_TYPES.TREEMAP
        }
      ]
    }
  }

  /**
   * Calculate the average within the groups now, and show that here. Check the random Category data on how it generates those
   */
  function8 = () => {
    const data = this.randomCategoryData(8, true)
    return {
      series: [
        {
          data,
          type: GRAPH_TYPES.PIE
        }
      ]
    }
  }

  /**
   * Calculate the values such that they are comulative, each subsequent is sumed with the total so far!
   */
  function9 = () => {
    const data = this.randomCategoryData(8)
    return {
      xAxis: {
        type: 'category',
        data: data.map(next => next.name)
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          data,
          type: GRAPH_TYPES.BAR
        }
      ]
    }
  }

  render() {
    const { classes } = this.props

    const cardProps = {
      titleClass: classes.title,
      className: classes.card,
      graphClass: classes.graph
    }
    return (
      <Fragment>
        <Typography variant={'heading'}>
            Home Assignments
            <Divider />
        </Typography>
        <Typography variant='p'>
          Title: "Implements and visualise Mathematical Functions:"<br/>
          Description: "Implement the graph functions according to definition"<br/>
          For more examples on available graphs take a look at: <SimpleLink href="https://ecomfe.github.io/echarts-examples/public/index.html">Echarts Demo</SimpleLink><br/>
          If you want to implement a new chart, then refer to the options: <SimpleLink href="https://ecomfe.github.io/echarts-doc/public/en/option.html">Echarts Graph Options</SimpleLink><br/>
        </Typography>
        <div className={classes.graphs}>
          <Card options={this.function1()} {...cardProps} title={'Function as Line: y = x * 2'} />
          <Card options={this.function2()} {...cardProps} title={'Function as Scatter y = square root of the absolute value of ((x ^ 2) + (x * 4))'} />
          <Card options={this.function3()} {...cardProps} title={'Function y = If 3^2 - x^2 > 0 than square root of (3^2 - x^2). If 3^2 - x^2 < 0 then - square root of absolute value of (3^2 - x^2)'} />
          <Card options={this.function4()} {...cardProps} title={'Function as Line: y = sin(x)'} />
          <Card options={this.function5()} {...cardProps} title={'Function as Line: y = cos(x)'} />
          <Card options={this.function6()} {...cardProps} title={'2 Line Functions displayed together, one for Sin and one for Cos, check only the series option to include two of them'} />
          <Card options={this.function7()} {...cardProps} title={'Filter out top 4 most common words, based on their random generated value'} />
          <Card options={this.function8()} {...cardProps} title={'The Average within Groups'} />
          <Card options={this.function9()} {...cardProps} title={'Calculate the values such that they are comulative, each subsequent is sumed with the total so far!'} />
        </div>
      </Fragment>
    )
  }
}

export default withStyles(styles)(Assignments)
