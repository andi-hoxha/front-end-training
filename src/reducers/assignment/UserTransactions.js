import ACTIONS from '../assignment/ActionTypes'

const users = (state = [], action) => {
    switch (action.type) {
        case ACTIONS.GET_USERS:
            return action.users
        case ACTIONS.ADD_USER:
            const user = action.item
            return [...state, user]
        case ACTIONS.UPDATE_USER:
            const userToBeUpdated = action.user
            const userFound = state.find(next => next.id === action.id)
            if (!userFound) {
                return [...state, userToBeUpdated]
            }
            return state.map(next => {
                if (next.id === action.id) {
                    return userToBeUpdated
                }
                return next
            })

        case ACTIONS.DELETE_USER:
            return state.filter(next => next.id !== action.user.id)
        default:
            return state
    }
}

const request = (state = {isLoading: false, status: 200}, action) => {
    switch (action.type) {
        case ACTIONS.REQUEST_DATA:
            return {
                isLoading: true,
                status: 200
            }
        default:
            return state;
    }
}

const transactions = (state = [], action) => {
    switch (action.type) {
        case ACTIONS.GET_TRANSACTIONS:
            return action.data
        default:
            return state
    }
}

const userTransactions = (state = [], action) => {
    return {
        users: users(state.users, action),
        request: request(state.request, action),
        transactions: transactions(state.transactions, action)
    }
}

export default userTransactions