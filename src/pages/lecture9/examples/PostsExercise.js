import { Card } from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import React, { Fragment } from "react";
import { API_URL } from 'Constants';
import Typography from "presentations/Typography";
import 'whatwg-fetch';

const styles = ({ typography }) => ({
    wrapper: {
        display: 'flex',
        flexFlow: 'row wrap'
    },
    card: {
        width: 200,
        height: 200,
        margin: 8,
        padding: 8
    }
  })

class Posts extends React.Component {
    state = {
        items: [],
        isLoading: false
    }

    componentDidMount() {
        setTimeout(this.loadPosts, 4000)
    }

    loadPosts = () => {
        this.setState({
            isLoading: true,
            message: ''
        })
        fetch(`${API_URL}/posts`)
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
                    items: response,
                })
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

    renderPost = (item, index) => {
        const { classes } = this.props
        return <Card className={classes.card} key={item.id}>
            <Typography variant='p'>
                {item.user}
            </Typography>

            <img src={item.avatar} />
        </Card>
    }

    render() {
        const { items, isLoading, message } = this.state
        const { classes } = this.props
        return <Fragment>
            {message && <Typography variant='p'>{message}</Typography>}
            <div className={classes.wrapper}>
                {items.map(this.renderPost)}
            </div>
            {isLoading && <Typography variant='p'>{"Loading!"}</Typography>}
        </Fragment>
    }
}

export default withStyles(styles)(Posts)

