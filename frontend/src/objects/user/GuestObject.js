import User from './UserObject'

function Guest(user){
    User.call(this, user)
    
    this.role = 'Guest'
    this.run = ()=>{
       console.log(`im a guest`)
    }
}

Guest.prototype = Object.create(User.prototype)
Guest.prototype.constructor = Guest

export default Guest