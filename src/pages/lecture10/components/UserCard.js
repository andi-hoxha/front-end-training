import React from "react";
import {
    Avatar, Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Collapse,
    IconButton,
    Typography,
    withStyles
} from "@material-ui/core";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import * as moment from "moment";
import {DEFAULT_IMG} from 'Constants';
import clsx from "clsx";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import {connect} from "react-redux";
import {getAllTransactions} from "reducers/assignment/TransactionActions";
import TodayIcon from '@material-ui/icons/Today';
import WorkIcon from '@material-ui/icons/Work';
import EmailIcon from '@material-ui/icons/Email';

const styles = ({palette,size}) => ({
    root: {
        backgroundColor: 'white',
        width: 330,
        margin: size.spacing,
        padding: 8,
        display: 'flex',
        flexFlow: 'column wrap',
        alignItems: 'flex-start',
        borderRadius: '1.0rem',
        '&:hover': {
            boxShadow: '5px 5px 20px rgba(0,0,0,0.5)',
            cursor: 'pointer'
        }
    },
    header: {
        display: 'flex',
        width: '100%',
        '& > *:nth-child(2)': {
            '& > *:first-child': {
                fontWeight: 'bold'
            }
        }
    },
    subheader: {
        display: 'flex',
        '& > *:first-child': {
            display: 'flex',
            alignItems: 'center',
            marginRight: 5
        },
        '& > *:second-child': {
            display: 'flex',
            alignItems: 'center'
        }
    },
    icons: {
        display: 'flex',
        flexDirection: 'column'
    },
    large: {
        width: 100,
        height: 100,
        boxShadow: '0 0 8px rgba(0, 0, 0, .8)'
    },
    expand: {
        marginLeft: 'auto',
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    userInfo: {
        display: 'flex',
        flexDirection: 'column',
        '& > *:last-child': {
            marginTop: 10
        }
    },
    info: {
        display: 'flex',
        '& > *:first-child':{
            marginRight: 5,
            color:'#757575'
        }
    },
    cardActions: {
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        '& > *:first-child': {
            fontSize: 15,
            fontWeight: 400
        }
    },
    btn:{
        borderColor: palette.leadAccent1,
        color:'white',
        backgroundColor: palette.leadAccent1,
        '&:hover':{
            color:palette.leadAccent1,
            borderColor: palette.leadAccent1,
        }
    }
})


const UserCard = (props) => {
    const {classes, user, onEditClick, onDeleteClick, onTransactionClicked,getAllTransactions} = props
    const fullName = user.name.concat(" ", user.lastName)
    const image = user.avatar.startsWith('https://s3.amazonaws.com/') ? DEFAULT_IMG : user.avatar
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    }

    const transactionClicked = () => {
        getAllTransactions(user.id)
        onTransactionClicked()
    }

    return (
        <div className={classes.main}>
            <Card className={classes.root}>
                <CardHeader
                    className={classes.header}
                    avatar={
                        <Avatar alt="Remy Sharp"
                                src={image}
                                className={classes.large}/>
                    }
                    title={fullName}
                    subheader={
                        <div className={classes.subheader}>
                            <span><AccessTimeIcon fontSize={'small'}/></span>
                            <span>{moment(user.createdAt).fromNow()}</span>
                        </div>
                    }
                    action={
                        <div className={classes.icons}>
                            <IconButton aria-label="delete" onClick={onDeleteClick}>
                                <DeleteIcon/>
                            </IconButton>
                            <IconButton aria-label="edit" onClick={onEditClick}>
                                <EditIcon/>
                            </IconButton>
                        </div>
                    }
                />
                <CardActions disableSpacing className={classes.cardActions}>
                    <p>User Info</p>
                    <IconButton
                        className={clsx(classes.expand, {
                            [classes.expandOpen]: expanded,
                        })}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon/>
                    </IconButton>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <div className={classes.userInfo}>
                            <div className={classes.info}>
                                <TodayIcon/>
                                <Typography paragraph>{user.age} years old</Typography>
                            </div>
                            <div className={classes.info}>
                                <EmailIcon/>
                                <Typography paragraph>{user.email}</Typography>
                            </div>
                            <div className={classes.info}>
                                <WorkIcon/>
                                <Typography>{user.about}</Typography>
                            </div>
                            <div className={classes.info}>
                                <div/>
                                <Button variant="contained" className={classes.btn}
                                        onClick={transactionClicked}>Transactions</Button>
                            </div>
                        </div>
                    </CardContent>
                </Collapse>
            </Card>
        </div>
    )
}

const DispatchToProps = {
    getAllTransactions
}

export default withStyles(styles)(connect(null, DispatchToProps)(UserCard))