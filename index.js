const express=require('express');
const courseRouter=require("./routes/courses");
const bodyParser=require('body-parser');
const app=express()
const db=require('./config/mongoose');
const dotenv=require('dotenv');
dotenv.config();

app.use(bodyParser.json());
app.use('/api',courseRouter);

app.listen(process.env.PORT,()=>{
    console.log("server run on port 2000");
})