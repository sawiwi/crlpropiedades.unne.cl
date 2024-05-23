import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import '../../assets/styles/components/Carousel/MainCarousel.css';
import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-scroll';

const MainCarousel = ({ data }) => {
  return (
    <AwesomeSlider
      bullets={false}
      mobileTouch={true}
      organicArrows={true}
      infinite={true}
      className="awsBtn"
    >
      {data?.length > 0
        ? data.map((slide) => ( 
            <div key={slide.id}>
              <img
                src={slide.img}
                alt="slide-1"
                className="bg-center bg-no-repeat bg-cover brightness-100 w-screen h-[400px] xl:h-[600px]"
                style={{
                  backgroundPosition: 'center',
                  objectFit: 'cover',
                }}
              />
       
              <div className=" absolute top-0 left-0 w-full items-center xl:w-[100%] h-full  xl:p-2 xl:pl-4 bg-black bg-opacity-50">
                  <Fade delay={100} direction='left' triggerOnce='false'>
                    <div className="grid grid-cols-1 mx-auto p-10 pt-24 xl:pt-28 ">
                      <h2 className="text-3xl font-bold xl:text-[40px] text-center pb-2 text-white drop-shadow-xl xl:my-3 xl:mx-4 w-full">
                        {slide.title}
                      </h2>
                      <p className='text-lg xl:text-xl text-white text-center my-3'>{slide.desc}</p>
                      <div className='flex justify-center'>
                      {slide.id !== 1 ? <a href='https://unne.cl/' target='_blank' className='inline-flex items-center drop-shadow-lg p-10 py-2 px-11 w-44 m-2  text-center  xl:w-44 xl:h-12 text-white bg-primary-400 rounded-sm hover:bg-primary-300 duration-200 focus:ring-4 focus:outline-none focus:ring-primary-300 text-lg'>Ir a unne</a> : <Link href='#AboutSectionScroll'  smooth="true" duration={700}  offset={-130} className='inline-flex items-center drop-shadow-lg p-10 py-2 px-11 w-44 m-2  text-center  xl:w-44 xl:h-12 text-white bg-primary-400 rounded-sm hover:bg-primary-300 duration-200 focus:ring-4 focus:outline-none focus:ring-primary-300 text-xl'>Ver más</Link> }
                      {/* <Link href='#AboutSectionScroll' smooth="true" duration={700}  offset={-130} className='inline-flex items-center drop-shadow-lg p-10 py-2 px-11 w-44 m-2  text-center  xl:w-44 xl:h-12 text-white bg-secondary-400 rounded-sm hover:bg-secondary-300 duration-200 focus:ring-4 focus:outline-none focus:ring-primary-300 text-xl'>Ver más</Link> */}
                      </div>  
                    </div>
                  </Fade>

                </div>
         
            </div>
          ))
        : null}
    </AwesomeSlider>
  );
};

export default MainCarousel;
