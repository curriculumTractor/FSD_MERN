import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import Home2 from './Components/Home2';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' exact element={<Home/>}/>
      <Route path='/login' exact element = {<Login/>}/>
      <Route path='/signup' exact element= {<Signup/>}/>
      <Route path='/home2' exact element= {<Home2/>}/>
      
      
     
    </Routes>
    </BrowserRouter>
  );
}

export default App;
