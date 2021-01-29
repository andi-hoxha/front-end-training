import React from "react";
import {Button, Dialog, DialogActions, DialogTitle, withStyles} from "@material-ui/core";

const styles = () => ({

})

const TransactionDialog = (props) => {
    const {classes, onClose} = props

    return (
            <Dialog
                fullWidth={true}
                maxWidth={"lg"}
                open={true}
                onClose={onClose}
                aria-labelledby="max-width-dialog-title"
            >
                <DialogTitle id="max-width-dialog-title">Optional sizes</DialogTitle>
                <DialogActions>
                    <Button onClick={onClose} color="primary">Close</Button>
                </DialogActions>
            </Dialog>
    )
}

export default withStyles(styles)(TransactionDialog);