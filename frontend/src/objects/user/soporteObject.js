import User from './UserObject'

function Soporte(user){
    User.call(this, user)
    
    this.role = 'Soporte'
    this.run = ()=>{
       console.log(`im a soporte`)
    }
}

Soporte.prototype = Object.create(User.prototype)
Soporte.prototype.constructor = Soporte

export default Soporte