import ACTIONS from '../assignment/ActionTypes';
import {CALL_API} from 'middleware/Api';
import UserTransactionService from "pages/lecture10/components/services/UserTransactionService";


export const requestData = () => {
    return {
        type: ACTIONS.REQUEST_TRANSACTIONS
    }
}

export const fetchTransactions = (data) => {
    return {
        type: ACTIONS.GET_TRANSACTIONS,
        data
    }
}

 export const getAllTransactions = (id) => {
    return (dispatch) => {
        dispatch(requestData())
        const service = new UserTransactionService(dispatch)
        return service.getAllTransactions(id)
    }
}

