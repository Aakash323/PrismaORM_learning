import express from 'express'
import 'dotenv/config'
import { userrouter } from './userrouter.js'

const app= express()
const port= process.env.PORT || 4000 

app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.get('/',(req,res)=>{
     res.send("hi")
})


app.use('/api/user',userrouter)


app.listen(port,()=>{
    console.log(`server is listening at port ${port}`)
})