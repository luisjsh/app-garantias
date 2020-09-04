import User from './UserObject'

function Admin(user){
    User.call(this, user)
    
    this.role = 'Admin'
    this.run = ()=>{
       console.log(`im a admin`)
    }
}

Admin.prototype = Object.create(User.prototype)
Admin.prototype.constructor = Admin

export default Admin