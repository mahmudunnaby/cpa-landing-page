import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/HeroSection/Hero';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Addpub from './components/AddPub/Addpub';
import Feedback from './components/Feedback/Feedback';

function App() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Footer />
      <About />
      <Addpub />
      <Feedback />
    </div>
  );
}

export default App;
