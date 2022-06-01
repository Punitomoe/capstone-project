import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import CustomerService from './pages/CustomerService';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/menu' element={<Menu/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/customerService' element={<CustomerService/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
