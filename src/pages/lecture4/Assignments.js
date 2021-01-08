/**
 * Created by LeutrimNeziri on 09/04/2019.
 */
import withStyles from "@material-ui/core/styles/withStyles";
import Divider from "presentations/Divider";
import Typography from "presentations/Typography";
import React, {Fragment} from "react";
import Code from "presentations/Code";
import {DatePicker} from '@material-ui/pickers';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import LanguageSharpIcon from '@material-ui/icons/LanguageSharp';
import HomeIcon from '@material-ui/icons/Home';
import RemoveIcon from '@material-ui/icons/BackspaceRounded';
import AddIcon from '@material-ui/icons/Add';
import AddPhotoIcon from '@material-ui/icons/AddPhotoAlternate';
import ReactRoundedImage from "react-rounded-image";
import './Style/Cv.css';

import Education from './Education';

import {
    Button,
    Checkbox, Fab,
    FormControl,
    Grid, Input, InputAdornment,
    InputLabel, ListItemText,
    MenuItem, OutlinedInput,
    Select,
    TextField
} from "@material-ui/core";
import LeftSide from "pages/lecture4/LeftSide";
import RightSide from "pages/lecture4/RightSide";
import CvPreview from "pages/lecture4/CvPreview";


const styles = {
    cvPreview: {
        display: 'flex',
        width: '100%',
        marginTop: 10,
        flexDirection: 'row'
    },
    formContainer: {
        width: '100%',
        paddingBottom: 10,
        boxShadow: '0 8px 6px -3px rgba(0, 0, 0, 0.17)'
    },
    large: {
        width: '100px',
        height: '50px'
    },
    selectForm: {
        height: '50px'
    },
    container: {
        display: 'flex',
        justifyContent: 'spacing-between',
        marginLeft: '30px'
    },
    paper: {
        height: 140,
        width: 100,
    },
    content: {
        width: '100%',
        display: 'flex',
        flexFlow: 'row wrap',
        alignItems: 'flex-start'
    },
    search: {
        width: '100%',
    },
    formControl: {
        margin: '10px 10px',
        minWidth: 120,
        maxWidth: 300
    },
    input: {
        display: 'none'
    },
    button: {
        color: '#3f51b5',
        margin: 10
    },
    uploadImg: {
        marginLeft: 20
    },
    image: {
        width: 250,
        height: 250,
        borderRadius: '100%'
    }
};


const cv = `{
  name: "Agon Lohaj",
  education: [
    {
      type: "Bachelor",
      from: moment("27-07-2013", "DD-MM-YYYY").format("MMMM Do YYYY")
      // more stuff
    }
  ],
  skills: [
    {
      type: "Music",
      name: "Drumming",
      level: 6 // 1-10
      // more stuff
    }
  ]
  // more stuff here
}`

const country = ['Albania', 'Kosovo', 'Macedonia', 'Serbia', 'Montenegro']
const city = ['Prishtina', 'Gjakova', 'Mitrovica', 'Ferizaj', 'Peja', 'Istog', 'Gjilan', 'Podujeva', 'Prizreni']
const softSkills = ['Communication', 'Teamwork', 'Adaptability', 'Problem-Solving', 'Creativity', 'Work Ethic', 'Interpersonal Skills', 'Time Management', 'Leadership', 'Attention to Detail'];
const hardSkills = ['Technical Skills', 'Computer Skills', 'Analytical Skills', 'Marketing Skills', 'Presentation Skills', 'Management Skills', 'Writing Skills', 'Language Skills', 'Design Skills']


