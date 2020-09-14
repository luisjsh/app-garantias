import store from '../redux/store'

export default function Errorhandler(message, history){
    switch(message){
        
        case 'No id':
            history.push('/login')
            store.dispatch(setBadNotification({name: 'Sesion expirada'}))
            break;

        
        default: 
            
    }

}

const setBadNotification =(message)=>{
    return {type: 'SET_BAD_NOTIFICATION', payload: message}
}