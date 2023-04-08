const express = require("express");
const router = express.Router();

//import protected-routes middlewares
const { protectedUser} = require("../middlewares/route-authorization");


// import controllers
const {
    getallFeedback,
    createfeedback,
    updateFeedback,
    deleteFeedback
} = require("../controllers/feedback-controller");

// use routes
router.route("/feedback").get( getallFeedback);
router.route("/feedback").post(createfeedback);
router.route("/feedback/:id").delete(deleteFeedback);
router.route("/feedback/:id").put(updateFeedback);


module.exports = router;
