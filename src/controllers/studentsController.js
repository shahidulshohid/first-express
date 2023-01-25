const studentsModel = require("../models/studentModel")


//crud

//create

exports.InsertStudent=(req,res)=>{
    let reqBody= req.body;
    studentsModel.create(reqBody,(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else {
            res.status(200).json({status:"success",data:data})
        }
    })
 }

//read

exports.readStudent = (req,res)=>{

    let query={};
    let projection="Name Roll Class Remarks";
    studentsModel.find(query,projection,(error,data)=>{

        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else {
            res.status(200).json({status:"success",data:data})
        }

    })
}
