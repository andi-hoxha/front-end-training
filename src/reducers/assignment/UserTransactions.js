import ACTIONS from '../assignment/ActionTypes'

const users = (state = [], action) => {
    switch (action.type) {
        case ACTIONS.GET_USERS:
            return action.users
        case ACTIONS.ADD_USER:
            const user = action.item
            return [...state,user]
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

const userTransactions = (state = [], action) => {
    return {
        users: users(state.users, action),
    }
}

export default userTransactions