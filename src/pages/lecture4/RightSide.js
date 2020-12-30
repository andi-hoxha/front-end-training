import React, {Component} from "react";
import "./Style/Cv.css";

class RightSide extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        const {state} = this.props;
        const fullName = state.firstName.concat(" ",state.lastName)
        return (
            <div className="rightContainer">
                <div className="header">
                    <div className="header-box">
                        <h1>{fullName.toUpperCase()}</h1>
                        <span className="divider2"/>
                        <h2>Software Engineer @ OPrime</h2>
                    </div>
                </div>
                <div className="profile">
                    <h2>PROFILE</h2>
                    <span className="divider" style={{width: "100%"}}/>
                    <p>I am a nice fun and friendly person.I am an enthusiastic, self-motivated,responsible
                        and
                        hard working person. I am a mature team worker
                        and adaptable to all challenging situations.I am able to work well both in a team
                        environment as well as using own initiative.I am able to work well under
                        pressure and adhere to strict deadlines.I have creative mind and always up for new
                        challenges.
                        During these years I've been faced with a lot of difficulties in my life, but never
                        gave
                        up.In my perspective each challenge is presented as a goal,
                        which motivates me to achieve them as soon as possible.
                    </p>
                </div>
                <div className="working-experience">
                    <h2>WORKING EXPERIENCE</h2>
                    <span className="divider" style={{width: "100%"}}/>
                    <div className="experience">
                        <div className="job-title">
                            <h3>iOS Developer - Internship</h3>
                            <h4>Rolling Rabbits / 2017</h4>
                        </div>
                        <div className="job-desc">
                            <p>While working at Rolling Rabbits I have improved my professional skills over mobile development.
                                I had to develop mobile applications for mobile and tablets (iPhone & iPad).We have used Swift 3+ for
                                developing iOS apps. <br/>
                                Responsibilities:
                                <ul className="check-list">
                                    <li>Designing and building mobile applications for Apple's iOS platform</li>
                                    <li>Collaborating with the design team to define app features</li>
                                    <li>Ensuring quality and performance of application to specifications</li>
                                    <li>Identifying potential problems and resolving application bottlenecks</li>
                                    <li>Fixing application bugs before final release</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                    <div className="experience">
                        <div className="job-title">
                            <h3>Full Stack Web Developer</h3>
                            <h4>UCX / 05-2019 - 01/10/2019</h4>
                        </div>
                        <div className="job-desc">
                            <p>At UCX our priority was to develop a platform in which clients can build their own e-Commerce
                                and analyse their consume of cloud and other storages. We had quite enough clients such as AWS,
                                Google Cloud,Wasabi,Alibaba Cloud, Digital Ocean etc.
                                So I have been working on Market Place with Market Team which we used to develop and maintain different
                                features.
                                If we talk about technologies that we used to develop this platform, I am going to mention just the main
                                technologies such as: Java Spring Boot for the server side, Angular Js for the client side and PostgreSQL
                                for the database where keep all the data. <br/>
                                Responsibilities:
                                <ul className="check-list">
                                    <li>Developing front end website architecture</li>
                                    <li>Designing user interactions on web pages</li>
                                    <li>Developing server side</li>
                                    <li>Creating servers and databases for functionality</li>
                                    <li>Ensuring cross-platform optimization for mobile phones</li>
                                    <li>Designing and developing APIs</li>
                                    <li>Meeting both technical and consumer needs</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default RightSide;