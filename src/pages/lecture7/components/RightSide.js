import React, {Component} from "react";
import CvHeader from "pages/lecture7/components/CvHeader";
import AboutMe from "pages/lecture7/components/AboutMe";
import WorkingExperience from "pages/lecture7/components/WorkingExperience";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = () => ({
    rightContainer: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 6,
        justifyContent: 'flex-start',
        marginLeft: '40px',
        backgroundColor: '#fffcf5',
        alignItems: 'center',
        fontFamily: 'M PLUS Rounded 1c',
        '& p':{
            fontSize: 16,
            fontWeight:'bold'
        }
    }
})

class RightSide extends Component {

    render() {
        const {classes, state} = this.props
        const fullName = state.firstName.concat(" ", state.lastName)


        return (
            <div className={classes.rightContainer}>
                <CvHeader fullName={fullName}/>
                <AboutMe />
                <WorkingExperience />
            </div>
        )
    }
}

export default withStyles(styles)(RightSide)

