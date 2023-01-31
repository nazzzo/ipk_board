const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')

const app = express()

app.use(cors({
    origin:true,
    credentials:true,
}))
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cookieParser())

app.get('/',(req,res)=>{
    res.send('hello')
})

module.exports = app