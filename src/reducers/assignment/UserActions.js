import ACTIONS from '../assignment/ActionTypes';
import UserTransactionService from "pages/lecture10/components/services/UserTransactionService";


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

export const invalidateData = () => ({
    type: ACTIONS.INVALIDATE_DATA,
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
        type: ACTIONS.REQUEST_DATA
    }
}


export const getAllUsers = () => {
    return (dispatch) => {
        const service = new UserTransactionService(dispatch)
        dispatch(requestData())
        service.getAllUsers()
    }
}

export const addNewUser = (user) => {
     return (dispatch) => {
         const service = new UserTransactionService(dispatch)
         dispatch(requestData())
         service.addNewUser(user)
     }
}


export const updateSingleUser = (user, id) => {
    return (dispatch) => {
        const service = new UserTransactionService(dispatch)
        dispatch(requestData())
        service.updateUser(user,id)
    }
}

export const deleteSingleUser = (id) => {
    return (dispatch) => {
        const service = new UserTransactionService(dispatch)
        dispatch(requestData())
        service.deleteUser(id)
    }
}




