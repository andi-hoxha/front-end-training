const usersState = []

const users = (state = usersState,action) => {
    switch (action.type){
        case 'ADD_USER':
            return [...state,{name:'Andi',age:Math.floor(Math.random() * 90)}]
        default:
            return state
    }
}

export default users;