const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

const User = mongoose.model('User', {
    name : {
        type: String,
        required: true,
        trim: true
    },
    Email : {
        type: String,
        required : true,
        trim: true,
        lowercase: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Email is invalid")
            }
        }
    },
    Password : {
        type : String,
        required: true,
        minLength : 7,
        trim: true,
        vaidate(value){
            if(value.toLowerCase().includes("password")){
                throw new Error("Password cannot contain password")
            }
        }
    },
    age : {
        type : Number,
        default: 0,
        validate(value){
            if(value < 0){
                throw new Error('Age must be a positive number')
            }
        }
    }
})

// const me = new User({
//     name: 'Pintu', 
//     age: 22,
//     Email: 'MYEMAIL@PK.IO',
//     Password: '             qwerty12                       '

// })

// me.save().then((result) => {
//     console.log(result)
// }).catch((error) => {
//     console.log("Error", error)
// })

const Tasks = mongoose.model('Task', {
    description: {
        type: String,
        trim: true,
        required: true
    },
    completed: {
        type : Boolean,
        default: false
    }
})

const task = new Tasks({
    description: "      Eat Lunch",
})

task.save().then(() => {
    console.log(task)
}).catch((error) => {
    console.log("Error", error)
})