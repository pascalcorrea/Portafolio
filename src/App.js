import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portafolio';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  return (
    <body>
      <main>
        <Home />
        <Header />
        <About />
        <Portfolio />
        <Contact />
        <Footer />
      </main>
    </body>
  );
}

export default App;