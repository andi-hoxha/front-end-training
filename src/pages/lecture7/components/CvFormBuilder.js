import React, { Component } from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import Divider from "presentations/Divider";
import PersonalInfo from "pages/lecture7/components/PersonalInfo";
import ContactInfo from "pages/lecture7/components/ContactInfo";
import EduForm from "pages/lecture7/components/EduForm";
import SkillsAndImg from "pages/lecture7/components/SkillsAndImg";

const styles = () => ({
  formContainer: {
    width: '100%',
    paddingBottom: 10,
    boxShadow: '0 8px 6px -3px rgba(0, 0, 0, 0.17)'
  }
})


class CvFormBuilder extends Component {
  render () {
    const {classes, state = {}, onValueChanged, onDateChange, onChangeValue, deleteEdu, addEdu, onUploadClick} = this.props
    return (
      <div className={classes.formContainer}>
        <h2>Build your personal CV</h2>
        <Divider/>
        <br/>
        <PersonalInfo state={state} changed={onValueChanged} handleDateChange={onDateChange}/>
        <ContactInfo changed={onValueChanged}/>
        <EduForm state={state} changed={onChangeValue} deleteEdu={deleteEdu} addEdu={addEdu}/>
        <SkillsAndImg state={state} onUploadClick={onUploadClick} changed={onValueChanged}/>
      </div>
    )
  }
}

export default withStyles(styles)(CvFormBuilder)
