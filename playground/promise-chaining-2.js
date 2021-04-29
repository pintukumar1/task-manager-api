require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('6088003d82d37e34ecc52659').then((task) => {
//     console.log(task)
//     return Task.countDocuments({completed: false}).then((result) => {
//         console.log(result)
//     }).catch((e) => {
//         console.log(e)
//     })
// })

const deleteTaskAndCount = async(id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: true})
    return count
}

deleteTaskAndCount('6089629eda8b4312286db231').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})

