import React from 'react';
import ImageGallery from 'react-image-gallery';
import PropertiesServices from '../../services/PropertiesServices';
import { useState } from 'react';
import { useEffect } from 'react';
import { company } from '../../constants/consts/company';


const GalleryCarousel = ({property}) => {
  const [propertyId, setPropertyId]= useState("")


  const getPropertyForId= async (id, statusId, companyId)=>{
    const data= await PropertiesServices.getProperty(id, statusId, companyId);

    setPropertyId(data)
    }


    useEffect(()=>{
      getPropertyForId(property.id, 1, company.companyId)
    }, [])

  // const getImages = () =>
  // propertyId?.images
  //     ? propertyId?.images?.map((_, idx) => ({
  //         original: `https://accion.panal.house//Imagenes//${
  //           propertyId?.id
  //         }//${idx + 1}.jpg`,
  //         thumbnail: `https://accion.panal.house//Imagenes//${
  //           propertyId?.id
  //         }//${idx + 1}.jpg`,
  //       }))
  //     : [];


  const getImages = (images) =>
      images
        ? images?.map((_, idx) => {
            const image = images[idx];
            const validExtensions = ['.jpg', '.jpeg', '.png'];

    
            if (image && validExtensions.some(ext => image.toLowerCase().endsWith(ext))) {
              return {
                original: `${image }`,
                thumbnail: `${image }`,
              };
            }
    
            // Devolver un objeto en caso si la extensión no es válida
            return {
              original:`https://res.cloudinary.com/dbrhjc4o5/image/upload/v1681933697/unne-media/errors/not-found-img_pp5xj7.jpg`,
              thumbnail:`https://res.cloudinary.com/dbrhjc4o5/image/upload/v1681933697/unne-media/errors/not-found-img_pp5xj7.jpg`
            }
       ;
          })
        : [];

  return (
    <ImageGallery
      autoPlay={true}
      slideDuration={500}
      slideInterval={3000}
      infinite={true}
      showNav={false}
      showPlayButton={false}
      showFullscreenButton={false}
      showBullets={false}
      showThumbnails={true}
      thumbnailPosition="bottom"
      items={getImages(propertyId?.images)}
    />
  );
};

export default GalleryCarousel;
