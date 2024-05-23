import React, { useEffect, useState , Fragment} from 'react';
import { Dialog, Transition } from '@headlessui/react'
import ModalDetailProperty from './ModalDetailProperty';
// import GalleryCarousel from '../../../GalleryCarousel/GalleryCarousel';
import Modal from '../../../Modal/Modal';
import { Link } from 'react-router-dom';
import {
  truncateString,
  parseToCLPCurrency,
  parseToDecimal,
  ufToClp,
  clpToUf2
} from '../../../../utils';
import { company } from '../../../../constants/consts/company';
import { iconsList } from '../../../Icons';
import { is } from '@babel/types';
// import {Button, Modal, ModalBody} from 'reactstrap';

const PropertyCard = ({ data, isList, property,valueUf }) => {
  const [modalOpen, setModalOpen]= useState(false);
  const { id, title, image, address, commune,region, city, price, types, surface_m2 , bedrooms, bathrooms, covered_parkings_lots} = data;
  const {
    RiPencilRulerLine,
    FaBed,
    FaBath,
    BsFillCalendarCheckFill,
    GiHomeGarage,
    BsCheckCircle,
    BiMap, 
    TbArrowBigRightFilled
  } = iconsList;

  // console.log([data])

  const renderDetailProp = () => (
    <ModalDetailProperty
      property={data}
    />
  );

    // Validador de extension .jpg / .png/ .jpeg  para las imgs
    const validaImage = (image) => {
      if (image) {
        const validExtensions = ['.jpg', '.jpeg', '.png'];
    
        if (validExtensions.some(ext => image.toLowerCase().endsWith(ext))) {
          return (
            <a 
            onClick={()=> setModalOpen(true)}
            className="w-full2 xl:w-[550px]"
            >
            <img
              className={`${
                isList
                  ? 'h-[299px] w-[100%] md:w-[400px] xl:w-[400px] object-cover rounded-t-sm xl:rounded-none'
                  : 'rounded-t-sm'
              }  object-cover h-[299px] w-full p-4 xl:hover:scale-105 duration-300 xl:overflow-hidden`}
              src={image}
              alt={`top-img-${title}`}
              width="full"
              loading='lazy'
            />

          </a>

          );
        }
      }
      return (
        <a 
        onClick={()=> setModalOpen(true)}
        className=""
        >
        <img
          className={`${
            isList
              ? 'h-[299px] w-[100%] md:w-[400px] xl:w-[400px] object-cover rounded-t-sm xl:rounded-none'
              : 'rounded-t-sm'
          }  object-cover h-[299px] w-full p-4 xl:hover:scale-105 duration-300 xl:overflow-hidden`}
          src={`https://res.cloudinary.com/dbrhjc4o5/image/upload/v1681933697/unne-media/errors/not-found-img_pp5xj7.jpg`}
          alt={`top-img-${title}`}
          width="full"
          loading='lazy'

        />
        </a>
      );
    };


  const _renderItem = (name,code,price) => {
    let ufValue = price;
    let clpValue = price;

    if(valueUf.Valor != null){
      let valueIntUF = valueUf.Valor.replace(/\./g, '').replace(',', '.');
      if (name === 'UF' && code === 'UF'){
        clpValue = ufToClp(price,valueIntUF);
      }
      if (name === 'Peso Chileno' && code === 'CLP'){
        ufValue = clpToUf2(price,valueIntUF);
      }
    }
    else {
      clpValue = 0;
      ufValue ;

    }
  

  return (
      <div className= {`${isList ? 'flex justify-between w-full xl:flex xl:justify-between' : ""}flex justify-between`}>
        <h2 className="flex justify-end items-center mb-3 font-semibold text-xl  border-primary-400 p-1 rounded-sm text-primary">
          <span className="mr-1">UF </span>{' '}
          {parseToDecimal(ufValue)}
        </h2>
        <p className="flex justify-end items-center mb-3 font-semibold text-xl   border-primary-400 p-1 rounded-sm text-primary">
          <span className="mr-1"></span>{' '}
          {parseToCLPCurrency(clpValue)}
        </p>
      </div>
    )
  };

  return (
    <div
      className={`${
        isList
          ? 'flex flex-col items-center bg-white border border-gray-200 hover:shadow-lg md:flex-row xl:h-[299px] xl:w-[1480px] mx-auto'
          : 'w-full '
      } border rounded-sm border-gray-200 hover:cursor-pointer hover:shadow-xl transition duration-300 ease-in-out`}
    >


      {/* Declaramos la validación de imagen */}
      {validaImage(image)}

      <div className="p-3">
        <div className={`${isList ? 'grid grid-cols-1 w-full xl:flex xl:justify-between lg:w-full xl:w-full ': ""} grid grid-cols-span-1 text-center md:grid `}>
            {_renderItem(data?.currency?.name, data?.currency?.isoCode, data.price)}

        </div> 
        <h5 className="mb-2 h-18 text-md font-light xl:text-xl text-gray-700 text-center">
          {truncateString(title ?? 'Titulo de propiedad no registrado', 70)}
        </h5>
        <div className={`${isList ? 'flex justify-between w-full  md:w-[20vw] lg:w-[32vw] xl:w-[30vw]': ""} flex flex-row justify-between`}>
          <small className="mb-3 font-normal text-sm text-gray-400 flex items-start justify-start">
            <BiMap className="text-xl mr-1" />
            {truncateString(
              `${commune || 'Comuna no registrada'}, ${
                city || 'Region no registrada'
              }`,
              60
            )}
          </small>
          <small className="uppercase text-primary">Cod: {id}</small>
        </div>
        <div className='border border-bottom  mb-4'></div>
        <div className={`${isList ? 'grid grid-cols-1  w-full': ""} block md:w-full xl:flex xl:flex-row xl:justify-between`}>
          <div className="table w-full ">
            <div className="table-header-group">
              <div className="table-row">
                <div className="table-cell text-center text-sm px-1 font-semibold">Superficie</div>
                <div className="table-cell text-center text-sm px-1 font-semibold">Dormitorios</div>
                <div className="table-cell text-sm text-center px-1 font-semibold">Baños</div>
                <div className="table-cell text-sm text-center px-1 font-semibold">Garages</div>
              </div>
            </div>
            <div className="table-row-group ">
              <div className="table-row ">
              <div className="table-cell px-2 text-center">{bedrooms ?? 0} <small>m<sup>2</sup></small></div>
                <div className="table-cell px-2 text-center">{bedrooms ?? 0}</div>
                <div className="table-cell px-2 text-center">{bathrooms ?? 0}</div>
                <div className="table-cell px-2 text-center">{covered_parkings_lots ?? 0}</div>
  
              </div>
            </div>
          </div>
        </div>
   
      </div>
     
        <div className={`${isList ? 'flex justify-center items-center w-full sm:block  md:block lg:w-[30vw] xl:w-[20vw]': ""} grid grid-cols-span-1 md:flex md:justify-end `}>
          <button
            type="button"
            onClick={()=> setModalOpen(true)}
            className="inline-flex items-center px-4 py-2 w-40 m-2 text-end  xl:w-36 xl:h-10 xl:px-5  text-white bg-secondary rounded-sm hover:bg-secondary-400 focus:ring-4 focus:outline-none focus:ring-secondary-ligth"
          >
          <span className='text-lg items-center xl:text-sm m-1 inline-flex font-medium px-2'>Ver detalle</span>  
          </button>
        </div>
      
        <Modal
            renderTrigger={() => null}
            isOpenProp={modalOpen}
            renderContent={renderDetailProp}
            contentExtraClass="max-w-6xl"
            modalTitle={`Detalle de propiedad`}
            modalSubtitle={''}
            onCloseModal={() => {
              setModalOpen(false);
            }}
          />

      </div>

  
  );
};

export default PropertyCard;
