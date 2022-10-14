import './App.css';
import Aboutus from './Components/AboutUs';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Work from './Components/Work';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Aboutus />
      <Work />
      <Footer />
    </div>
  );
}

export default App;
