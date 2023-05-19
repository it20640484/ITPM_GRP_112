const JobModal = require("../models/jobcategory-model");


const mongoose = require("mongoose");

//Fetch all Job
exports.getallJob = async (req, res) => {
    try {
        const allJobModal = await JobModal.find();

        res.status(200).send({
            allJobModal,
        });


    } catch (error) {
        res.status(500).json({
            success: false,
            desc: "Error in getallJob controller-" + error,
        });
    }
}

//Create new Job
exports.createJob= async (req, res) => {
    const {
        Id,
        Country,
        Categoryname
    } = req.body;
    try {
       
        const postJob= await JobModal.create({
            Id,
            Country,
            Categoryname
            
        });

        res.status(201).json(postJob);
    }
    catch (error) {
        res.status(409).json({
            success: false,
            desc: "Error in adding postJob",
            error: error.message,
        });
    }
};


//edit Job
exports.updateJob = (req, res) => {
    let id = req.params.id;
    const {
        Id,
        Country,
        Categoryname

    } = req.body;

    const updatedJob  = {
        Id,
        Country,
        Categoryname
    }

    JobModal.findByIdAndUpdate(id, updatedJob ,
        {
            new: true,
            upsert: false,
        })
        .then(() => {
            res.status(200).send({ status: "Succesfully updated " + Id })
        }).catch((error) => {
            res.status(500).send({ status: "error in  updatedJob  (updatedJobController)", error: error.message })
        })
}

//delete specific Job
exports.deleteJob= async (req, res) => {
    let Id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(Id))
        return res.status(404).send(`No Job with id: ${Id}`);

    try {
        await JobModal.findByIdAndDelete(Id);
        res.status(200).json({ status: "Job deleted" });
    } catch (error) {
        res.status(500).json({ status: "Job-Internal server error (DeleteJobController)", error });
    }
};