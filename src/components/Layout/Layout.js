import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import CarouselSection from '../PageSections/Home/components/CarouselSection';
import Properties from '../../pages/Properties/Properties';
// import Property from '../../pages/Properties/Property';
import About from '../../pages/About';
import Head from '../../components/Head/Head';
import ContactWsp from '../ButtonContact/Fab';
import Contact from '../../pages/Contact';

const Layout = () => {
  return (
    <div className="relative mt-16 xl:mt-24 overflow-hidden w-100 bg-white">
      <Head
        title="Inicio"
        description="Pagina web otorgada por Panal a sus socios"
        keywords="Panal, propiedades, plataforma de corretaje, herramientas digitales, corredores, recursos, corretaje"
      />

      {/* HEADER PAGE */}
      <Header />
      {/* MAIN CONTENT */}
      <CarouselSection/> 
      <About/>  
      <Properties/>
      <Contact/>
      {/* FOOTER PAGE */}
      <Footer />   
      <ContactWsp/> 
    </div>
  );
};

export default Layout;
