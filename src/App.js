import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/HeroSection/Hero';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Addpub from './components/AddPub/Addpub';
import Feedback from './components/Feedback/Feedback';
import Profile from './components/Profile/Profile';
import Members from './components/Members/Members';

function App() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Footer />
      <About />
      <Addpub />
      <Feedback />
      <Profile />
      <Members />
    </div>
  );
}

export default App;
