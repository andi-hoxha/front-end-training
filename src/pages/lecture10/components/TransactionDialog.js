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


const styles = () => ({
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
    }
})


const TransactionDialog = (props) => {
    const {classes, onClose, transactions = [], open = false} = props
    const columns = ['Product', 'Category', 'SubCategory', 'Quantity', 'Price', 'Total']

    return (
        <Dialog
            fullWidth={true}
            maxWidth={"lg"}
            open={open}
            onClose={onClose}
            scroll="paper"
            aria-labelledby="max-width-dialog-title"
        >
            <DialogTitle id="max-width-dialog-title">Transactions</DialogTitle>
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
                    {/*Dashboard below*/}
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