require('../src/db/mongoose')
const User  = require('../src/models/user')

User.findByIdAndUpdate('6087c80cad8a901ab83da365', { age: 1}).then((user) => {
    console.log(user)
    return User.countDocuments({age: 1})
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})