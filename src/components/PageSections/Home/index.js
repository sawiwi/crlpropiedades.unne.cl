import React, { Fragment } from 'react';
import CarouselSection from './components/CarouselSection';

import About from '../../../pages/About';
import Properties from '../../../pages/Properties/Properties';
import Contact from '../../../pages/Contact';

const HomeComponent = () => {
  return (
    <Fragment>
      <CarouselSection />
      <Properties/>
      <About/> 
      <Contact/>    
    </Fragment>
  );
};

export default HomeComponent;
