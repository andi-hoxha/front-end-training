import React from "react";
import {Button, Card, CardContent, OutlinedInput, TextField, withStyles} from "@material-ui/core";
import nyc from './assets/nyc.jpg';
import sanFrancisco from './assets/sanfrancisco.jpg';
import america from './assets/America.jpg';
import Logo from "presentations/icons/Logo";
import LogoTextIcon from "presentations/icons/LogoTextIcon";
import {connect} from "react-redux";
import ACTIONS from '../../reducers/shop/ShopActionTypes';
const styles = () => ({
    root:{
        width:'100%',
        height:1000,
        backgroundImage:`url(${america})`,
        backgroundSize:'cover',
        backgroundRepeat:'no-repeat',
        opacity:0.9
    },
    card:{
        backgroundColor:'#ffffff',
        width:'25rem',
        height:'auto',
        marginLeft:100,
        borderRadius:'1.2rem',
        position:'absolute',
        marginTop:100,
        boxShadow: '5px 5px 20px'
    },
    logo:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        '& > *:first-child':{
            marginTop:30,
            marginBottom:8
        }
    },
    fields:{
        display: 'flex',
        flexDirection: 'column',
        '& > *:first-child':{
            marginTop: 60,
            marginBottom: 20
        }
    },
    loginBtn:{
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:40,
        paddingBottom:30,
        '& > *:first-child':{
            backgroundColor:'#45acd6',
            width:'50%',
            fontWeight:'bold'
        }
    }
})

class Login extends React.Component {

    state = {
        username:'',
        password:''
    }


    handleChange = (event) => {
        const {name,value} = event.target
        this.setState({
            [name]:value
        })
    }

    render() {
        const {classes,users,onLogin} = this.props
        console.log('Users',users)
        return (
            <div className={classes.root}>
                <Card className={classes.card}>
                    <CardContent>
                        <div className={classes.logo}>
                            <Logo style={{fontSize:'50px'}}/>
                            <LogoTextIcon style={{width:'100%',height:35}}/>
                        </div>
                        <div className={classes.fields}>
                            <TextField id="outlined-basic" label="Username" variant="outlined" name="username"  onChange={this.handleChange}/>
                            <TextField id="outlined-basic" label="Password" variant="outlined" name="password" type="password" onChange={this.handleChange}/>
                        </div>
                        <div className={classes.loginBtn}>
                        <Button variant="contained" onClick={() => {onLogin(this.state.username,this.state.password)}}>Login</Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        users:state.shop.shop.users
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onLogin : (username,password) => dispatch({type:ACTIONS.LOGIN,username:username,password:password})
    }
};


export default withStyles(styles)(connect(mapStateToProps,mapDispatchToProps)(Login))