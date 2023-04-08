const express = require("express");
const router = express.Router();

//import protected-routes middlewares
const { protectedUser} = require("../middlewares/route-authorization");


// import controllers
const {
    getallQulification,
    createQulification,
    updateQulification,
    deleteQulification
} = require("../controllers/qulification-controller");

// use routes
router.route("/qulification").get( getallQulification);
router.route("/qulification").post(createQulification);
router.route("/qulification/:id").delete(deleteQulification);
router.route("/qulification/:id").put(updateQulification);


module.exports = router;
