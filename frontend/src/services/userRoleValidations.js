import Guest from '../objects/user/GuestObject'

import store from '../redux/store'

const userRoleValidation = (userData)=>{
    let {role} = userData
    switch(role){
        
        case 'guest':
            let user = new Guest(userData)
            store.dispatch(setUser(user))
            return user;

        default:
            return userData;
    }
}

const setUser=(user)=>{
    return {type: 'SET_USER', payload:user}
}

export default userRoleValidation