const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')
const jwt = require('jsonwebtoken')
const userRouter = require('./routers/users')
const taskRouter = require('./routers/tasks')
const app = express()
const port = process.env.PORT


app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port,()=>{
    console.log("Server is listen on port " + port)
})

