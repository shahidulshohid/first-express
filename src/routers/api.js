// const express = require("express");
// const hellocontroller = require("../controllers/controller");
// const router = express.Router();

// //this is my first get routing
// router.get("/hello-get",hellocontroller.HelloGet);
// router.post("/hello-post",hellocontroller.HelloPost);

// module.exports = router;

const express = require ("express");
const { default: mongoose } = require("mongoose");
const controller = require("../controllers/controller");
const studentsController = require("../controllers/studentsController")
const router = express.Router();

//this is my first get routing 
router.get("/hello-get",controller.HelloGet);
router.post("/hello-post",controller.HelloPost);

//mongoose
router.post("/InsertStudent",studentsController.InsertStudent);
router.get("/readStudent",studentsController.readStudent)

module.exports = router;
