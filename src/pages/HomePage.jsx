import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import OurFurnitures from '../components/OurFurniture';
import Clients from '../components/Clients';
import Contact from '../components/Contact';


function HomePage() {


  return (
    <div className="HomePage">
      <Hero />
      <div id="services">
        <Services />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="furnitures">
        <OurFurnitures />
      </div>
      <div id="clients">
        <Clients />
      </div>
      <div id="contact">
        <Contact />
      </div>

    </div>
  );
}

export default HomePage;