import React from 'react';
import './App.css';
import './styles/components.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Scope from './components/Scope';
import Milestones from './components/Milestones';
import Documentation from './components/Documentation';
import Presentations from './components/Presentations';
import Banner from './components/Banner';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Scope />
      <Milestones />
      <Documentation />
      <Presentations />
      <Banner />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
