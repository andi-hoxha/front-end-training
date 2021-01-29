import ACTIONS from '../example/exReducerTypes'

const initialState = 0

const counter = (state = initialState,action) => {
    switch (action.type) {
        case ACTIONS.INCREMENT:
            return state + 1
        case ACTIONS.DECREMENT:
            return state - 1
        case ACTIONS.ADD:
            return state + 10
        case ACTIONS.SUBTRACT:
            return state - 5
        default:
            return state
    }
}

export default counter;