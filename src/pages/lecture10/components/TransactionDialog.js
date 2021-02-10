import React, from "react";
import {
    Button, CircularProgress,
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
import noTransactions from "../../../assets/images/lecture10/No-transaction.png";


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
    dialogTitle: {
        display: 'flex',
        width: '100%',
        '& > *:first-child': {
            color: palette.leadColor,
            fontWeight: 'bold',
            marginRight: 10
        },
        '& > *': {
            fontSize: 20
        }
    },
    dashboard: {
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        '& > *:first-child': {
            width: 700,
            height: 400,
            objectFit: 'object-fit',
            boxShadow: 'none'
        }
    },
    main: {
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    loading: {
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        '& > *:first-child': {
            color: palette.leadColor
        }
    }
})


const TransactionDialog = (props) => {
    const {classes, onClose, transactions = {}, open = false, user = {}} = props
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
                {transactions.isLoading ?
                    <div className={classes.loading}>
                        <CircularProgress/>
                    </div>
                    :
                    <div>
                        {(!transactions.isLoading && transactions.items.length === 0) ?
                            <div className={classes.dashboard}>
                                <img src={noTransactions} alt=""/>
                                <h3>This user does not have any transaction yet!</h3>
                            </div> :
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
                                            {transactions.items.map((item, index) => {
                                                return (
                                                    <TableRow key={`item-${index}`} hover={true}>
                                                        <TableCell align="center">{item.product}</TableCell>
                                                        <TableCell align="center">{item.category}</TableCell>
                                                        <TableCell align="center">{item.subCategory}</TableCell>
                                                        <TableCell align="center">{item.quantity}</TableCell>
                                                        <TableCell align="center">${item.price}</TableCell>
                                                        <TableCell
                                                            align="center">${(item.quantity * item.price)}</TableCell>
                                                    </TableRow>
                                                );
                                            })}
                                        </TableBody>
                                    </Table>
                                </div>
                                <TransactionsDashboard/>
                            </div>
                        }
                    </div>
                }
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