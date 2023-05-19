const Usermodel = require("../models/user-model");

const { cloudinary } = require("../utils/cloudinary");

const mongoose = require("mongoose");


//fetch customer profile data
exports.getProfileData = async (req, res) => {
  try {
    if (!req.user) {
      res.status(422).json({
        success: false,
        desc: "Can not find the user - Please check again",
      });
    } else {
      res.status(200).send({
        profile: req.user,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      desc: "Error in getProfileData controller-" + error,
    });
  }
};


//Fetch User profile details
exports.getUserDetails = async (req, res) => {
  try {
    const userdetails = await Usermodel.find();
    res.status(200).send({
      userdetails,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      desc: "Error in getUser Details controller-" + error,
    });
  }
};



//delete user
exports.deleteUser = async (req, res) => {
  let Id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(Id))
    return res.status(404).send(`No User with id: ${Id}`);

  try {
    await Usermodel.findByIdAndDelete(Id);
    res.status(200).json({ status: "User profile deleted" });
  } catch (error) {
    res.status(500).json({ status: "Internal server error", error });
  }
};



//edit user
exports.updateuser =  async (req,res) =>{
  const { name,contact,username } = req.body;

  try {
    const newData = {
      name,contact,username
    };
    const updatedUser = await Usermodel.findByIdAndUpdate(
      req.user.id,
      newData,
      {
        new: true,
        upsert: false,
      }
    );
    res.status(200).send({
      success: true,
      desc: "user updated successfully",
      updatedUser,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      desc: "Error in updateProfileData controller-" + error,
    });
  }
 }



