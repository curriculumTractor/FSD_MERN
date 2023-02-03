import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import Signup from './Components/Signup';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' exact element={<Home/>}/>
      <Route path='/login' exact = {<Login/>}/>
      <Route path='/signup' exact = {<Signup/>}/>
     
      

    
    </Routes>
    </BrowserRouter>
  );
}

export default App;
