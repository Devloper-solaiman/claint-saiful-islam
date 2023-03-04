import logo from './logo.svg';
import './App.css';
import Navbar from './pages/Share/Navbar';
import { Route, Routes } from 'react-router';
import Home from './pages/Home/Home';
import LoginPage from './pages/Login/LoginPage';
import RegisterPage from "./pages/Login/RegisterPage";
import Appointment from './pages/Appointment/Appointment';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/appointment' element={<Appointment></Appointment>}></Route>
        <Route path='/LoginPage' element={<LoginPage></LoginPage>}></Route>
        <Route path='/RegisterPage' element={<RegisterPage></RegisterPage>}></Route>
      </Routes>
    </div>
  );
}

export default App;
