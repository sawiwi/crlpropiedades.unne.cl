import React, { useEffect, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { iconsList } from '../Icons';
import { paginationTopLimit } from '../../constants/consts/company';
import { PropertiesContext } from '../../context/properties/PropertiesContext';

const PropertiesTop = ({
  totalItems,
  isGrid,
  setIsGrid,
  isList,
  setIsList,
  properties,
}) => {
  const { contextData } = useContext(PropertiesContext);
  const { sortOrder, handleSortChange } = contextData;
  const { pathname } = useLocation();
  const { BsFillGridFill, FaThList, FaMapMarkerAlt,FaSearchPlus} = iconsList;

  const getTitle = (pathname) => {
    switch (pathname) {
      case '/propiedades':
        return 'Propiedades';
      default:
        return 'Propiedades';
    }
  };

  useEffect(() => {
    document.title = getTitle(pathname);
  }, [pathname]);

  return (
    <div className=" py-5 px-3  mb-4  w-full">
      <div className="flex  items-center my-4">
        <div className="flex flex-col">
          <h1 className="text-4xl xl:text-4xl font-ligth text-primary uppercase text-center xl:text-start">
            {getTitle(pathname)}
          </h1>
        </div>
      </div>
      <div className="flex flex-wrap flex-row justify-between xl:justify-between items-center">
        {/* <small className="text-sm p-1 rounded">
          Encontradas por página: {properties?.length ?? 0}
        </small> */}
        <div className='flex flex-row justify-start'>   
          <p className="text-md text-lg p-1 mb-2 rounded">
          {totalItems ?? 0} Propiedades encontradas
          </p>
        </div>

        <div className='flex flex-row justify-start xl:justify-end'>
          <ul className="flex">
            <li className="w-[200px] sm:flex hidden mr-5 text-gray-600">
              <select
                value={sortOrder}
                onChange={handleSortChange}
                className="px-2 py-1 border outline-none focus:outline-none bg-white border-gray-200 w-[100%]"
              >
                <option value="">Ordenar</option>
                <option value="asc">Menor a mayor</option>
                <option value="desc">Mayor a menor</option>
              </select>
            </li>

            <li
              onClick={() => {
                setIsGrid(true);
                setIsList(false);
              }}
              className={`${
                isGrid ? 'bg-primary text-white' : 'bg-gray-300 text-white'
              } mx-1 p-2.5 cursor-pointer `}
            >
              <BsFillGridFill />
            </li>
            <li
              onClick={() => {
                setIsList(true);
                setIsGrid(false);
              }}
              className={`${
                isList
                  ? 'bg-primary text-white'
                  : 'bg-gray-300 text-white'
              } mx-1 p-2.5 cursor-pointer`}
            >
              <FaThList />
            </li>
       
          </ul>
            
              <Link to="https://unnepropiedades.cl/" target='_blank' >
                <div className='inline-flex items-center px-3 py-2 text-sm bg-primary-400 text-white rounded-sm hover:bg-primary'>
                  <span className='mx-3'>Opciones de búsqueda</span>   <FaSearchPlus className='text-base' />
                </div>
              </Link>
            
        </div>
        
      </div>
    </div>
  );
};

export default PropertiesTop;
