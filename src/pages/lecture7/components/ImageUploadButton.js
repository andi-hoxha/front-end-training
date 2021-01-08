import React, {Component} from "react";
import {Fab, Grid} from "@material-ui/core";
import AddPhotoIcon from "@material-ui/icons/AddPhotoAlternate";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = () => ({
    input: {
        display: 'none'
    },
    uploadImg: {
        marginLeft: 20
    },
    uploadButton: {
        color: '#3f51b5',
        margin: 10
    }
})


class ImageUploadButton extends Component {


    render() {
        const {classes,uploadClick} = this.props
        return (
            <div>
                <input
                    accept="image/*"
                    id="contained-button-file"
                    multiple
                    type="file"
                    // style={styles.input}
                    className={classes.input}
                    onChange={uploadClick}
                />
                <label htmlFor="contained-button-file" className={classes.uploadImg}>
                    <Fab component="span" className={classes.uploadButton}>
                        <AddPhotoIcon/>
                    </Fab>
                </label>
            </div>
        )
    }
}

export default withStyles(styles)(ImageUploadButton)