import React from "react";
import Header from "pages/ePrime/Header";
import {Redirect, Route, Switch} from 'react-router-dom'
import {withStyles} from "@material-ui/core";
import MainPage from "pages/ePrime/MainPage";
import Login from "pages/ePrime/Login";
import Register from "pages/ePrime/Register";
import {connect} from "react-redux";
import Products from "pages/ePrime/Products";
import Preview from "pages/ePrime/Preview";

const styles = () => ({
    root:{
        width:'inherit'
    }
})


class Home extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {classes,loggedInUser} = this.props
        console.log('Logged In User :',loggedInUser)
        return (
            <div className={classes.root}>
                <Header/>
                <Switch>
                    <Route exact path="/lecture/ePrime" component={MainPage} />
                    <Route path="/lecture/ePrime/login" component={Login} />
                    <Route path="/lecture/ePrime/register" component={Register} />
                    <Route path="/lecture/ePrime/cartPreview" component={Preview} />
                    <Route
                        render={(props) => {
                              //do the check here
                            if (loggedInUser !== undefined) {
                                return (
                                   <Products/>
                                )
                            }
                            return <MainPage {...props}/>
                        }}
                    />
                </Switch>

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        loggedInUser:state.shop.shop.user
    }
};


export default withStyles(styles)(connect(mapStateToProps)(Home));