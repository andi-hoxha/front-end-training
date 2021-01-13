import React, {Component} from "react";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = () => ({
    checkList: {
        margin: 0,
        paddingLeft: '1.2rem',
        '& li': {
            position: 'relative',
            listStyleType: 'none',
            paddingLeft: '2.5rem',
            marginBottom: '0.5rem',
        },
        '& li:before': {
            content: '""',
            display: 'block',
            position: 'absolute',
            left: 0,
            top: '-2px',
            width: '5px',
            height: '11px',
            borderWidth: '0 2px 2px 0',
            borderStyle: 'solid',
            borderColor: '#00a8a8',
            transformOrigin: 'bottom left',
            transform: ' rotate(45deg)'
        },
    }

})

class TickList extends Component {

    render() {
        const {classes, skills = [], skillsType} = this.props
        return (
            <div>
                <h3>{skillsType}</h3>
                <ul className={classes.checkList}>
                    {skills.map((next, index) => {
                        return (
                            <li key={index}>{next}</li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default withStyles(styles)(TickList)