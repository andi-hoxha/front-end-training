/**
 * Created by LeutrimNeziri on 09/04/2019.
 */
import withStyles from "@material-ui/core/styles/withStyles";
import Divider from "presentations/Divider";
import PageLink from "presentations/rows/nav/PageLink";
import Typography from "presentations/Typography";
import React, {Fragment} from "react";
import CvFormBuilder from "pages/lecture7/components/CvFormBuilder";
import {Button, Grid} from "@material-ui/core";
import CvPreview from "pages/lecture7/components/CvPreview";

const styles = ({typography}) => ({
    root: {},
})

class Assignment extends React.Component {

    state = {
        cvPreview: false,
        firstName: '',
        lastName: '',
        birthDate: Date.now(),
        phoneNumber: '',
        email: '',
        web: '',
        country: '',
        city: '',
        street: '',
        zipCode: '',
        education: [{degree: '', university: '', major: '', startDate: Date.now(), endDate: Date.now()}],
        softSkills: [],
        hardSkills: [],
        image: 'https://t4.ftcdn.net/jpg/03/46/93/61/360_F_346936114_RaxE6OQogebgAWTalE1myseY1Hbb5qPM.jpg'
    }

    onValueChanged = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({
            [name]: value,
        });
    }

    onDateChange = (date, name) => {
        this.setState({
            [name]: date
        });
    }

    onChangeValue = (event, index, datePickerName) => {
        let name;
        let value;
        if (datePickerName === 'startDate' || datePickerName === 'endDate') {
            name = datePickerName
            value = event;
        } else {
            name = event.target.name
            value = event.target.value
        }
        let edu = this.state.education[index];
        edu[name] = value;
        this.setState(prevState => ({
            education: [...prevState.education]
        }));
    }

    deleteEducation = (index) => {
        const edu = [...this.state.education]
        edu.splice(index, 1)
        this.setState({
            education: edu
        });
    }

    addComponent = () => {
        console.log('here')
        const newEducation = {university: '', major: '', startDate: Date.now(), endDate: Date.now()}
        this.setState(prevState => ({
            education: [...prevState.education, newEducation]
        }));
    }

    handleUploadClick = (event) => {
        let file = event.target.files[0];
        const reader = new FileReader();
        let url = reader.readAsDataURL(file);

        reader.onloadend = function (e) {
            this.setState({
                image: [reader.result]
            });
        }.bind(this);
    };
    buildCvClicked = () => {
        this.setState({
            cvPreview: !this.state.cvPreview
        })
        console.log("State",this.state)
    }

    render() {
        const {classes, section} = this.props

        return (
            <Fragment>
                <Typography variant={'heading'}>
                    {section.display}
                    <Divider/>
                </Typography>
                <Typography variant='p'>
                    Build a CV Component composed by small Components(as some of you did in previous lecture), and if we
                    pass a prop inverted
                    everything should appear as inverted (eg: if you were using black color for text and white for bg's
                    invert those colors)
                    <br/>
                    Implement CV using CSS in JS (using classes)
                </Typography>
                <Typography variant='title'>Happy Coding</Typography>

                <CvFormBuilder state={this.state}
                               onValueChanged={this.onValueChanged}
                               onDateChange={this.onDateChange}
                               onChangeValue={this.onChangeValue}
                               deleteEdu={this.deleteEducation}
                               addEdu={this.addComponent}
                               onUploadClick={this.handleUploadClick}/>
                <Grid container direction={"row"} justify={"flex-end"} alignItems={"flex-end"} style={{marginTop: 30}}>
                    <Button variant="outlined" color="primary" size={"large"} onClick={this.buildCvClicked}>Build CV</Button>
                </Grid>
                {this.state.cvPreview ? <CvPreview state={this.state} /> : null}
            </Fragment>
        )
    }
}

export default withStyles(styles)(Assignment)
