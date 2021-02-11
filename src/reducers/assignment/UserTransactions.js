import ACTIONS from '../assignment/ActionTypes'


const users = (state = {isLoading:false,items:[]}, action) => {
    switch (action.type) {
        case ACTIONS.GET_USERS:
            return {items:action.users,isLoading: false}
        case ACTIONS.ADD_USER:
            const user = action.item
            return {items:[...state.items,user]}
        case ACTIONS.INVALIDATE_DATA:
            return {
                isLoading: false,
                items: []
            }
        case ACTIONS.UPDATE_USER:
            const userToBeUpdated = action.user
            const userFound = state.items.find(next => next.id === action.id)
            if (!userFound) {
                return {items:[...state.items, userToBeUpdated],isLoading: false}
            }
            return {
                isLoading: false,
                items: state.items.map(next => {
                if (next.id === action.id) {
                    return userToBeUpdated
                }
                return next
            })}

        case ACTIONS.DELETE_USER:
            return {items:state.items.filter(next => next.id !== action.user.id),isLoading: false}
        case ACTIONS.REQUEST_DATA:
            return {
                ...state,
                isLoading: true
            }
        default:
            return state
    }
}


const transactions = (state = {isLoading:false,items:[]}, action) => {
    switch (action.type) {
        case ACTIONS.GET_TRANSACTIONS:
            return {
                isLoading: false,
                items: action.data
            }
        case ACTIONS.REQUEST_TRANSACTIONS:
            return {
                ...state,
                isLoading:true
            }
        default:
            return state
    }
}

const userTransactions = (state = [], action) => {
    return {
        users: users(state.users, action),
        transactions: transactions(state.transactions, action)
    }
}

export default userTransactions