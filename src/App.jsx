import About from './components/About';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Packages from './components/Packages';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App(){
    return(
      <>
      <Navbar />
      <Hero />
      <About />
      <Packages />
      <Contact />
      <Footer />
      
      </>
    );
}

export default App;