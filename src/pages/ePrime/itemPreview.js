import React from "react";
import {IconButton, withStyles} from "@material-ui/core";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import ACTIONS from "reducers/shop/ShopActionTypes";
import {connect} from "react-redux";

const styles = () => ({
    item: {
        display: 'flex',
        width: '100%',
        backgroundColor:'#dcdde1',
    },
    product: {
        display: 'flex',
        width: '65%',
        padding: '10px 0',
        alignItems: 'center',
        position:'static',
        '& > *:first-child': {
            height: 150,
            width: 150,
            borderRadius: '50%',
            marginLeft: 20
        },
        '& > *:nth-child(2)':{
            marginLeft:20,
            paddingRight:20
        },
        border:'1px solid black'
    },
    productInfo: {
        display: 'flex',
        flexDirection: 'column',
    },
    remove:{
        display:'flex',
        justifyContent: 'center',
        alignItems:'center',
        position:'static',
        width:'7%',
        border:'1px solid black'
    },
    price:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        position:'static',
        width:'8%',
        border:'1px solid black'
    },
    qty: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'static',
        width: '12%',
        border: '1px solid black'
    },
    total:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        position:'static',
        width:'8%',
        border: '1px solid black'
    }
})

const ItemPreview = (props) => {
    const {classes,productName,desc,qty,price,img,id,onAddQty,onDecrementQty,onRemoveFromCart,stock} = props
    return (
        <div className={classes.item}>
            <div className={classes.product}>
                <img src={img} alt={''}/>
                <div className={classes.productInfo}>
                    <h3>{productName}</h3>
                    <p>{desc}</p>
                </div>
            </div>
            <div className={classes.remove}>
                <IconButton onClick={() => onRemoveFromCart(id)}>
                    <HighlightOffIcon fontSize={'large'}/>
                </IconButton>
            </div>
            <div className={classes.price}>
                <h4>${price}</h4>
            </div>
            <div className={classes.qty}>
                <IconButton
                    disabled={qty >= stock}
                    onClick={() => onAddQty(id)}>
                    <AddCircleIcon/></IconButton>
                <h4>{qty}</h4>
                <IconButton
                    disabled={qty <= 0}
                    onClick={() => onDecrementQty(id)}>
                    <RemoveCircleIcon/></IconButton>
            </div>
            <div className={classes.total}>
                <h3>${(price * qty).toFixed(2)}</h3>
            </div>
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
        onRemoveFromCart: (id) => dispatch({type:ACTIONS.REMOVE_FROM_CART,id:id}),
    }
}

export default withStyles(styles)(connect(mapStateToProps,mapDispatchToProps)(ItemPreview))