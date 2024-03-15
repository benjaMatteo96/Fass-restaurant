import React, { useEffect, useRef, useState } from 'react';
import { LayoutMain } from '../layout';
import StyleMap from '../mock/styleMap.json';
import GoogleMapReact from 'google-map-react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { detailsBusiness } from '../api/business';
import { BusinessModel } from '../interface/business';
import { useNavigate, useParams } from 'react-router';
import { getImageBusiness } from '../components/business/card';
import { Badge } from '../components/badge';
import { OpeningHours } from '../components/business/openingHours';
import { ReviewBusiness } from '../components/business/review';
import { EnpointMap } from '../components/maps/point-map';

const Details = () => {
    const [loadingBusiness, setLoadingBusiness] = useState<boolean>(false);
    const [business, setBusiness] = useState<BusinessModel | null>(null);
    const ref = useRef<HTMLInputElement | null>(null);
    const params = useParams();
    const navigate = useNavigate();

    const handleDetails = async (options: { id: string }) => {
        const { id } = options;
        setLoadingBusiness(true);
    
        try {
          const response = (await detailsBusiness({ id })).data;
          setBusiness(response);
        } catch (error) {
          console.error('Error fetching restaurants:', error);
        } finally {
          setLoadingBusiness(false);
        }
      };
    
      useEffect(() => {
        if (params.id) handleDetails({ id: params.id });
        else navigate('/');
      }, [params.id]);

    return (
        <LayoutMain>
            <div className='flex justify-center mb-3'>
                <Breadcrumbs items={[
                    { label: 'Inicio', url: '/' },
                    { label: `Detalle de ${business?.displayName.text}`, url: `/details/${business?.id}` }
                ]} />
            </div>

            <header className="grid md:grid-cols-3 gap-0">
                <div className="col-span-1">
                    <img src={getImageBusiness(business?.photos)} alt="Imagen 1" className="h-72 w-full object-cover" />
                </div>
                <div className="col-span-1 hidden md:block">
                    <img src={getImageBusiness(business?.photos)} alt="Imagen 2" className="h-72 w-full object-cover" />
                </div>
                <div className="col-span-1 hidden md:block">
                    <img src={getImageBusiness(business?.photos)} alt="Imagen 3" className="h-72 w-full object-cover" />
                </div>
            </header>

            <div className="bg-gray-100 min-h-screen py-12">
                <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="p-6">
                        <h2 className="text-3xl font-bold mb-4">{business?.displayName.text}</h2>
                        <div className="flex items-center mb-3 text-gray-600">
                            <svg className="w-4 h-4 fill-current mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/><path fillRule="evenodd" d="M17.293 8.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-8-8a1 1 0 111.414-1.414L10 14.586l6.293-6.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                            <span className='mr-3'>Dirección:</span> {loadingBusiness ? <div className="h-4 w-60 mt-4 bg-gray-300 rounded mb-4"></div> : <p>{business?.formattedAddress}</p>}
                        </div>
                        <div className="flex items-center mb-3 text-gray-600">
                            <svg className="w-4 h-4 fill-current mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 100-12 6 6 0 000 12zm0-9a1 1 0 11-2 0 1 1 0 012 0zm0 4a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"/></svg>
                            <span className='mr-3'>Categoría:</span> {loadingBusiness ? <div className="h-4 w-60 mt-4 bg-gray-300 rounded mb-4"></div> : <p>{business?.primaryTypeDisplayName.text}</p>}
                        </div>
                        <div className="flex items-center mb-3 text-gray-600">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-browser-chrome w-4 h-4 fill-current mr-2" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M16 8a8 8 0 0 1-7.022 7.94l1.902-7.098a3 3 0 0 0 .05-1.492A3 3 0 0 0 10.237 6h5.511A8 8 0 0 1 16 8M0 8a8 8 0 0 0 7.927 8l1.426-5.321a3 3 0 0 1-.723.255 3 3 0 0 1-1.743-.147 3 3 0 0 1-1.043-.7L.633 4.876A8 8 0 0 0 0 8m5.004-.167L1.108 3.936A8.003 8.003 0 0 1 15.418 5H8.066a3 3 0 0 0-1.252.243 2.99 2.99 0 0 0-1.81 2.59M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4"/>
                            </svg>
                            <span>Sitio Web:</span> {loadingBusiness ? <div className="h-4 w-60 mt-4 bg-gray-300 rounded mb-4"></div> : <p>{business?.websiteUri ? <a className='text-blue-500' href={business?.websiteUri} target='_blank'>{business?.websiteUri}</a> : '*No especificado*'}</p>}
                        </div>
                        <div className="flex items-center mb-3 text-gray-600">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-telephone w-4 h-4 fill-current mr-2" viewBox="0 0 16 16">
                                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
                            </svg>
                            <span>Teléfono:</span> {loadingBusiness ? <div className="h-4 w-60 mt-4 bg-gray-300 rounded mb-4"></div> : <p>{business?.internationalPhoneNumber}</p>}
                        </div>
                        <div className="flex items-center mb-3 text-gray-600">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-truck w-4 h-4 fill-current mr-2" viewBox="0 0 16 16">
                                <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5zm1.294 7.456A2 2 0 0 1 4.732 11h5.536a2 2 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456M12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2"/>
                            </svg>
                            <span>Entregas:</span> {loadingBusiness ? <div className="h-4 w-60 mt-4 bg-gray-300 rounded mb-4"></div> : <p>{business?.delivery ? 'Si' : 'No'}</p>}
                        </div>
                        <div className="flex items-center mb-3 text-gray-600">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-table w-4 h-4 fill-current mr-2" viewBox="0 0 16 16">
                                <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm15 2h-4v3h4zm0 4h-4v3h4zm0 4h-4v3h3a1 1 0 0 0 1-1zm-5 3v-3H6v3zm-5 0v-3H1v2a1 1 0 0 0 1 1zm-4-4h4V8H1zm0-4h4V4H1zm5-3v3h4V4zm4 4H6v3h4z"/>
                            </svg>
                            <span>Reservaciones:</span> {loadingBusiness ? <div className="h-4 w-60 mt-4 bg-gray-300 rounded mb-4"></div> : <p>{business?.reservable ? 'Si' : 'No'}</p>}
                        </div>
                        <div className="flex items-center mb-3 text-gray-600">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-card-text w-4 h-4 fill-current mr-2" viewBox="0 0 16 16">
                                <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z"/>
                                <path d="M3 5.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3 8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 8m0 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5"/>
                            </svg>
                            <span>Sobre <strong>{business?.displayName?.text}</strong>:</span> {loadingBusiness ? <div className="h-4 w-60 mt-4 bg-gray-300 rounded mb-4"></div> : <p>{business?.editorialSummary?.text || '*No description*'}</p>}
                        </div>
                        <div className="flex items-center mb-3 text-gray-600">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-person-arms-up w-4 h-4 fill-current mr-2" viewBox="0 0 16 16">
                                <path d="M8 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/>
                                <path d="m5.93 6.704-.846 8.451a.768.768 0 0 0 1.523.203l.81-4.865a.59.59 0 0 1 1.165 0l.81 4.865a.768.768 0 0 0 1.523-.203l-.845-8.451A1.5 1.5 0 0 1 10.5 5.5L13 2.284a.796.796 0 0 0-1.239-.998L9.634 3.84a.7.7 0 0 1-.33.235c-.23.074-.665.176-1.304.176-.64 0-1.074-.102-1.305-.176a.7.7 0 0 1-.329-.235L4.239 1.286a.796.796 0 0 0-1.24.998l2.5 3.216c.317.316.475.758.43 1.204Z"/>
                            </svg>
                            <p>Para niños: {business?.menuForChildren ? 'Si' : 'No'}</p>
                        </div>
                        <div className="flex items-center mb-3 text-gray-600">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-wallet2 w-4 h-4 fill-current mr-2" viewBox="0 0 16 16">
                                <path d="M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5z"/>
                            </svg>
                            <p>Opciones de pagos: {!business?.paymentOptions && '*No especificado*'} {business?.paymentOptions?.acceptsCashOnly && <Badge text='Efectivo' />} {business?.paymentOptions?.acceptsCreditCards && <Badge text='Tarjeta de credito' />} {business?.paymentOptions?.acceptsDebitCards && <Badge text='Tarjeta de debito' />}</p>
                        </div>
                        <div className="flex items-center mb-3 text-gray-600">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-star w-4 h-4 fill-current mr-2" viewBox="0 0 16 16">
                                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
                            </svg>
                            <p>Calificación: {business?.rating}</p>
                        </div>
                    </div>

                    <div className="bg-gray-200 p-6">
                    <h3 className="text-xl font-bold mb-4">Horarios de Atención</h3>
                        {business?.regularOpeningHours?.weekdayDescriptions ? <OpeningHours weekdayDescriptions={business?.regularOpeningHours.weekdayDescriptions} /> : '*No especificado*'}
                    </div>

                    <div className="p-6">
                        <h3 className="text-xl font-bold mb-4">Reseñas</h3>
                        {business?.reviews.map((review, index) => (
                            <ReviewBusiness review={review} key={index.toString()} />   
                        ))}
                    </div>

                    <div className="p-6">
                        <h3 className="text-xl font-bold mb-4">Ubicación</h3>
                        <div style={{ height: 400, width: '100%' }} ref={ref}>
                            {business ? <GoogleMapReact
                                bootstrapURLKeys={{ key: `${process.env.REACT_APP_KEY_MAP}` }}
                                defaultCenter={{
                                    lat: business?.location.latitude,
                                    lng: business?.location.longitude,
                                }}
                                options={{
                                    styles: StyleMap,
                                }}
                                yesIWantToUseGoogleMapApiInternals
                                defaultZoom={16}
                                >
                                <EnpointMap
                                    imagen={getImageBusiness(business?.photos)}
                                    lat={business.location.latitude}
                                    lng={business.location.longitude}
                                    text={business.displayName.text}
                                    onPress={() => window.open(business.googleMapsUri, 'blank')}
                                />
                            </GoogleMapReact> : null}
                        </div>
                    </div>
                </div>
            </div>
        </LayoutMain>
    )
}

export default Details;
