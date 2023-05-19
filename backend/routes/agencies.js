const router = require("express").Router();
let Agency = require("../models/agency.js");


http://localhost:8070/agency/add

router.route("/add").post((req,res)=>{

   const agency_id = req.body.agency_id;
   const agency_name = req.body.agency_name;
   const address = req.body.address;
   const contact = Number(req.body.contact);
   const email = req.body.email;
   const fax = Number(req.body.fax);
   const vaild_up_to = req.body.vaild_up_to;

   const newAgency = new Agency({

    agency_id,
    agency_name,
    address,
    contact,
    email,
    fax,
    vaild_up_to



   })

 newAgency.save().then(()=>{
    res.json("Agency Added")
 }).catch((err)=>{
    console.log(err);
 })  

})

http://localhost:8070/agency

router.route("/").get((req,res)=>{

     Agency.find().then((agencies)=>{
        res.json(agencies)
     }).catch((err)=>{
        console.log(err)
     })

})

http://localhost:8070/agency/update

router.route("/update/:id").put(async(req, res) => {
    let userId = req.params.id;
    const {agency_id, agency_name, address, contact, email, fax, vaild_up_to } = req.body;

    const updateAgency = {
        agency_id,
        agency_name,
        address,
        contact,
        email,
        fax,
        vaild_up_to

    }
    
    const update = await Agency.findByIdAndUpdate(userId, updateAgency)
    .then(() => {
        res.status(200).send({status: "Agency updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message});
    })

})



http://localhost:8070/agency/delete

router.route("/delete/:id").delete(async (req, res) => {
    let userId = req.params.id;

    await Agency.findByIdAndDelete(userId)
    .then(() => {
        res.status(200).send({status: "Agency deleted"});
    }).catch((errr) => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete agency", error: err.message});
    })
} )

router.route("/get/:id").get(async (req, res) => {
    let userId = req.params.id;
    const user = await Agency.findById(userId)
    .then(() => {
        res.status(200).send({status: "Agency fetched", user: user})
    }).catch(() => {
        console.log(err.message);
        res.status(500).send({status: "Error with get agency", error: err.message});
    })
})

module.exports = router;
