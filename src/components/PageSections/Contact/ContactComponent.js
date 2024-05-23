import React, {useEffect, useState} from "react";
import Section from "../../Section/Section";
import MeetingForm from "../../Form/MeetingForm";
import Map, {
    Marker,
    NavigationControl,
    GeolocateControl,
    FullscreenControl,
    Popup,
  } from 'react-map-gl';
  import MarkerIcon from '../../../assets/img/map/marker.png';
import ZoneInMap from "../../../constants/consts/zonaMarker";

const ContactComp = () =>{

  const [selectedZone, setSelectedZone] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (ZoneInMap.length > 0) {
        setIsLoading(false);
    }
  }, [ZoneInMap, isLoading]);
    return(
        <Section>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 my-14 mt-16 w-full">
                <div className="col-span-1 flex justify-center p-4">
                    <MeetingForm 
                        title="Contáctanos"
                        subtitle="Envianos un mensaje"
                    />
                </div>
                <div className="col-span-1 p-2">
                    <div className="xl:ml-1 2xl:ml-4 mb-3">
                        <h3 className="font-semibold text-xl text-primary">¿Dónde operamos habitualmente? </h3>
                        <small className="text-sm">Aquí podras ver las zonas donde frecuentamos.</small>
                    </div>
                    <Map
                        mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                        initialViewState={{
                        pitch: 45,
                        width: 400,
                        height: 400,
                        attributionControl: false,
                        longitude: -70.66966848671505,
                        latitude: -33.44002515016108,
                        zoom: 6,
                        style: {
                            width: 'auto',
                            height: '62vh',
                            borderRadius: '5px',
                        },
                        }}
                        mapStyle={'mapbox://styles/mapbox/streets-v12'}
                        style={{
                        width: 'auto',
                        height: '62vh',
                        borderRadius: '5px',

                        }}
                    >
                        {ZoneInMap?.map((item) => {

                        let lng = parseFloat(item.longitude)
                        let lat = parseFloat(item.latitude)

                        return (
                            <Marker
                            key={item?.id}
                            longitude={lng}
                            latitude={lat}
                            offsetLeft={-20}
                            offsetTop={-10}
                            style={{
                                cursor: 'pointer',
                                zIndex: 0,
                                margin: '0',
                                padding: '0',
                            }}
                            >
                            <div>
                                <img
                                src={MarkerIcon}
                                alt="marker"
                                height={45}
                                width={45}
                                onClick={() =>
                                    setSelectedZone((prev) =>
                                    prev && prev.id === item.id ? false : item
                                    )
                                }
                                />

                                {selectedZone &&
                                selectedZone.id === item.id && (
                                    <Popup
                                    longitude={lng}
                                    latitude={lat}
                                    onClose={() => selectedZone(true)}
                                    anchor="bottom"
                                    closeButton={false}
                                    closeOnClick={false}
                                    dynamicPosition={true}
                                    focusAfterOpen={false}
                                    offsetTop={-10}
                                    offsetLeft={-10}
                                    closeOnMove={false}
                                    style={{
                                        zIndex: 100,
                                        cursor: 'pointer',
                                    }}
                                    >
                                        <div className="max-w-sm bg-white">
                                            <div>
                                                <p className="mb-1 font-normal text-gray-700 dark:text-gray-700">
                                                    <b>Región:</b> {item.region ?? 'Region no encontrada'}
                                                </p>
                                                <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">
                                                    <b>Comuna:</b> {item?.comuna ??
                                                        'Comuna no encontrada'}{' '}
                                                </p>
                                            </div>
                                        </div>
                                  
                                    </Popup>
                                )}
                            </div>
                            </Marker>
                        );
                        })}
                        <NavigationControl />
                        <GeolocateControl />
                        <FullscreenControl />
                    </Map>
                </div>
            </div>
        </Section>
    )
}

export default ContactComp;