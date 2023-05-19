const QulificationModal = require("../models/qulification-model");


const mongoose = require("mongoose");

//Fetch all Qulification
exports.getallQulification = async (req, res) => {
    try {
        const allQulification = await QulificationModal.find();

        res.status(200).send({
            allQulification,
        });


    } catch (error) {
        res.status(500).json({
            success: false,
            desc: "Error in allQulification controller-" + error,
        });
    }
}

//Create new Qulification
exports.createQulification = async (req, res) => {
    const {
        jobcategory,
        jobNo,
        issuedate,
        expiredate,
        Period,
        Expirience,
        Salary,
        description
    } = req.body;
    try {

        const postQulification = await QulificationModal.create({
            jobcategory,
            jobNo,
            issuedate,
            expiredate,
            Period,
            Expirience,
            Salary,
            description

        });

        res.status(201).json(postQulification);
    }
    catch (error) {
        res.status(409).json({
            success: false,
            desc: "Error in adding postQulification",
            error: error.message,
        });
    }
};


//edit Qulification
exports.updateQulification = (req, res) => {
    let Id = req.params.id;
    const {
        jobcategory,
        jobNo,
        issuedate,
        expiredate,
        Period,
        Expirience,
        Salary,
        description

    } = req.body;

    const updatedQulification = {
        jobcategory,
        jobNo,
        issuedate,
        expiredate,
        Period,
        Expirience,
        Salary,
        description
    }

    QulificationModal.findByIdAndUpdate(Id, updatedQulification,
        {
            new: true,
            upsert: false,
        })
        .then(() => {
            res.status(200).send({ status: "Succesfully updated " + Id })
        }).catch((error) => {
            res.status(500).send({ status: "error in  updatedQulification (UpdateQulificationController)", error: error.message })
        })
}

//delete specific Qulification
exports.deleteQulification = async (req, res) => {
    let Id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(Id))
        return res.status(404).send(`No Qulification with id: ${Id}`);

    try {
        await QulificationModal.findByIdAndDelete(Id);
        res.status(200).json({ status: "Qulification deleted" });
    } catch (error) {
        res.status(500).json({ status: "Qulification-Internal server error (DeleteQulificationController)", error });
    }
};