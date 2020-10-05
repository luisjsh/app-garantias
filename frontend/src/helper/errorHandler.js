import store from '../redux/store'

export default function Errorhandler(message, history) {
    switch (message) {

        case 'No id':
            history.push('/login')
            store.dispatch(setBadNotification('Sesion expirada'))
            break;

        case 'User not in db':
            history.push('/login')
            store.dispatch(setBadNotification('El usuario no se encuentra registrado'))
            break;

        case 'User is not authorized':
            history.push('/app/homepage')
            store.dispatch(setBadNotification('El usuario no se encuentra autorizado para realizar esta acción'))
            break;

        case 'Not authenticated':
            history.push('/login')
            store.dispatch(setBadNotification('Por favor vuelva a iniciar sesion'))
            break;

        default:

    }

}

const setBadNotification = (message) => {
    return {
        type: 'SET_BAD_NOTIFICATION',
        payload: message
    }
}