import React from "react";
import {
    Avatar,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    IconButton,
    Typography,
    withStyles
} from "@material-ui/core";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PaymentIcon from '@material-ui/icons/Payment';

const styles = () => ({
    root:{
        maxWidth: 345,
        borderRadius:'1.0rem',
        '&:hover':{
            boxShadow: '5px 5px 20px'
        }
    },
    media:{
        height:0,
        paddingTop:'56.25%'
    }
})

const ProductCard = (props) => {
    const {classes,productName = '',brandName = '',type = '',img = '',price = 0,addCartClick} = props

    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe">{brandName.charAt(0).toUpperCase()}</Avatar>
                }
                title={productName}
                subheader={type}
            />
            <CardMedia
                className={classes.media}
                image={img}
                title={productName}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    This impressive paella is a perfect party dish and a fun meal to cook together with your
                    guests. Add 1 cup of frozen peas along with the mussels, if you like.
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to cart" onClick={addCartClick}>
                    <ShoppingCartIcon/>
                </IconButton>
                <IconButton aria-label="checkout">
                    <PaymentIcon/>
                </IconButton>
                <Typography variant="h5" gutterBottom>${price}</Typography>
            </CardActions>
        </Card>
    )
}

export default withStyles(styles)(ProductCard);