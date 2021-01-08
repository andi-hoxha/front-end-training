import React, {Component} from "react";
import {Grid} from "@material-ui/core";
import ImageUploadButton from "pages/lecture7/components/ImageUploadButton";
import ProfileImg from "pages/lecture7/components/ProfileImg";

class ProfilePicForm extends Component {

    render() {
        const {state = {}, onUploadClick} = this.props
        return (
            <Grid container direction={"row"} alignItems={"flex-start"} justify={"space-evenly"}>
                <Grid item xs={2}>
                    <ImageUploadButton state={state} uploadClick={onUploadClick}/>
                </Grid>
                <Grid item xs={4}>
                    <ProfileImg state={state}/>
                </Grid>
            </Grid>
        )
    }
}

export default ProfilePicForm