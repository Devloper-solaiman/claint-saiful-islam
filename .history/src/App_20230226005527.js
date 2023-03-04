import logo from './logo.svg';
import './App.css';
import Navbar from './pages/Share/Navbar';
import { Route, Routes } from 'react-router';
import Home from './pages/Home/Home';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;
