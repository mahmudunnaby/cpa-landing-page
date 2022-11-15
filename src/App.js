import logo from './logo.svg';
import './App.css';

import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Addpub from './components/AddPub/Addpub';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="">


      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/advertisers' element={<Addpub />}></Route>
        {/* <Route path='/advertisers' element={<Addpub />}></Route> */}
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>

    </div>
  );
}

export default App;
