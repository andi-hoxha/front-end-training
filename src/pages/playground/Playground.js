/**
 * Created by LeutrimNeziri on 09/04/2019.
 */
import withStyles from "@material-ui/core/styles/withStyles";
import Divider from "presentations/Divider";
import Typography from "presentations/Typography";
import React, { Fragment } from "react";
import Counter from "pages/playground/container/Counter";
import UsersExample from "pages/playground/container/UsersExample";
import {API_URL} from "Constants";
import {Button} from "@material-ui/core";
const styles = ({ typography }) => ({
  root: {},
})

class Playground extends React.Component {

    state = {
        isLoading:false,
        message:''
    }

    loadTransactions = () => {
        this.setState({
            isLoading: true,
            message: '',
            transactions:[]
        })
        fetch('http://5cdde1216f4437001467a3c8.mockapi.io/api/users/6/transactions')
            .then((response) => {
                    // check the HTTP status code if it was sucessfull
                    if (response.status === 200) {
                        return response.json()
                    }
                    throw {
                        code: response.status,
                        message: response.statusText
                    }
                }
            ).then((response) => {
            this.setState({
                transactions:response
            })
            console.log(response)
        }, (error) => {
            console.log('error', error)
            this.setState({
                message: error.message
            })
        }).then(() => {
            this.setState({
                isLoading: false
            })
        })
    }

    onLoadClick = () => {
        this.loadTransactions()
    }

  render() {
    const { classes } = this.props
    return (
      <Fragment>
        <Typography variant={'heading'}>
          Playground
          <Typography>This will be a page dedicated for experiments and fooling around. Do what ever you need right here, use the playground folder at the project to create more files for whatever reason.</Typography>
          <Divider />
        </Typography>
        {/*<Counter/>*/}
        {/*<br/>*/}
        <UsersExample />
        <Button onClick={this.onLoadClick}>Load Transactions</Button>
        <Button onClick={() => console.log('state',this.state)}>Load State</Button>
      </Fragment>
    )
  }
}

export default withStyles(styles)(Playground)