class Assignments extends React.Component {

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
            [name]: value
        });
    }
    test = (event, index, datePickerName) => {
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
        console.log("STATE IS: ",this.state.education)
    }

    handleDateChange = (date, name) => {
        this.setState({
            [name]: date
        });
    }

    addComponent = () => {
        const newEducation = {university: '', major: '', startDate: Date.now(), endDate: Date.now()}
        this.setState(prevState => ({
            education: [...prevState.education, newEducation]
        }));
    }

    deleteEducation = (index) => {
        const edu = [...this.state.education]
        edu.splice(index, 1)
        this.setState({
            education: edu
        });
        console.log(index)
    }

    handleUploadClick = (event) => {
        var file = event.target.files[0];
        const reader = new FileReader();
        var url = reader.readAsDataURL(file);

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
    }

    render() {
        const {section} = this.props


        return (
            <Fragment>
                <Typography variant={'heading'}>
                    {section.display}
                    <Typography variant='p'>
                        Home Assignment
                    </Typography>
                    <Divider/>
                </Typography>
                <Typography variant='p'>
                    Title: "Implement my CV:"<br/>
                    Description: "Show the Education, Work Experience, Basic Information and other relevant information
                    for my curriculum vitae"<br/>
                    Model the information on an array, that would look kinda like this:
                    <Code>
                        {cv}
                    </Code>
                </Typography>
                <Typography variant='p'>
                    The implementation of this assignment will be done in this page. Check it out at
                    /src/pages/lecture4/Assignments.js:
                </Typography>

                {/* Your implementation starts here */}
                <div style={styles.formContainer}>
                    <h2>Build your personal CV</h2>
                    <Divider/>
                    <br/>
                    <h2>Personal Info</h2>
                    <Divider/>
                    <Grid container spacing={2} direction="row" justify={"space-between"}>
                        <Grid item xs={4}>
                            <TextField id="outlined-basic" label={'First Name'} variant="outlined"
                                       name='firstName' onChange={this.onValueChanged} style={{width: '100%'}}/>
                        </Grid>
                        <Grid item xs={4}>
                            <TextField id="outlined-basic" label={'Last Name'} variant="outlined"
                                       name="lastName" onChange={this.onValueChanged} style={{width: '100%'}}/>
                        </Grid>
                        <Grid item xs={3} sm={3}>
                            <DatePicker
                                fullWidth
                                disableFuture
                                openTo="year"
                                format="DD/MM/YYYY"
                                variant="inline"
                                inputVariant="outlined"
                                label="Date of birth"
                                views={["year", "month", "date"]}
                                value={this.state.birthDate}
                                autoOk
                                name="birthDate"
                                onChange={(date) => {
                                    this.handleDateChange(date, 'birthDate')
                                }}
                            />
                        </Grid>
                    </Grid>

                    <Grid container spacing={4} direction={"row"} justify={"space-between"} style={{marginTop: '50px'}}>
                        <Grid item xs={3}>
                            <InputLabel id="demo-simple-select-outlined-label">Country</InputLabel>
                            <Select fullWidth value={this.state.country}
                                    name="country"
                                    onChange={this.onValueChanged}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                {country.map(element => {
                                    return (
                                        <MenuItem value={element}>{element}</MenuItem>
                                    )
                                })}
                            </Select>
                        </Grid>
                        <Grid item xs={3}>
                            <InputLabel id="demo-simple-select-outlined-label">City</InputLabel>
                            <Select fullWidth value={this.state.city}
                                    name="city"
                                    onChange={this.onValueChanged}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                {city.map(element => {
                                    return (
                                        <MenuItem value={element}>{element}</MenuItem>
                                    )
                                })}
                            </Select>
                        </Grid>
                        <Grid item xs={3}>
                            <TextField id="outlined-basic" label={'Street'} variant="outlined" name="street"
                                       style={{width: '100%'}}/>
                        </Grid>
                        <Grid item xs={3}>
                            <TextField id="outlined-basic" label={'ZipCode'} variant="outlined" name="zipCode"
                                       style={{width: '100%'}}/>
                        </Grid>
                    </Grid>
                    <h2>Contact</h2>
                    <Divider/>
                    <Grid container spacing={1} direction={"row"} justify={"space-around"}>
                        <Grid item xs={3}>
                            <FormControl fullWidth variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-amount">Email</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-amount"
                                    name="email"
                                    onChange={this.onValueChanged}
                                    startAdornment={<InputAdornment position="start"><EmailIcon
                                        color={"primary"}/></InputAdornment>}
                                    labelWidth={60}
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={5}>
                            <FormControl fullWidth variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-amount">Web</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-amount"
                                    name="web"
                                    onChange={this.onValueChanged}
                                    startAdornment={<InputAdornment position="start"><LanguageSharpIcon
                                        color={"primary"}/></InputAdornment>}
                                    labelWidth={60}
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={3}>
                            <FormControl fullWidth variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-amount">Phone</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-amount"
                                    name="phoneNumber"
                                    onChange={this.onValueChanged}
                                    startAdornment={<InputAdornment position="start"><PhoneIcon
                                        color={"primary"}/></InputAdornment>}
                                    labelWidth={60}
                                />
                            </FormControl>
                        </Grid>
                    </Grid>
                    <h2>Education</h2>
                    <Divider/>
                    <Grid container direction={"row"}>
                        {this.state.education.map((el, index) => {
                            return (
                                <Education education={this.state.education}
                                           index={index}
                                           testChange={this.test}
                                           deleteClick={() => this.deleteEducation(index)}
                                />
                            )
                        })}
                        <Grid container direction={"row"} justify={"flex-end"} alignItems={"flex-end"}
                              style={{marginTop: '30px'}}>
                            <Fab color="primary" aria-label="add" onClick={this.addComponent}>
                                <AddIcon fontSize={"default"}/>
                            </Fab>
                        </Grid>
                    </Grid>
                    <h2>Skills & Profile Image</h2>
                    <Divider/>
                    <Grid container direction={"row"} justify={"space-between"} spacing={3}>
                        <Grid item xs={3}>
                            <InputLabel htmlFor="outlined-age-simple">
                                Soft Skills
                            </InputLabel>
                            <Select
                                fullWidth
                                id="demo-multiple-checkbox"
                                multiple
                                value={this.state.softSkills}
                                name="softSkills"
                                onChange={this.onValueChanged}
                                input={<OutlinedInput labelWidth={100} name="Soft Skills"/>}
                                renderValue={(selected) => selected.join(', ')}
                            >
                                {softSkills.map((name) => (
                                    <MenuItem key={name} value={name}>
                                        <Checkbox checked={this.state.softSkills.indexOf(name) > -1}/>
                                        <ListItemText primary={name}/>
                                    </MenuItem>
                                ))}
                            </Select>
                        </Grid>
                        <Grid item xs={3}>
                            <InputLabel htmlFor="outlined-age-simple">
                                Hard Skills
                            </InputLabel>
                            <Select
                                fullWidth
                                id="demo-multiple-checkbox"
                                multiple
                                value={this.state.hardSkills}
                                name="hardSkills"
                                onChange={this.onValueChanged}
                                input={<OutlinedInput labelWidth={100} name="Soft Skills"/>}
                                renderValue={(selected) => selected.join(', ')}
                            >
                                {hardSkills.map((name) => (
                                    <MenuItem key={name} value={name}>
                                        <Checkbox checked={this.state.hardSkills.indexOf(name) > -1}/>
                                        <ListItemText primary={name}/>
                                    </MenuItem>
                                ))}
                            </Select>
                        </Grid>
                        <Grid item xs={6}>
                            <Grid container direction={"row"} alignItems={"flex-start"} justify={"space-evenly"}>
                                <Grid item xs={2}>
                                    <input
                                        accept="image/*"
                                        id="contained-button-file"
                                        multiple
                                        type="file"
                                        style={styles.input}
                                        onChange={this.handleUploadClick}
                                    />
                                    <label htmlFor="contained-button-file" style={styles.uploadImg}>
                                        <Fab component="span" style={styles.button}>
                                            <AddPhotoIcon/>
                                        </Fab>
                                    </label>
                                </Grid>
                                <Grid item xs={4}>
                                    <ReactRoundedImage image={this.state.image} roundedSize="0" imageWidth="200"
                                                       imageHeight="200"/>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
                <Grid container direction={"row"} justify={"flex-end"} alignItems={"flex-end"} style={{marginTop: 30}}>
                    <Button variant="outlined" color="primary" size={"large"} onClick={this.buildCvClicked}>Build CV</Button>
                </Grid>
                {this.state.cvPreview ? <CvPreview state={this.state} /> : null}
            </Fragment>
        )
    }
}

export default withStyles(styles)(Assignments)
