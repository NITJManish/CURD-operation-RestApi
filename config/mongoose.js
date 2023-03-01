const mongoose=require("mongoose");
const dotenv=require('dotenv');
dotenv.config();

mongoose.connect(process.env.DB).then(()=>{
  console.log("mongodb connected");
}).catch((err)=>{
    console.log(err);
});

module.exports=mongoose;
