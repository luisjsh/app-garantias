import User from './UserObject'

function Garantias(user){
    User.call(this, user)
    
    this.role = 'Garantias'
    this.run = ()=>{
       console.log(`im a guest`)
    }
}

Garantias.prototype = Object.create(User.prototype)
Garantias.prototype.constructor = Garantias

export default Garantias