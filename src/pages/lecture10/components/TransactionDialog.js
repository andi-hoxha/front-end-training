import React from "react";
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Table, TableBody, TableCell,
    TableHead, TableRow,
    withStyles
} from "@material-ui/core";
import TransactionsDashboard from "pages/lecture10/components/TransactionsDashboard";
import {connect} from "react-redux";


const styles = ({palette}) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        flexWrap: 'wrap'
    },
    table: {
        marginBottom: 50,
        overflow: 'auto',
        maxHeight: 250,
        border: '1px solid #b0b4b5'
    },
    dialogTitle:{
        display:'flex',
        width:'100%',
        '& > *:first-child':{
            color:palette.leadColor,
            fontWeight:'bold',
            marginRight:10
        },
        '& > *':{
            fontSize:20
        }
    }
})


const TransactionDialog = (props) => {
    const {classes, onClose, transactions = [], open = false, user = {}} = props
    const columns = ['Product', 'Category', 'SubCategory', 'Quantity', 'Price', 'Total']
    const fullName = user.name.concat(" ", user.lastName)

    return (
        <Dialog
            fullWidth={true}
            maxWidth={"lg"}
            open={open}
            onClose={onClose}
            scroll="paper"
            aria-labelledby="max-width-dialog-title"
        >
            <DialogTitle id="max-width-dialog-title">{
                <div className={classes.dialogTitle}>
                    <h5>{fullName}</h5>
                    <h5> / Transactions</h5>
                </div>
            }</DialogTitle>
            <DialogContent>
                <div className={classes.root}>
                    <div className={classes.table}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    {columns.map((column, index) => (
                                        <TableCell
                                            key={index}
                                            align="center"
                                            style={{fontWeight: 'bold', color: 'black'}}
                                        >
                                            {column}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {transactions.map((item, index) => {
                                    return (
                                        <TableRow key={`item-${index}`} hover={true}>
                                            <TableCell align="center">{item.product}</TableCell>
                                            <TableCell align="center">{item.category}</TableCell>
                                            <TableCell align="center">{item.subCategory}</TableCell>
                                            <TableCell align="center">{item.quantity}</TableCell>
                                            <TableCell align="center">${item.price}</TableCell>
                                            <TableCell align="center">${(item.quantity * item.price)}</TableCell>
                                        </TableRow>
                                    );
                                })}
                            </TableBody>
                        </Table>
                    </div>
                    {/*Transactions Dashboard below*/}
                    <TransactionsDashboard/>
                </div>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="primary">Close</Button>
            </DialogActions>
        </Dialog>
    )
}

const mapToStateProps = (state) => ({
    transactions: state.userTransactions.transactions
})

export default withStyles(styles)(connect(mapToStateProps)(TransactionDialog));