import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' exact element={<Home/>}/>
<<<<<<< HEAD
      <Route path='/login' exact = {<Login/>}/>
      <Route path='/signup' exact = {<Signup/>}/>
     
      

    
=======
      <Route path='/login' exact element= {<Login/>}/>
      <Route path='/signup' exact element= {<Signup/>}/>
>>>>>>> 5f62e7522c0a18bc84228b334378fa1395cb84e2
    </Routes>
    </BrowserRouter>
  );
}

export default App;
