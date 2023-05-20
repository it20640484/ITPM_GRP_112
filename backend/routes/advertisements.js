const router = require("express").Router();
let advertisement = require("../models/advertisement");


//Add advertisement
router.route("/addAdvertisement").post((req,res)=>{

    const job_category = req.body.job_category; 
    const ag_name = req.body.ag_name;
    const mngr_id = req.body.mngr_id;
    const mngr_name = req.body.mngr_name;
    const contact_no = req.body.contact_no;
    const mgr_email = req.body.mgr_email;
    const from = req.body.from;
    const to = req.body.to;
    const advertisementImage = req.body.advertisementImage;

    const newAdvertisement = new advertisement({
        
        job_category,
        ag_name,
        mngr_id,
        mngr_name,
        contact_no,
        mgr_email,
        from,
        to     
    })
    

    newAdvertisement.save().then(()=>{
        res.json("Advertisement posted")
    }).catch((err)=>{
        console.log(err);
    })


})


//User View Advertisement
router.route("/userViewAdvertisement").get((req,res)=>{

    advertisement.find().then((advertisements)=>{
        res.json(advertisements)
    }).catch((err)=>{
        console.log(err)
    })

})



router.route("/agencyViewAdvertisement").get((req,res)=>{

    advertisement.find().then((advertisements)=>{
        res.json(advertisements)
    }).catch((err)=>{
        console.log(err)
    })

})

router.route("/adminViewAdvertisement").get((req,res)=>{

    advertisement.find().then((advertisements)=>{
        res.json(advertisements)
    }).catch((err)=>{
        console.log(err)
    })

})

router.route("/advertisement/:id",(req,res)=>{
    let postId = req.params.id;

    advertisement.findById(postId,(err,post)=>{
        if(err){
            return res.status(400).json({success:false,err});
        }
        return res.status(200).json({
            success:true,
            post
        });
    });
});

//Update advertisement

router.put('/update/:id', async (req, res) => {
    try {
      const post = await advertisement.findByIdAndUpdate(req.params.id, req.body, { new: true });
      return res.status(200).json({
        success: "Update Successfully",
        post
      });
    } catch (err) {
      return res.status(400).json({
        error: err
      });
    }
  });



//Delete advertisement
router.route("/deleteAdvertisement/:aid").delete(async(req,res) => {
    let add_id = req.params.aid;

    await advertisement.findByIdAndDelete(add_id).then(()=>{
        res.status(200).send({status: "Advertisement deleted"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with delete user", error: err.message});
    })
})

router.route("/get/:aid").get(async (req,res) => {
    let add_id = req.params.aid;
    const user = await advertisement.findById(add_id)
    .then((advertisement)=>{
        res.status(200).send({status: "Advertisement fetched", advertisement})
    }).catch(()=>{
        console.log(err.message);
        res.status(500).send({status:"Error with user" , error: err.message});
    })
})

router.route("/advertisementss/:mngr_id").get((req,res)=>{
    let mngr_id = req.params.mngr_id;
    advertisement.find({mngr_id:mngr_id}).then((advertisements)=>{
        res.json(advertisements)
    }).catch((err)=>{
        console.log(err);
    })
})

module.exports = router;