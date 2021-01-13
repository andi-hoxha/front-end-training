import React, {Component} from "react";
import Birthday from "@material-ui/icons/CakeOutlined";
import * as moment from "moment";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import LanguageSharpIcon from "@material-ui/icons/LanguageSharp";
import Divider2 from "pages/lecture7/components/Divider2";
import withStyles from "@material-ui/core/styles/withStyles";
import HomeIcon from "@material-ui/icons/Home";


const styles = () => ({
    info: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        justifyContent: 'flex-start',
        '& > *':{
            marginLeft: 50
        }
    },

    contactInfo: {
        display: 'flex',
        flexFlow: 'row nowrap',
        alignItems: 'center'
    },
    contactIcons: {
        margin: '5px 10px'
    }
});

const MyInfo = (props) => {

        const {classes,state} = props

        return (
            <div className={classes.info}>
                <h2>CONTACT</h2>
                <Divider2 width={'120'}/>
                <div className={classes.contactInfo}>
                    <Birthday className={classes.contactIcons}/>
                    <h3>{moment(state.birthDate).format("MMM Do YY")}</h3>
                </div>
                <div className={classes.contactInfo}>
                    <PhoneIcon className={classes.contactIcons}/>
                    <h3>{state.phoneNumber}</h3>
                </div>
                <div className={classes.contactInfo}>
                    <EmailIcon className={classes.contactIcons}/>
                    <h3>{state.email}</h3>
                </div>
                <div className={classes.contactInfo}>
                    <LanguageSharpIcon className={classes.contactIcons}/>
                    <h3>{state.web}</h3>
                </div>
                <div className={classes.contactInfo}>
                    <HomeIcon className={classes.contactIcons}/>
                    <h3>{state.country}, {state.city}</h3>
                </div>
            </div>
        )
}

export default withStyles(styles)(MyInfo)