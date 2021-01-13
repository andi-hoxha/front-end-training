import React, {Component} from "react";
import Divider2 from "pages/lecture7/components/Divider2";
import TickList from "pages/lecture7/components/TickList";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = () => ({
    skills: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: 'auto',
        justifyContent: 'flex-start',
        '& > *':{
            marginLeft: 50
        }
    }
})

class SkillsPreview extends Component {

    render() {
        const {classes,state} = this.props
        const softSkills = state.softSkills || []
        const hardSkills = state.hardSkills || []
        return (
            <div className={classes.skills}>
                <h2>SKILLS</h2>
                <Divider2 width={120}/>
                <TickList skills={softSkills} skillsType={'Soft Skills'}/>
                <TickList skills={hardSkills} skillsType={'Hard Skills'}/>
            </div>
        )
    }
}

export default withStyles(styles)(SkillsPreview)