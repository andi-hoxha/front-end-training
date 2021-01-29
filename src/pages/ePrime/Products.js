import React from "react";
import {Button, withStyles} from "@material-ui/core";
import ProductCard from "pages/ePrime/ProductCard";
import {connect} from "react-redux";
import ACTIONS from '../../reducers/shop/ShopActionTypes';


const styles = () => ({
    root: {
        display: 'flex',
        width: '100%',
        flexFlow: 'wrap',
        marginTop: 20,
        justifyContent: 'space-between',
        '& > * ': {
            marginBottom: 20
        }
    }
})

const Products = (props) => {
    const {classes, products, onAddToCart} = props
    console.log('PRODUCTS:' ,products)
    return (
        <div className={classes.root}>
            {products.map(item => {
                return (
                    <ProductCard
                        key={item.id}
                        productName={item.productName}
                        brandName={item.brandName}
                        type={item.type}
                        img={item.img}
                        price={item.price}
                        addCartClick={() => {
                            onAddToCart(item.id)
                        }}
                    />
                )
            })}
        </div>
    )
}


const mapStateToProps = state => {
    return {
        products: state.shop.shop.primeProducts
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onAddToCart: (id) => dispatch({type: ACTIONS.ADD_TO_CART, id: id})
    }
}


export default withStyles(styles)(connect(mapStateToProps,mapDispatchToProps)(Products));