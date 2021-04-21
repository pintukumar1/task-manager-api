const mongoose = require('mongoose')

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

// const User = mongoose.model('User', {
//     name : {
//         type: String
//     },
//     age : {
//         type : Number
//     }
// })

// const me = new User({
//     name: 'Pintu', 
//     age: 22
// })

const Tasks = mongoose.model('Task', {
    description: {
        type: String
    },
    completed: {
        type : Boolean
    }
})

const task = new Tasks({
    description: "Watering the plants",
    completed: false
})

task.save().then(() => {
    console.log(task)
}).catch((error) => {
    console.log("Error", error)
})