import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Head from '../../components/Head/Head';
import Section from '../../components/Section/Section';
import PropertiesComponent from '../../components/PageSections/Properties';

const Properties = () => {
  const location = useLocation();

  return (
    <div id='PropertiesSectionScroll'>
      <Section className="relative flex flex-col md:flex-row bg-gray-100">
        <PropertiesComponent />
      </Section>
    </div>
    
  );
};

export default Properties;
