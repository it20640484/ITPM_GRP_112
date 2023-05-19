const FeedbackModal = require("../models/feedback-model");


const mongoose = require("mongoose");

//Fetch all product
exports.getallFeedback = async (req, res) => {
    try {  
      const allfeedback = await FeedbackModal.find();
      
        res.status(200).send({
            allfeedback,
        });
      
      
    } catch (error) {
      res.status(500).json({
        success: false,
        desc: "Error in getaProduct controller-" + error,
      });
    }
  }

   //Create new Feedback
   exports.createfeedback = async (req, res) => {
    const {
        feedbackId,
        agency,
        message,
        email
    } = req.body;
    try {
     
      const postFeedback = await FeedbackModal.create({
        feedbackId,
        agency,
        message,
        email
      });
  
      res.status(201).json(postFeedback);
    }
    catch (error) {
      res.status(409).json({
        success: false,
        desc: "Error in adding Feedback (createfeedback Controller)",
        error: error.message,
      });
    }
  };


  //edit Feedback
  exports.updateFeedback =  (req,res) =>{
    let Id = req.params.id;
    const {
        feedbackId,
        agency,
        message,
    } = req.body;
  
    const updatedfeedback = {  
        feedbackId,
        agency,
        message,
    }
   
    FeedbackModal.findByIdAndUpdate(Id,updatedfeedback,
      {
        new: true,
        upsert: false,
      })
    .then(() => {
      res.status(200).send({status: "Succesfully updated " +Id})
    }).catch((error) => {
      res.status(500).send({status: "error in updating feedback (updateFeedbackController)",error: error.message})
    })
   }
  
  //delete specific Feedback
  exports.deleteFeedback = async (req, res) => {
    let Id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(Id))
      return res.status(404).send(`No product with id: ${Id}`);
  
    try {
      await FeedbackModal.findByIdAndDelete(Id);
      res.status(200).json({ status: "Product deleted" });
    } catch (error) {
      res.status(500).json({ status: "Product-Internal server error (deleteFeedbackModal)", error });
    }
  };