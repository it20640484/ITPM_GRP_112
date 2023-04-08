const CountryModal = require("../models/country-model");
const { cloudinary } = require("../utils/cloudinary");


const mongoose = require("mongoose");

//Fetch all Country
exports.getallCountry = async (req, res) => {
    try {
        const allcountry = await CountryModal.find();

        res.status(200).send({
            allcountry,
        });


    } catch (error) {
        res.status(500).json({
            success: false,
            desc: "Error in getallCountry controller-" + error,
        });
    }
}

//Create new Country
exports.createcountry = async (req, res) => {
    const {
        countryno,
        name,
        fileEnc,
    } = req.body;
    try {
        const pimage = await cloudinary.uploader.upload(fileEnc, {
            upload_preset: "ssd_assignment",
        });
        const postCountry = await CountryModal.create({
            countryno,
            name,
            countryPicture: {
                imagePublicId: pimage.public_id,
                imageSecURL: pimage.secure_url,
            },
        });

        res.status(201).json(postCountry);
    }
    catch (error) {
        res.status(409).json({
            success: false,
            desc: "Error in adding Country",
            error: error.message,
        });
    }
};


//edit Country
exports.updateCountry = (req, res) => {
    let Id = req.params.id;
    const {
        countryno,
        name,

    } = req.body;

    const updatedCountry = {
        countryno,
        name,

    }

    CountryModal.findByIdAndUpdate(Id, updatedCountry,
        {
            new: true,
            upsert: false,
        })
        .then(() => {
            res.status(200).send({ status: "Succesfully updated " + Id })
        }).catch((error) => {
            res.status(500).send({ status: "error in  updatedCountry (updatedCountryController)", error: error.message })
        })
}

//delete specific Country
exports.deleteCountry = async (req, res) => {
    let Id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(Id))
        return res.status(404).send(`No Country with id: ${Id}`);

    try {
        await CountryModal.findByIdAndDelete(Id);
        res.status(200).json({ status: "Country deleted" });
    } catch (error) {
        res.status(500).json({ status: "Product-Internal server error (DeleteCountryController)", error });
    }
};