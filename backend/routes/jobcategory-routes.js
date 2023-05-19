const express = require("express");
const router = express.Router();

//import protected-routes middlewares
const { protectedUser} = require("../middlewares/route-authorization");


// import controllers
const {
    getallJob,
    createJob,
    updateJob,
    deleteJob
} = require("../controllers/jobcategory-controller");

// use routes
router.route("/job").get( getallJob);
router.route("/job").post(createJob);
router.route("/job/:id").delete(deleteJob);
router.route("/job/:id").put(updateJob);


module.exports = router;
