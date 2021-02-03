import ACTIONS from '../assignment/ActionTypes';
import {CALL_API} from 'middleware/Api';


export const requestData = () => {
    return {
        type: ACTIONS.REQUEST_DATA
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
        return dispatch({
            [CALL_API]: {
                endpoint: `/users/${id}/transactions`
            }
        }).then((items) => {
            dispatch(fetchTransactions(items))
            return items
        }, (error) => {
            console.log(error)
            return error
        })
    }
}

