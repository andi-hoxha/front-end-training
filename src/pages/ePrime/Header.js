import React, {Component} from "react";
import {Avatar, Badge, Button, IconButton, withStyles} from "@material-ui/core";
import ShoppingCartSharpIcon from '@material-ui/icons/ShoppingCartSharp';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import {withRouter} from "react-router-dom";
import {Link, NavLink, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import ACTIONS from "reducers/shop/ShopActionTypes";

const styles = () => ({
    root: {
        width: 'inherit'
    },
    header: {
        display: 'flex',
        flexGrow: 1,
        backgroundColor: '#086c9e',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 70,
        '& h1:first-child': {
            marginLeft: 45,
            color: '#f5f6fa',
            fontSize: 35
        }
    },
    content: {
        display: 'flex',
        alignItems: 'center',
        '& > *': {
            marginRight: 20,
            display: 'flex',
            justifyContent: 'space-between'
        },
        '& > *:last-child': {
            marginLeft: 40,
            marginRight: 30
        }
    },
    right: {
        alignItems: 'center',
        '& > *:first-child': {
            marginRight: 10
        },
        '& > *:second-child': {
            marginRight: 10
        }
    }
})


const Header = (props) => {
    const {classes, loggedInUser, logOut, history, cart} = props
    const logoutTrigger = () => {
        logOut()
        history.push('/lecture/ePrime/login')
    }
    const cartIconClicked = () => {
        history.push('/lecture/ePrime/cartPreview')
    }
    const avatar = () => {
        return (
            <div className={classes.right}>
                    <Link to="/lecture/ePrime/cartPreview">
                        <IconButton aria-label="add to cart" onClick={cartIconClicked}>
                            <Badge color="secondary" badgeContent={cart.length}>
                            <ShoppingCartSharpIcon style={{color: '#f5f6fa'}}/>
                            </Badge>
                        </IconButton>
                    </Link>
                <Avatar style={{marginRight: 10}}>AH</Avatar>
                <Button variant="contained" onClick={logoutTrigger}>Log Out</Button>
            </div>
        )
    }

    const signIn = () => {
        return (
            <div className={classes.right}>
                <Link to="/lecture/ePrime/register" style={{textDecoration: 'none'}}><Button
                    variant="contained">Register</Button></Link>
                <Link to="/lecture/ePrime/login" style={{textDecoration: 'none'}}><Button variant="contained">Sign
                    In</Button></Link>
                <Button style={{display: 'none'}}>A</Button>
            </div>
        )
    }

    return (
        <div className={classes.header}>
            <h1>PRIME</h1>
            <div className={classes.content}>
                <Link to="/lecture/ePrime" style={{textDecoration: 'none'}}><Button
                    variant="contained">Home</Button></Link>
                {!loggedInUser ? null : <Link to="/lecture/ePrime/products" style={{textDecoration: 'none'}}>
                    <Button variant="contained">Products</Button>
                </Link>}
                {!loggedInUser ? null : <Link to="/lecture/ePrime/checkout" style={{textDecoration: 'none'}}>
                    <Button variant="contained">Checkout</Button>
                </Link>}
                <Button variant="contained">Contact</Button>
                {loggedInUser ? avatar() : signIn()}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        cart: state.shop.shop.cart,
        loggedInUser: state.shop.shop.user
    }
};

const mapDispatchToProps = dispatch => {
    return {
        logOut: () => dispatch({type: ACTIONS.LOGOUT})
    }
}

export default withRouter(withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Header)));