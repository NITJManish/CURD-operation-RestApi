const express=require("express");
const router=express.Router();
const Course=require('../models/Course');


//get all the courses
router.get("/", async (req,res)=>{
    try{
        const courses=await Course.find();
        res.status(200).json(courses);
    }catch(err)
    {
        res.status(500).json(err);
    }
})

//get single course
router.get('/:courseId', async (req,res)=>{
    const courseId=req.params.courseId;
    try{
        const singleCourse=await Course.findById(courseId);
        res.status(200).json(singleCourse);
    }catch(err)
    {
        res.status(500).json("incorrect id");
    }
})

//create course
 router.post('/', async (req,res)=>{
    const course=await Course.create(req.body);
    res.status(200).json(course);
 })

 //delete course
 router.delete('/:courseId', async (req,res)=>{
    try{
        await Course.findByIdAndDelete({_id:req.params.courseId});
        res.status(200).json({message: "successfully deleted"});
    }catch(err){
        console.log(err);
    res.status(500).json(err);
    }
 });

 //update the course
 router.put('/:courseId', async (req,res)=>{
    const courseId=req.params.courseId;
    try{
        const updatedCourse=await Course.updateOne({_id:courseId},req.body);
        res.status(200).json(updatedCourse);
    }catch(err)
    {
        res.status(500).json(err);
    }
 });

module.exports=router;