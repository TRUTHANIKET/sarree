const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
app=express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://kyapata:kyapata@cluster0.6zkxcym.mongodb.net/test",{useNewUrlParser:true}).then(()=>{
    console.log("connected to database")
    app.listen(5000,()=>{
        console.log(`server running on http://localhost:5000`)
    })
})


