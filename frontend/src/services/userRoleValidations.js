import store from '../redux/store'

import Guest from '../objects/user/GuestObject'
import Admin from '../objects/user/adminObject'

const userRoleValidation = (userData)=>{
    let {role} = userData
    switch(role){
        
        case 'guest':
            let user = new Guest(userData)
            store.dispatch(setUser(user))
            break;

        case 'admin':
            let admin = new Admin(userData)
            store.dispatch(setUser(admin))
            break; 

        default:
            return userData;
    }
}

const setUser=(user)=>{
    return {type: 'SET_USER', payload:user}
}

export default userRoleValidation