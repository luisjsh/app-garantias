const INITIAL_STATE = {
    token: localStorage.getItem('token'),
    expiration: false
}

const authReducer = (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case 'SET_TOKEN':
            
            localStorage.setItem('token', action.payload.token)
            return {
                ...state, 
                token: action.payload.token,
                expiration: action.payload.expiration
            }

        default: 
            return state
    }
}

export default authReducer