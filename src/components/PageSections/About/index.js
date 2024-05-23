import React, { Fragment } from 'react';
// import About from './components/About';
import Section from '../../Section/Section';
import MeetingForm from '../../../components/Form/MeetingForm';
import aboutMeImg from '../../../assets/img/me/mePhoto.webp'


const AboutComponent = () => {
  return (
    <Section>
    {/* <Fade delay={300} direction="right"> */}
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-1 my-10 mt-16 mb-10">
      <div className="col-span-1 md:col-span-1 xl:col-span-2 flex flex-col justify-center xl:ml-6">
        <h2 className="text-5xl xl:text-4xl text-center xl:text-start  text-primary font-bold uppercase">
            Sobre mí
          </h2>
        <div className='grid grid-cols-1 lg:grid-cols-2'>
          <div className="col-span-2 lg:col-span-1 flex justify-center flex-col">
            <img
              src={aboutMeImg}
              alt="about-img"
              className="object-cover object-center rounded-full shadow-lg h-[280px] w-[280px] mt-10 mx-5 md:mx-28 md:w-[300px] md:h-[300px] xl:w-[350px] xl:h-[350px] xl:my-10 xl:mx-20 hover:scale-110 duration-300"
            />
          </div>
          <div className="col-span-2 lg:col-span-1 text-lg xl:text-xl text-gray-700 mt-8 ml-0 xl:ml-1 xl:text-left">
            <p>                    
              Como agente inmobiliario, ofrezco servicios integrales en la compra, venta y arriendo de propiedades. 
              Además, me especializo en la tasación y regularización de inmuebles, asegurando que cada transacción 
              se realice con precisión y transparencia. También brindo asesoría profesional en la redacción de 
              escrituras públicas y privadas, garantizando que todos los documentos legales cumplan con las normativas 
              vigentes.
            </p>
            <br/>
            <p className="text-lg xl:text-xl text-gray-700 mt-8 ml-0 xl:ml-1 md:text-center xl:text-left">
              CRL Propiedades
            </p>
            <p className="text-lg xl:text-xl text-gray-700 ml-0 xl:ml-1 md:text-center xl:text-left">
              Director/as de CRL Propiedades.
            </p>
          </div>
        </div>
      </div>
    </div>
    {/* </Fade>  */}
  </Section>
  );
};

export default AboutComponent;
