import './App.css';
import Navbar from './pages/Share/Navbar';
import { Route, Routes } from 'react-router';
import Home from './pages/Home/Home';
import LoginPage from './pages/Login/LoginPage';
import RegisterPage from "./pages/Login/RegisterPage";
import Appointment from './pages/Appointment/Appointment';
import ForgetPassword from './pages/Login/ForgetPassword';
import RequireAuth from './pages/Login/RequireAuth';
import Profile from './pages/Share/Profile';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from "./pages/Dashboard/Dashboard";
import MyAppointment from './pages/Dashboard/MyAppointment';
import MyReview from './pages/Dashboard/MyReview';



function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/appointment' element={
          <RequireAuth>
            <Appointment></Appointment>
          </RequireAuth>
        }></Route>
        <Route path="dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} >
          <Route index element={<MyAppointment></MyAppointment>}></Route>
          <Route path="review" element={<MyReview></MyReview>}></Route>

        </Route>
        <Route path='/LoginPage' element={<LoginPage></LoginPage>}></Route>
        <Route path='/RegisterPage' element={<RegisterPage></RegisterPage>}></Route>
        <Route path='/forgetPassword' element={<ForgetPassword></ForgetPassword>}></Route>
        <Route path='/Profile' element={<Profile></Profile>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
