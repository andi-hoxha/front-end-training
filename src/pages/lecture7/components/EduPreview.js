import React, {Component} from "react";
import Divider2 from "pages/lecture7/components/Divider2";
import * as moment from "moment";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = () => ({
    education: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: 'auto',
        justifyContent: 'flex-start',
        '& > *': {
            marginLeft: 50
        }
    },
    educationBox: {
        marginTop: '10px',
        '& > *': {
            marginTop: 7,
            marginBottom: 5,
        }
    }
})


class EduPreview extends Component {

    render() {
        const {classes, state} = this.props
        return (
            <div className={classes.education}>
                <h2>EDUCATION</h2>
                <Divider2 width={120}/>
                {state.education.map((next, index) => {
                    return (
                        <div key={index} className={classes.educationBox}>
                            <h3>{next.degree}/ {next.major}</h3>
                            <h4>{next.university}</h4>
                            <h4>{moment(next.startDate).format("MMM Do YY")} - {moment(next.endDate).format("MMM Do YY")}</h4>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default withStyles(styles)(EduPreview)
