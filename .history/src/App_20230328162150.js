import './App.css';
import { Route, Routes } from 'react-router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "./Pages/Shared/Navbar";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Testimonials from "./Pages/Home/Testimonials";
import RequireAuth from "./Pages/Login/RequireAuth";
import Appointment from "./Pages/Appointment/Appointment";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyAppointments from "./Pages/Dashboard/MyAppointments";
import Contact from './pages/Home/Contact';
import Users from "./Pages/Dashboard/Users";
import MyReview from "./Pages/Dashboard/MyReview";


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/review' element={<Testimonials></Testimonials>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/appointment' element={
          <RequireAuth>
            <Appointment></Appointment>
          </RequireAuth>
        }></Route>
        <Route path="dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} >
          <Route index element={<MyAppointments></MyAppointments>}></Route>
          <Route path="dashboardReview" element={<MyReview></MyReview>}></Route>
          <Route path="dashboardUsers" element={<Users></Users>}></Route>
          <Route path="history" element={<History></History>}></Route>

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