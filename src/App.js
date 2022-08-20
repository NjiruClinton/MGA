
import './App.css';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Contact from './Components/Contact/Contact';
import About from './Components/About/About';
import Navbarf from './Components/Navbar/Navbarf';
import Favicon from 'react-favicon';
import f1 from "./favicon_io/favicon.png"
import f2 from "./favicon_io/android.png"
import f3 from "./favicon_io/apple.png"

function App() {
  return (
    <div className="App">
      <Favicon url={[f1, f2, f3]} />
      <Router>
        <Navbarf />
        <Routes>
        <Route path="/" element={<Navbar />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer className="footer1" />
      </Router>
    </div>
  );
}

export default App;
