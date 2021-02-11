import React from "react";
import {CircularProgress, Dialog, DialogContent, withStyles} from "@material-ui/core";

const styles = ({palette}) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    loading: {
        '& > *:first-child': {
            color: palette.leadColor
        }
    }
})

const LoadingDialog = (props) => {
    const {classes} = props

    return (
        <Dialog open={true}>
            <DialogContent>
                <div className={classes.root}>
                    <div className={classes.loading}>
                        <CircularProgress/>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default withStyles(styles)(LoadingDialog)