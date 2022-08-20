const express = require('express')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get('/', (req, res)=>{
    return res.status(200).json({
        message: "Welcome from server"
    })
})


let port = process.env.PORT || 5000
app.listen(port, ()=>console.log('listening...'))