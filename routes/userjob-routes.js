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
} = require("../controllers/userjob-controller");

// use routes
router.route("/userjob").get( getallJob);
router.route("/userjob").post(createJob);
router.route("/userjob/:id").delete(deleteJob);
router.route("/userjob/:id").put(updateJob);


module.exports = router;
