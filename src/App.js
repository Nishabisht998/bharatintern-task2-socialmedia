// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Profile from './components/Profile';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import Profiledetails from './components/Profiledetails';
import Createpost from './components/Createpost';
import Nav from './components/Nav';
import { Toaster } from 'react-hot-toast';


function App() {
  return (
    <div className="app" >
      <Toaster/>
     
      <BrowserRouter>
      
      <Routes>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/' element={<Profile/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/nav' element={<Nav/>}/>
        <Route path='/create' element={<Createpost/>}/>
        <Route path='/profile' element={<Profiledetails/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
