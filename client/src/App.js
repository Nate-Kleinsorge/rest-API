import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/footer';

function App() {
  // const addPainting = () => {
  //   fetch(apiUrl, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({ title, desc })
  //   })
  //     .then(() => {
  //       fetchPaintings();
  //       setTitle('');
  //       setDesc('');
  //     });
  // };

  // const fetchPaintings = () => {
  //   fetch(apiUrl)
  //     .then(response => response.json())
  //     .then(data => setPaintings(data));
  // };

  return (
    <Router>
      <div>
        <header>
          <Header />
        </header>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/contact" element={<Contact />}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;