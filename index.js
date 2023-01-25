// const app = require("./app");
// app.listen(5000,function(){
//     console.log("success");
// })

// const app = require("./app");
// app.listen(5000,function(){
//     console.log("success");
// })

const app = require("./app");
const dotenv = require('dotenv');
dotenv.config({path:"./config.env"});

app.listen(process.env.RUNNING_PORT,()=>{
    console.log("success");
})