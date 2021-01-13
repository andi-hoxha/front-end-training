import React, {Component} from "react";
import ProfileImg from "pages/lecture7/components/ProfileImg";
import MyInfo from "pages/lecture7/components/MyInfo";
import EduPreview from "pages/lecture7/components/EduPreview";
import SkillsPreview from "pages/lecture7/components/SkillsPreview";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = () => ({
    leftSide: {
        display: 'flex',
        flexDirection: 'column',
        width: 'inherit',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: '#fffcf5'
    },
    leftContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: 'fit-content',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e0e1e5',
        fontFamily: 'M PLUS Rounded 1c'
    },
    image: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '250px',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

class LeftSide extends Component {

    render() {
        const {classes, state = {}} = this.props
        return (
            <div className={classes.leftSide}>
                <div className={classes.leftContainer}>
                    <div className={classes.image}>
                        <ProfileImg state={state}/>
                    </div>
                    <MyInfo state={state}/>
                    <EduPreview state={state}/>
                    <SkillsPreview state={state}/>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(LeftSide)
