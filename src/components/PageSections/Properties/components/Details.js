import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  parseToCLPCurrency,
  clpToUf,
  ufToClp,
  parseToDecimal,
} from '../../../../utils';
import ExchangeRateServices from '../../../../services/ExchangeRateServices';
import { iconsList } from '../../../Icons';
import LogoDetail from '../../../../assets/img/logo/logo.webp'


const Details = ({ property }) => {
  const [ufCurrentValue, setUfCurrentValue] = useState(0);
  const { company, price,types, operation } = property;
  const { RiPencilRulerLine, FaBed, FaBath } = iconsList;

  const getExchangeRateUF = async () => {
    try {
      const response = await ExchangeRateServices.getExchangeRateUF();
      const ufValue = response?.UFs[0]?.Valor;
      const ufValueAsNumber = parseFloat(ufValue.replace(',', '.'));
      setUfCurrentValue(ufValueAsNumber);
    } catch (error) {
      console.log('error', error);
    }
  };

  useEffect(() => {
    getExchangeRateUF();
  }, [ufCurrentValue]);

  return (
    <div className="border rounded-sm p-4 xl:p-3 2xl:pl-6">
      {/* <h3 className="border-b pb-1 text-gray-800 text-xl">Empresa {company}</h3> */}
      <div className='grid grid-cols-1 2xl:grid-cols-3'>
        <div className='col-span-2'>
          <p className="text-md text-gray-400 my-2">
            Publicado por:{' '}
            <span className="text-gray-800">
              {company ?? 'Empresa no registrada'}
            </span>
          </p>
            <div className="text-md text-gray-400 my-3">
            <p className="text-gray-400">Desde</p>

            {property?.currency?.name === 'UF' &&
              property?.currency?.isoCode === 'UF' && (
                <>
                  <h4 className="text-2xl text-gray-700 font-semibold">
                    UF {parseToDecimal(property?.price)}
                  </h4>
                  <p>
                    CLP:{' '}
                    {parseToCLPCurrency(ufToClp(property?.price, ufCurrentValue))}
                  </p>
                </>
              )}

            {property?.currency?.name === 'Peso Chileno' &&
              property?.currency?.isoCode === 'CLP' && (
                <>
                  <h4 className="text-2xl text-gray-700 font-semibold">
                    UF {clpToUf(property?.price, ufCurrentValue)}
                  </h4>
                  <p>
                    CLP:{''} {parseToCLPCurrency(property?.price || 0)}
                  </p>
                </>
              )}
          </div>

          <div className="my-5 text-sm text-gray-400">
            <p className="flex items-center my-1 text-base ">
            Tipo de inmueble:
              <span className="text-gray-800 mr-1 text-base font-normal pl-1">
              {types ?? ""}
              </span> 
            </p>

            <p className="flex items-center my-1 text-base ">
              Tipo de operacion :
              <span className="text-gray-800 mr-1 text-base font-normal pl-1">
              {operation ?? ""}
              </span> 
            </p>

            {/* <div className="flex items-center my-1">
              <span className="text-gray-400 mr-1">
                <FaBath />
              </span>
              {bathrooms ?? 0} baños
            </div> */}
          </div>
        </div>
        <div className='col-span-1'>
          <div className='2xl:my-2 2xl:mt-6 2xl:mx-8 2xl:py-12'>
            <h3 className="pb-1 text-gray-700 text-xl ">{company}</h3>
            <div className='my-2  2xl:my-2 2xl:mt-2 '>
              {/* <h2 className='text-7xl font-bold text-primary'>LOGO</h2> */}
              <a href='/inicio' smooth="true" >
                <img src={LogoDetail} className='w-36 h-32 xl:w-40 xl:h-36'/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
