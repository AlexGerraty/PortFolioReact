import React from 'react';
import Header from '../src/components/Header';
import Navigation from '../src/components/Navigation';
import About from '..//src/components/About';
import Section from '../src/components/Section'
import Portfolio from '../src/components/Portfolio';
import Contact from '../src/components/Contact';
import Resume from '../src/components/Resume';
import Footer from '../src/components/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <Navigation />
      <main className="content">
        <Section id="about" component={<About />} />
        <Section id="portfolio" component={<Portfolio />} />
        <Section id="resume" component={<Resume />} />
        <Section id="contact" component={<Contact />} />
      </main>
      <Footer />
    </div>
  );
}

export default App;