import React from 'react';
import MainCarousel from '../../../Carousel/MainCarousel';
import { mainCarouselData } from '../../../../data';

const CarouselSection = () => (
  <div className="grid grid-cols-1 xl:grid-cols-3" id='IndexSection'>
      <div className="grid col-span-1 xl:col-span-3 ">
        <div className="object-cover w-[100%] h-[400px] xl:h-[500px]" >
          <MainCarousel data={mainCarouselData} />
        </div>
      </div>
  </div>



);

export default CarouselSection;
