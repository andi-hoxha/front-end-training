import ACTIONS from '../assignment/ActionTypes';
import {CALL_API} from 'middleware/Api';
import ACTION_TYPES from "reducers/posts/PostsActionTypes";
import {requestData, updatePost} from "reducers/posts/PostsActionsUsingMiddleware";

export const fetchUsers = (users) => {
    return {
        type: ACTIONS.GET_USERS,
        users
    }
}

export const fetchTransactions = (data) => {
    return {
        type: ACTIONS.GET_TRANSACTIONS,
        data
    }
}

export const addUser = (item) => ({
    type: ACTIONS.ADD_USER,
    item
})

export const updateUser = (user, id) => {
    return {
        type: ACTIONS.UPDATE_USER,
        user,
        id
    }
}

export const deleteUser = (user) => {
    return {
        type: ACTIONS.DELETE_USER,
        user
    }
}

export const displayMessage = (response) => {
    return {
        type: ACTION_TYPES.DISPLAY_MESSAGE,
        response
    }
}

export const getAllUsers = () => {
    return (dispatch) => {
        return dispatch({
            [CALL_API]: {
                endpoint: '/users'
            }
        }).then((items) => {
            console.log("USER FROM MOCK",items)
            dispatch(fetchUsers(items))
            return items
        }, (error) => {
            console.log(error)
            return error
        })
    }
}

export const addNewUser = (item) => {
    return (dispatch) => {
        return dispatch({
            [CALL_API]: {
                endpoint: `/users`,
                options: {
                    method: 'POST',
                    body: JSON.stringify(item),
                }
            }
        }).then((item) => {
            console.log('Item', item)
            dispatch(addUser(item))
            return item
        }, (error) => {
            dispatch(displayMessage(error))
            return error
        })
    }
}



export const updateSingleUser = (user, id) => {
    return (dispatch) => {
        return dispatch({
            [CALL_API]: {
                endpoint: `/users/${id}`,
                options: {
                    method: 'PUT',
                    body: JSON.stringify(user),
                }
            }
        }).then((item) => {
            dispatch(updateUser(item,id))
            return item
        }, (error) => {
            dispatch(displayMessage(error))
            return error
        })
    }
}

export const deleteSingleUser = (id) => {
    return (dispatch) => {
        return dispatch({
            [CALL_API]: {
                endpoint: `/users/${id}`,
                options: {
                    method: 'DELETE'
                }
            }
        }).then((item) => {
            dispatch(deleteUser(item))
            return item
        }, (error) => {
            dispatch(displayMessage(error))
            return error
        })
    }
}




