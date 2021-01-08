import React, {Component} from "react";
import Divider from "presentations/Divider";
import {Grid} from "@material-ui/core";
import Skills from "pages/lecture7/components/Skills";
import ProfilePicForm from "pages/lecture7/components/ProfilePicForm";

const softSkills = ['Communication', 'Teamwork', 'Adaptability', 'Problem-Solving', 'Creativity', 'Work Ethic', 'Interpersonal Skills', 'Time Management', 'Leadership', 'Attention to Detail'];
const hardSkills = ['Technical Skills', 'Computer Skills', 'Analytical Skills', 'Marketing Skills', 'Presentation Skills', 'Management Skills', 'Writing Skills', 'Language Skills', 'Design Skills']


class SkillsAndImg extends Component {

    render() {
        const {state = {},onUploadClick,changed} = this.props

        return (
            <div>
                <h2>Skills & Profile Image</h2>
                <Divider/>
                <Grid container direction={"row"} justify={"space-between"} spacing={3}>
                    <Skills state={state} changed={changed} name="softSkills" skillType={softSkills} skillTypeName="Soft Skills"/>
                    <Skills state={state} changed={changed} name="hardSkills" skillType={hardSkills} skillTypeName="Hard Skills"/>
                    <Grid item xs={6}>
                        <ProfilePicForm state={state} onUploadClick={onUploadClick}/>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default SkillsAndImg