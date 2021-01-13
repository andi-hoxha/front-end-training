import React, {Component} from "react";
import Divider3 from "pages/lecture7/components/Divider 3";
import AboutMe from "pages/lecture7/components/AboutMe";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = () => ({
    header: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#494949',
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%',
        marginBottom: ' 7%',
        marginTop: '35px',
        boxShadow: '0 8px 6px -3px rgba(0, 0, 0, 0.25)'
    },
    headerContent: {
        display: 'flex',
        flexDirection: 'column',
        width: '75%',
        alignItems: 'center',
        fontSize: 'large',
        fontFamily: 'M PLUS Rounded 1c, sans-serif',
        color: '#cacaca',
        '& h1':{
            letterSpacing:3
        }
    }
})

const CvHeader = (props) =>  {

        const {classes,fullName} = props
        return (
            <div className={classes.header}>
                <div className={classes.headerContent}>
                    <h1>{fullName.toUpperCase()}</h1>
                    <Divider3 width={300}/>
                    <h2>Software Engineer @ OPrime</h2>
                </div>
            </div>
        )
}

export default withStyles(styles)(CvHeader)