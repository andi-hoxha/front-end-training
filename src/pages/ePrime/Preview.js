import React from "react";
import {IconButton, Typography, withStyles} from "@material-ui/core";
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import {connect} from "react-redux";
import ACTIONS from "reducers/shop/ShopActionTypes";
import ItemPreview from "pages/ePrime/itemPreview";

const styles = () => ({
    root: {
        display: 'flex',
        width: '100%',
        marginTop: 40,
        flexDirection: 'column'
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: '#dcdde1',
        flexGrow: 1,
        padding: '20px 0',
        '& > *:first-child': {
            marginLeft: 10
        },
        border:'1px solid black'
    },
    right: {
        display: 'flex',
        alignItems: 'center',
        marginRight: 5,
        '& > *:nth-child(1)': {
            marginRight: 60
        },
        '& > *:nth-child(2)': {
            marginRight: 50
        },
        '& > *:nth-child(3)': {
            marginRight: 20
        }
    }
})


const Preview = (props) => {
    const {classes,cart,products} = props

    return (
        <div className={classes.root}>
            <div className={classes.header}>
                <Typography variant="h6"> Products within the cart</Typography>
                <div className={classes.right}>
                    <Typography variant="h6"> Price </Typography>
                    <Typography variant="h6"> Quantity </Typography>
                    <Typography variant="h6"> Total </Typography>
                </div>
            </div>
            {cart.map(item => {
                return (
                    <ItemPreview key={item.id}
                                productName={item.productName}
                                 desc={item.type}
                                 price={item.price}
                                 qty={item.qty}
                                 img={item.img}
                    />
                )
            })}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        cart: state.shop.shop.cart,
        products:state.shop.shop.primeProducts
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onAddQty: (id) => dispatch({type: ACTIONS.INCREMENT_QTY, id: id}),
        onDecrementQty: (id) => dispatch({type: ACTIONS.DECREMENT_QTY, id: id}),
        onRemoveFromCart: (id) => dispatch({type:ACTIONS.REMOVE_FROM_CART,id:id})
    }
}


export default withStyles(styles)(connect(mapStateToProps,mapDispatchToProps)(Preview))