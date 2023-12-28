import React from 'react';
import { Routes, Route } from 'react-router-dom';
import StepOne from '../components/RegistrationComponent/StepOne/StepOne';
import StepTwo from '../components/RegistrationComponent/StepTwo/StepTwo';

const RegistrationPage = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<StepOne />} />
        <Route path="steptwo" element={<StepTwo />} />
      </Routes>
    </div>
  );
};

export default RegistrationPage;
