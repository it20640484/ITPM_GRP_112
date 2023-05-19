const express = require("express");
const router = express.Router();

//import protected-routes middlewares
const { protectedUser} = require("../middlewares/route-authorization");


// import controllers
const {
    getUserDetails,
    deleteUser,
    getProfileData,
    updateuser,
} = require("../controllers/profile-controller");

// use routes
router.route("/profile").get(protectedUser, getProfileData);
router.route("/getprofile").get(getUserDetails);
router.route("/deleteprofile/:id").delete(protectedUser,deleteUser);
router.route("/updateuser/:id").put(protectedUser,updateuser);


module.exports = router;
