import React,{Component} from "react";
import Divider from "presentations/Divider";
import {Fab, Grid} from "@material-ui/core";
import Education from "pages/lecture4/Education";
import AddIcon from "@material-ui/icons/Add";

class EduForm extends Component{
    //TODO: here is a testChange function which will trigger when changed props is called

    render() {
        const {state={},changed,deleteEdu,addEdu} = this.props
        const education = state.education || [{}]
        return (
            <div>
                <h2>Education</h2>
                <Divider/>
                <Grid container direction={"row"}>
                    {education.map((el, index) => {
                        return (
                            <Education education={education}
                                       index={index}
                                       testChange={changed}
                                       deleteClick={deleteEdu}
                            />
                        )
                    })}
                    <Grid container direction={"row"} justify={"flex-end"} alignItems={"flex-end"}
                          style={{marginTop: '30px'}}>
                        <Fab color="primary" aria-label="add" onClick={addEdu}>
                            <AddIcon fontSize={"default"}/>
                        </Fab>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default EduForm