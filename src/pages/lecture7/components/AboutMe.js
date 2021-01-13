import React from "react";
import Divider2 from "pages/lecture7/components/Divider2";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = () => ({
    aboutMe: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    }
})

const AboutMe = (props) => {

    const {classes} = props

    return (
        <div className={classes.aboutMe}>
            <h2>PROFILE</h2>
            <Divider2 style={{width:'100%'}}/>
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
    )
}

export default withStyles(styles)(AboutMe)