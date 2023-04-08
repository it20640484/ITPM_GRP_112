require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

//import routes

const authenticationRoutes = require("./routes/authentication-routes");
const profile=require("./routes/profile-routes");
const feedback=require("./routes/feedback-routes");
const qulification=require("./routes/qulification-routes");
const country=require("./routes/country-routes");
const job=require("./routes/jobcategory-routes");
const userjob=require("./routes/userjob-routes");


const app = express();

app.use(cors());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

const PORT = process.env.PORT || 5000;
const URI = process.env.MONGODB_URI;

mongoose
  .connect(URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("MongoDB Connection Success");
  })
  .catch((err) => {
    console.log("Connection Failed - " + err);
  });

//use routes
app.use("/api/auth", authenticationRoutes);
app.use("/api/profile",profile); // 
app.use("/api/feedback",feedback); 
app.use("/api/country",country); // 1st 
app.use("/api/job",job); // 2nd 
app.use("/api/qulification",qulification); // 
app.use("/api/userjob",userjob);


//event loop for server
app.listen(PORT, () => {
  console.log(`Backend Server is running on port ${PORT}`);
});
