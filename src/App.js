import React from 'react'
import { Routes, Route, } from 'react-router-dom'
import Navbar from './componets/navbar/Navbar';
import LandingPage from './router/LandingPage';
import SignIn from './componets/Registration/Signin'
import SignUp from './componets/Registration/Signup'
import VerifyEmail from './componets/Registration/VerifyEmail'
import ResetPassword from './componets/Registration/Resetpassword'
import ForgotPassword from './componets/Registration/ForgotPassword'
import ProtectedRoutes from './componets/Registration/ProtectedRoutes'
import Footer from './componets/footer/Footer'

function  App () {
  return (
    <div>
      <Navbar />
      <Routes className="pages">
        <Route path="/" element={<LandingPage />} />
        <Route path="/sign-in" exact element={<SignIn />} />
        <Route path="/sign-up" exact element={<SignUp />} />
          <Route path="/verifyEmail" exact element={<VerifyEmail />} />
          <Route path="/resetPassword" exact element={<ResetPassword />} />
          <Route path="/forgotPassword" exact element={<ForgotPassword />} />
          <Route path="/" exact element={<ProtectedRoutes />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App
