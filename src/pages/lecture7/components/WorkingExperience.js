import React from "react";
import Divider2 from "pages/lecture7/components/Divider2";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = () => ({
    workingExperience: {
        display: 'flex',
        flexDirection: ' column',
    },
    jobTitle: {
        marginTop: 10,
        '& > *': {
            margin: '3px 0'
        }
    },
    jobDesc: {
        '& ul': {
            marginTop: 10
        }
    },
    checkList: {
        margin: 0,
        paddingLeft: '1.2rem',
        '& li': {
            position: 'relative',
            listStyleType: 'none',
            paddingLeft: '2.5rem',
            marginBottom: '0.5rem',
        },
        '& li:before': {
            content: '""',
            display: 'block',
            position: 'absolute',
            left: 0,
            top: '-2px',
            width: '5px',
            height: '11px',
            borderWidth: '0 2px 2px 0',
            borderStyle: 'solid',
            borderColor: '#00a8a8',
            transformOrigin: 'bottom left',
            transform: ' rotate(45deg)'
        }
    }
})


const WorkingExperience = (props) => {
    const {classes} = props

    return (
        <div className={classes.workingExperience}>
            <h2>WORKING EXPERIENCE</h2>
            <Divider2 style={{width: '100%'}}/>
            <div className="experience">
                <div className={classes.jobTitle}>
                    <h3>iOS Developer - Internship</h3>
                    <h4>Rolling Rabbits / 2017</h4>
                </div>
                <div className={classes.jobDesc}>
                    <p>While working at Rolling Rabbits I have improved my professional skills over mobile development.
                        I had to develop mobile applications for mobile and tablets (iPhone & iPad).We have used Swift
                        3+ for
                        developing iOS apps. <br/>
                        Responsibilities:
                        <ul className={classes.checkList}>
                            <li>Designing and building mobile applications for Apple's iOS platform</li>
                            <li>Collaborating with the design team to define app features</li>
                            <li>Ensuring quality and performance of application to specifications</li>
                            <li>Identifying potential problems and resolving application bottlenecks</li>
                            <li>Fixing application bugs before final release</li>
                        </ul>
                    </p>
                </div>
            </div>
            <div className="experience">
                <div className={classes.jobTitle}>
                    <h3>Full Stack Web Developer</h3>
                    <h4>UCX / 05-2019 - 01/10/2019</h4>
                </div>
                <div className={classes.jobDesc}>
                    <p>At UCX our priority was to develop a platform in which clients can build their own e-Commerce
                        and analyse their consume of cloud and other storages. We had quite enough clients such as AWS,
                        Google Cloud,Wasabi,Alibaba Cloud, Digital Ocean etc.
                        So I have been working on Market Place with Market Team which we used to develop and maintain
                        different
                        features.
                        If we talk about technologies that we used to develop this platform, I am going to mention just
                        the main
                        technologies such as: Java Spring Boot for the server side, Angular Js for the client side and
                        PostgreSQL
                        for the database where keep all the data. <br/>
                        Responsibilities:
                        <ul className={classes.checkList}>
                            <li>Developing front end website architecture</li>
                            <li>Designing user interactions on web pages</li>
                            <li>Developing server side</li>
                            <li>Creating servers and databases for functionality</li>
                            <li>Ensuring cross-platform optimization for mobile phones</li>
                            <li>Designing and developing APIs</li>
                            <li>Meeting both technical and consumer needs</li>
                        </ul>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default withStyles(styles)(WorkingExperience)