import React from "react";
import { BrowserRouter as BRouter, Route, Routes } from "react-router-dom";
import Profilepage from "./Screen/Profilepage";
import SigninAdmin from "./Screen/SigninAdmin";
import Userprofile from "./Screen/Userprofile";
import Feedback from "./Screen/Feedback";
import Aprofilepage from "./Screen/Aprofilepage";
import ACountry from "./Screen/ACountry";
import AQualification from "./Screen/AQualification";
import AJobCategorycountry from "./Screen/AJobCategorycountry";
import Mainview from "./Screen/Mainview";
import UserActivity from "./Screen/UserActivity";
import UserAppliedjobs from "./Screen/UserAppliedjobs";
import AdminHome from "./Screen/AdminHome";


function App() {
  return (
    <BRouter>
      <Routes>
        <Route exact path="/admin" element={<SigninAdmin />} />
        <Route exact path="/uprofile" element={<Userprofile />} />
        <Route exact path="/feedback" element={<Feedback />} />
        <Route exact path="/aprofile" element={<Aprofilepage />} />
        <Route exact path="/acountry" element={<ACountry />} />
        <Route exact path="/aquali" element={<AQualification />} />
        <Route exact path="/ajobcountry" element={<AJobCategorycountry />} />
        <Route exact path="/Mainview" element={<Mainview/>} />
        <Route exact path="/useractivity" element={<UserActivity/>} />
        <Route exact path="/applied" element={<UserAppliedjobs/>} />
        <Route exact path="/ahome" element={<AdminHome/>} />

        <Route exact path="/profile" element={<Profilepage />} />
    </Routes>
    </BRouter>
  );
}

export default App;
