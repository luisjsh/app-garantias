import Guest from '../../objects/user/GuestObject'

const INITIAL_STATE = {
    user: new Guest({
        id: "5f40d56d7f18c42e60532e3d",
        email: "at@gmail.com",
        username: "aa"})
}

const userReducer = (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case 'SET_USER':
            return {
                ...state, user: action.payload
            }

        default: 
            return state
    }
}

export default userReducer