import ACTIONS from '../assignment/ActionTypes';
import {CALL_API} from 'middleware/Api';
import ACTION_TYPES from "reducers/posts/PostsActionTypes";

export const fetchUsers = (users) => {
    return {
        type: ACTIONS.GET_USERS,
        users
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

export const requestData = () => {
    return {
        type: ACTION_TYPES.REQUEST_DATA
    }
}

export const getAllUsers = () => {
    return (dispatch) => {
        dispatch(requestData())
        return dispatch({
            [CALL_API]: {
                endpoint: '/users'
            }
        }).then((items) => {
            console.log("USER FROM MOCK", items)
            dispatch(fetchUsers(items))
            return items
        }, (error) => {
            console.log(error)
            return error
        })
    }
}

export const addNewUser = (user) => {
     return (dispatch) => {
         return dispatch({
             [CALL_API]: {
                 endpoint: `/users`,
                 options: {
                     method: 'POST',
                     body: JSON.stringify(user),
                 }
             }
         }).then((item) => {
             console.log('Item', item)
             dispatch(addUser(item))
             return item
         }, (error) => {
             console.log('Error',error)
             return error
         })
     }
}


export const updateSingleUser = (user, id) => {
    return (dispatch) => {
        dispatch(requestData())
        return dispatch({
            [CALL_API]: {
                endpoint: `/users/${id}`,
                options: {
                    method: 'PUT',
                    body: JSON.stringify(user),
                }
            }
        }).then((item) => {
            dispatch(updateUser(item, id))
            return item
        }, (error) => {
            console.log('Error', error)
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
            console.log('Error', error)
            return error
        })
    }
}




