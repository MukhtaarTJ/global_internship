import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import AboutPage from "../../pages/AboutPage";
import MainNav from "../../Layout/MainNav/MainNav";
import RegistrationPage from "../../pages/RegistrationPage";
import StepTwo from "../RegistrationComponent/StepTwo/StepTwo";
import StepOne from "../RegistrationComponent/StepOne/StepOne";
import StepThree from "../RegistrationComponent/StepThree/StepThree";

const AppRoutes = () => {
  return (
    <Router>
      <MainNav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/stepone" element={<StepOne />} />
        <Route path="/steptwo" element={<StepTwo />} />
        <Route path="/stepthree"  element={<StepThree/>} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
