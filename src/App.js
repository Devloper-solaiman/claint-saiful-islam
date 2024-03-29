import React from 'react';
import Navbar from "./Pages/Shared/Navbar";
import { Route, Routes } from 'react-router';
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import RequireAuth from "./Pages/Login/RequireAuth";
import Appointment from "./Pages/Appointment/Appointment";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyAppointments from "./Pages/Dashboard/MyAppointments";
import MyReview from "./Pages/Dashboard/MyReview";
import MyHistory from "./Pages/Dashboard/MyHistory";
import RequireAdmin from "./Pages/Login/RequireAdmin";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/Login/SignUp";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Users from "./Pages/Dashboard/Users";
import AddDoctor from "./Pages/Dashboard/AddDoctor";
import ManageDoctors from "./Pages/Dashboard/ManageDoctors";


const App = () => {
  return (
    <div className='max-w-7xl mx-auto px-12'>
      <>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='about' element={<About></About>}></Route>
          <Route path='appointment' element={
            <RequireAuth>
              <Appointment></Appointment>
            </RequireAuth>}>
          </Route>
          <Route path='dashboard' element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}>

            <Route index element={<MyAppointments></MyAppointments>}></Route>
            <Route path='review' element={<MyReview></MyReview>}></Route>
            <Route path='history' element={<MyHistory></MyHistory>}></Route>
            <Route path='users' element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>
            <Route path='addDoctor' element={<RequireAdmin><AddDoctor></AddDoctor></RequireAdmin>}></Route>
            <Route path='manageDoctors' element={<RequireAdmin><ManageDoctors></ManageDoctors></RequireAdmin>}></Route>
          </Route>
          <Route path='login' element={<Login></Login>}></Route>
          <Route path='signup' element={<SignUp></SignUp>}></Route>
        </Routes>
        <ToastContainer></ToastContainer>
      </>
    </div>
  );
};

export default App;