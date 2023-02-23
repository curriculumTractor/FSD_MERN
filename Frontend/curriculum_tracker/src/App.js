import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import Admin from './Components/Admindashboard/Admin';
import User from './Components/Userdashboard/User';
import Profile from './Components/Profile/Profile';
import Aprofile from './Components/Profile/Aprofile';

import RecieveReqrmnt from './Components/Userdashboard/Requirement/RecieveReqrmnt';
import Search from './Components/Search/Search';
import CurriculumDisplay from './Components/Curriculum/CurriculumDisplay';
import ViewCurriculm from './Components/ViewAll_curriculm/ViewCurriculm';
import ViewallFaculty from './Components/ViewAll_curriculm/ViewallFaculty';
import Fileupload from './Components/Userdashboard/FileUplod/Fileupload';
import RequirementForm from './Components/RequirementForm/RequirementForm';






function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/login' exact element={<Login />} />
        <Route path='/signup' exact element={<Signup />} />
        <Route path='/search' exact element={<Search/>} />

        
        <Route path='/admin' exact element={<Admin />} />
        <Route path='/aprofile' exact element={<Aprofile />} />
        <Route path='/curriculumdisplay' exact element={<CurriculumDisplay/>} />
        <Route path='/viewcurriculm' exact element={<ViewCurriculm/>} />
        <Route path='/requirement' exact element={<RequirementForm/>} />
        


        <Route path='/user' exact element={<User />} />
        <Route path='/uprofile' exact element={<Profile />} />
        <Route path='/recvrqrmnt' exact element={<RecieveReqrmnt/>} />
        <Route path='/viewallfaculty' exact element={<ViewallFaculty/>} />
        <Route path='/fileupload' exact element ={<Fileupload/>}/>
       
       

      </Routes>
    </BrowserRouter>
  );
}

export default App;
