

const express = require('express');
const app=express();

const port=5000;
const userRouter=require('./Routers/userRouter');
const createpost=require('./Routers/createpost');
const utilRouter=require('./Routers/util');
const cors=require('cors');
app.use(cors());
app.use(express.json());
app.use('/util',utilRouter);
app.use(express.static('./uploads'));
app.use('/user',userRouter);
app.use('/create',createpost);



app.get('/',(req,res)=>{
    res.send("hello from backend");

    
})
app.get("/add",(req,res)=>{
    res.send('response from add route')
})
app.get("/update",(req,res)=>{
    res.send('response from update route')
})
app.get("/delete",(req,res)=>{
    res.send('response from delete route')
})

app.listen(port,()=>{
    console.log('server running');
});