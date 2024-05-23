import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { PropertiesContext } from '../../../../context/properties/PropertiesContext';
import PropertiesTop from '../../../Navigation/PropertiesTop';
import PropertyCard from './PropertyCard';
import Pagination from '../../../Pagination';
// import AdvancedSearch from '../../../Form/AdvancedSearch';
import Spinner from '../../../Spinner/Spinner';
import NotFound from '../../../Message/NotFound';
import { iconsList } from '../../../Icons';
import styles from '../../../../styles/components/OutstandingProject/OutstandingProject.module.css';
import { truncateStringSmall } from '../../../../utils';
import { company } from '../../../../constants/consts/company';

const Properties = ({ isGrid, isList, setIsGrid, setIsList }) => {
  const { contextData } = useContext(PropertiesContext);
  const {
    properties,
    allProperties,
    setProperties,
    propertiesToShow,
    setPropertiesToShow,
    page,
    totalPages,
    totalItems,
    handlePageChange,
    isLoading,
    notFoundMsg,
    valueUf,
  } = contextData;
  const { RiArrowDownSLine } = iconsList;
  const [showMore, setShowMore] = useState(false);
  const [isOpenForm, setIsOpenForm] = useState(true);
  const { MdOutlineFilterList, MdOutlineFilterListOff } = iconsList;

  const showMoreProperties = () => {
    const propiedadesActuales = propertiesToShow.length;
    const nuevasPropiedades = allProperties.slice(
      propiedadesActuales,
      propiedadesActuales + 10
    );
    setPropertiesToShow([...propertiesToShow, ...nuevasPropiedades]);

    if (propiedadesActuales + 10 >= allProperties.length) {
      setShowMore(false);
    }
  };

  const handleToggleForm = () => setIsOpenForm(!isOpenForm);

  const seeLessProperties = () => {
    setPropertiesToShow(allProperties.slice(0, 10));
    setShowMore(true);
  };

  const outstandingProperties = propertiesToShow.filter(
    (property) => property.highlighted === true
  );

  return (
    <React.Fragment>
      <div className="flex relative flex-col w-[100%] ">
        <PropertiesTop
          {...{
            totalItems,
            page,
            isGrid,
            setIsGrid,
            isList,
            setIsList,
            properties,
          }}
        />
        <div className="flex flex-col-reverse md:flex-row ">
          <div className="w-full md:w-5/5  mb-48">
            {/* PROPERTIES LIST */}
            {isLoading && <Spinner />}
            {notFoundMsg && <NotFound message={notFoundMsg} />}
            <ul
              className={`${
                isGrid
                  ? 'grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-3 gap-4 p-2'
                  : 'flex flex-col gap-3'
              }`}
            >
              {properties.map((character) => (
                <PropertyCard
                  key={character.id}
                  data={character}
                  isList={isList}
                  valueUf={valueUf}
                />
              ))}
            </ul>
            {/* PROPERTIES PAGINATION */}
            <div>
              <Pagination
                currentPage={page}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Properties;
