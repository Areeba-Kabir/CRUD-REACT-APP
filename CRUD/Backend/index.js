const express= require ('express');
const mongoose=require('mongoose');
const cors=require('cors');
const UserModel= require('./model/tasks')
require('dotenv').config()

const app=express();
app.use(cors())
app.use(express.json())

mongoose
    .connect(process.env.URI)
    .then(()=>{
            console.log("Connected to Database!")
            app.listen(process.env.PORT,()=>{
                console.log("server is running on ")
            })
    })
    .catch((err)=>{
        console.log(err);
    })

app.get('/',(req,res)=>{
    UserModel.find({ })
    .then(tasks => res.json(tasks))
    .catch(err => res.json(err))
})

app.get('/getTask/:id',(req,res)=>{
    const id=req.params.id;
    UserModel.findById({_id:id})
    .then(tasks => res.json(tasks))
    .catch(err => res.json(err))
})

app.put('/updateTask/:id',(req,res)=>{
    const id=req.params.id;
    UserModel.findByIdAndUpdate({_id:id,},{
        title:req.body.title,
        description: req.body.description, 
        status: req.body.status
    })
    .then(tasks => res.json(tasks))
    .catch(err => res.json(err))
})

app.post("/createTask",(req,res)=>{
    UserModel.create(req.body)  
    .then(users => res.json(tasks))
    .catch(err => res.json(err))
})

app.delete('/deleteTask/:id',(req,res)=>{
    const id=req.params.id;
    UserModel.findByIdAndDelete({_id:id}) 
    .then(tasks => res.json(tasks))
    .catch(err => res.json(err))
})