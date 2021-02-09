import React from "react";
import {withStyles} from "@material-ui/core";
import {connect} from "react-redux";
import Typography from "presentations/Typography";
import Chart from "presentations/Chart";
import TransactionService from "pages/lecture10/components/services/TransactionService";

const styles = ({size}) => ({
    root:{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        flexWrap: 'wrap'
    },
    graph: {
        display: 'flex',
        flex: 1,
        width: '100%',
        height: 'auto'
    },
    card: {
        backgroundColor: 'white',
        width: `calc(32% - ${size.spacing * 3}px)`,
        margin: size.spacing,
        height: 450,
        padding: 8,
        display: 'flex',
        flexFlow: 'column wrap',
        alignItems: 'flex-start'
    },
    title: {
        display: 'flex',
        justifyContent: 'center'
    },
    charts: {
        display: 'flex',
        justifyContent: 'space-between'
    }
})

 const Card = ({options, title, titleClass, graphClass, ...other}) => {
    return <div {...other}>
        <Typography variant={'title'} className={titleClass}>{title}</Typography>
        <Chart className={graphClass} options={options}/>
    </div>
}


const TransactionsDashboard = (props) => {

    const {classes,transactions} = props

    const cardProps = {
        titleClass: classes.title,
        className: classes.card,
        graphClass: classes.graph
    }

    const service = TransactionService(transactions)

    return (
        <div className={classes.root}>
            <div className={classes.charts}>
                <Card options={service.totalSalesOverCategory()} {...cardProps} title={'The Total Sales Over Category'}/>
                <Card options={service.totalSalesOverSubCategories()} {...cardProps} title={'The Total Sales Over Sub Category'}/>
                <Card options={service.totalSalesOverProducts()} {...cardProps} title={'The Total Sales Over Products'}/>
            </div>
            <div className={classes.charts}>
               <Card options={service.topFiveSoldProducts()} {...cardProps} title={'Top 5 Most Sold Products Based On Quantity'}/>
                <Card options={service.topFiveSoldOverCategories()} {...cardProps} title={'Top 5 Most Sold Categories'}/>
                <Card options={service.averageQuantityBetweenCategories()} {...cardProps} title={'The Average Quantity Within Categories'}/>
            </div>
        </div>
    )
}

const mapToStateProps = (state) => ({
    transactions: state.userTransactions.transactions.items
})

export default withStyles(styles)(connect(mapToStateProps)(TransactionsDashboard))