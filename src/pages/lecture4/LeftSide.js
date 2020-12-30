import React,{Component} from "react";
import "./Style/Cv.css";
import ReactRoundedImage from "react-rounded-image";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import LanguageSharpIcon from "@material-ui/icons/LanguageSharp";
import HomeIcon from "@material-ui/icons/Home";
import Birthday from '@material-ui/icons/CakeOutlined';
import * as moment from "moment";

class LeftSide extends Component{
    constructor(props) {
        super(props);

    }

    render() {
        const {state} = this.props;
        console.log('Dataaa',new Date(state.startDate).toDateString())
        return (
            <div className="leftSide">
                <div className="leftContainer">
                    <div className="image">
                        <ReactRoundedImage image={state.image} roundedSize="0" imageWidth="180"
                                           imageHeight="180"/>
                    </div>
                    <div className="contact">
                        <h2>CONTACT</h2>
                        <span className="divider" style={{width: 120}}/>
                        <div className="contact-info">
                            <Birthday className="contact-icons"/>
                            <h3>{moment(state.birthDate).format("MMM Do YY")}</h3>
                        </div>
                        <div className="contact-info">
                            <PhoneIcon className="contact-icons"/>
                            <h3>{state.phoneNumber}</h3>
                        </div>
                        <div className="contact-info">
                            <EmailIcon className="contact-icons"/>
                            <h3>{state.email}</h3>
                        </div>
                        <div className="contact-info">
                            <LanguageSharpIcon className="contact-icons"/>
                            <h3>{state.web}</h3>
                        </div>
                        <div className="contact-info">
                            <HomeIcon className="contact-icons"/>
                            <h3>{state.country}, {state.city}</h3>
                        </div>
                    </div>
                    <div className="education">
                        <h2>EDUCATION</h2>
                        <span className="divider" style={{width: 120}}/>
                        {state.education.map((next, index) => {
                            return (
                                <div key={index} className="education-box">
                                    <h3>{next.degree}/ {next.major}</h3>
                                    <h4>{next.university}</h4>
                                    <h4>{moment(next.startDate).format("MMM Do YY")} - {moment(next.endDate).format("MMM Do YY")}</h4>
                                </div>
                            )
                        })}
                    </div>
                    <div className="skills">
                        <h2>SKILLS</h2>
                        <span className="divider" style={{width: 140}}/>
                        <div className="skills-box">
                            <h3>Soft Skills</h3>
                            <ul className="check-list">
                                {state.softSkills.map((next, index) => {
                                    return (
                                        <li key={index}>{next}</li>
                                    )
                                })}
                            </ul>
                        </div>
                        <div className="skills-box">
                            <h3>Hard Skills</h3>
                            <ul className="check-list">
                                {state.hardSkills.map((next, index) => {
                                    return (
                                        <li key={index}>{next}</li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default LeftSide;