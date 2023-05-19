const express = require("express");
const router = express.Router();

//import protected-routes middlewares
const { protectedUser} = require("../middlewares/route-authorization");


// import controllers
const {
    getallCountry,
    createcountry,
    updateCountry,
    deleteCountry
} = require("../controllers/country-controller");

// use routes
router.route("/country").get( getallCountry);
router.route("/country").post(createcountry);
router.route("/country/:id").delete(deleteCountry);
router.route("/country/:id").put(updateCountry);


module.exports = router;
