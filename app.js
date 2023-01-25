// const express = require("express");
// const router = require("./src/routers/api");
// const app = new express();
// app.use("/api/v1",router);
// module.exports=app;


const express = require("express");
const router = require("./src/routers/api");
const app = new express();

//security middleware import
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const hpp = require("hpp");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser")

//security middleware impliment
app.use(helmet());
app.use(mongoSanitize());
app.use(xss());
app.use(cors());
app.use(hpp());
app.use(bodyParser.json())

//route rate limiting
const limiter = rateLimit({
    windowMs:10*60*1000, //15 minutes
    max:100 //limit each IP to 100 request per window
    
}) 
app.use(limiter);

//mongo DB database connetion
let URI="mongodb//127.0.0.1:27017/schools"
let option={user:"",pass:""}
mongoose.connect(URI,option,(error)=>{

    console.log("connection is success");
    console.log(error);
})


app.use("/api/v1",router);

//undefined route
app.use("*",(req,res)=>{
    res.status(404).json({status:"fail",data:"not found"});
})
module.exports = app;