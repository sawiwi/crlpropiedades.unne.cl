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
              className="object-cover object-center rounded-full shadow-lg h-[280px] w-[280px] mt-10 mx-5 md:mx-2 md:w-[300px] md:h-[300px] xl:w-[410px] xl:h-[410px] 2xl:my-10 2xl:mx-20 hover:scale-110 duration-300"
            />
          </div>
          <div className="col-span-2 lg:col-span-1 text-base 2xl:text-lg text-gray-700 mt-8 ml-0 xl:ml-1 xl:text-left">
            <p className='mb-3'>                    
            Como agente inmobiliario ofrezco un servicio integral en la compra, venta, arriendo y administración de 
            propiedades. Mi compromiso es brindarles una grata experiencia, respaldada por mi conocimiento del mercado 
            inmobiliario y una dedicación exclusiva a sus necesidades.
            </p>
            <p className='font-bold mb-3'>                    
            Servicios ofrecidos:
              <ul className='font-light text-base list-disc gap-2 md:ml-6'>
                <li>
                 <p className='font-semibold'>Compra y Venta de Propiedades:</p> Asistencia personalizada en cada etapa del proceso, desde la búsqueda hasta la firma del contrato.
                </li>
                <li>
                  <p className='font-semibold'>Arriendos:</p> Selección meticulosa de inquilinos y gestión eficiente de propiedades para garantizar su tranquilidad.
                </li>
                <li>
                  <p className='font-semibold'>Administración de Propiedades:</p> Supervisión proactiva y mantenimiento de su inversión inmobiliaria.
                </li>
              </ul>
            </p>
            <p className='mb-3'>
              Nuestro equipo ofrece asesoría legal especializada en bienes raíces, incluyendo la redacción de 
              escrituras públicas y privadas, así como la gestión de posesiones efectivas. Garantizamos la elaboración 
              de documentos legales con la máxima atención y conformidad con las normativas vigentes. Además, brindamos 
              servicios de tasación y regularización de inmuebles, asegurando precisión y transparencia en cada transacción. 
              Mi objetivo es que cada paso en el mercado inmobiliario esté respaldado por información confiable y una
               valoración justa. Me comprometo a ofrecer servicios de alta calidad y profesionalidad, guiando y apoyando 
               para transformar sus objetivos inmobiliarios en realidades tangibles.
            </p>
            
            <div className='text-base xl:text-lg'>
              <p className=" text-gray-700 mt-8 ml-0 xl:ml-1 md:text-center xl:text-left">
                Carolina Ruiz Lobos.
              </p>
              <p className=" text-gray-700 mt-8 ml-0 xl:ml-1 md:text-center xl:text-left">
                Habilitada en Derecho
              </p>
              <p className="text-gray-700 ml-0 xl:ml-1 md:text-center xl:text-left">
                Director/a de CRLpropiedades
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
    {/* </Fade>  */}
  </Section>
  );
};

export default AboutComponent;
