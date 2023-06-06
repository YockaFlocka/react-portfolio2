import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './Pages/About';
import Portfolio from './Pages/Portfolio';
import Contact from './Pages/Contact';
import Resume from './Pages/Resume';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
    
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<About />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/resume' element={<Resume />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );

}

export default App;