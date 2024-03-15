import React from 'react';
import { BusinessModel, Photo } from '../../interface/business';

type Props = {
  data: BusinessModel;
};

const defaultImgBusiness = 'https://placehold.co/600x400/png';
export const getImageBusiness = (photos?: Photo[]) => {
  if (!photos || !photos.length) return defaultImgBusiness;

  const randomNumber = Math.floor(Math.random() * photos.length);
  return `https://places.googleapis.com/v1/${photos[randomNumber].name}/media?maxHeightPx=400&maxWidthPx=400&key=${process.env.REACT_APP_API_KEY_GOOGLE_PLACE}`;
};

export const CardHorizontalBusiness = ({ data }: Props) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img
            className="h-48 w-full object-cover md:w-48"
            src={getImageBusiness(data?.photos)}
            alt={data.displayName.text}
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            {data.primaryTypeDisplayName.text}
          </div>
          <h2 className="block mt-1 text-lg leading-tight font-medium text-black">
            {data.displayName.text}
          </h2>
          <p className="mt-2 text-gray-500">{data.editorialSummary.text}</p>
          <div className="mt-4 flex items-center">
            <svg className="h-5 w-5 fill-current text-gray-500" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zM11 9h2v5h-2V9z" />
            </svg>
            <p className="ml-2 text-sm text-gray-600">
              {data.rating} ({data?.reviews?.length || 0} reviews)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const CardVerticalBusiness = ({ data }: Props) => {
  return (
    <div className="w-64 bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <img
        className="h-40 w-full object-cover"
        src={getImageBusiness(data?.photos)}
        alt={data.displayName.text}
      />
      <div className="p-6">
        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
          {data.primaryTypeDisplayName?.text || 'Desconocido'}
        </div>
        <h2 className="mt-2 text-xl font-semibold text-gray-800">{data.displayName.text}</h2>
        <p className="mt-2 text-gray-600">{data.editorialSummary?.text}</p>
        <div className="mt-4 flex items-center">
          <svg className="h-5 w-5 fill-current text-gray-500" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zM11 9h2v5h-2V9z" />
          </svg>
          <p className="ml-2 text-sm text-gray-600">
            {data.rating} ({data?.reviews?.length || 0} reviews)
          </p>
        </div>
      </div>
    </div>
  );
};

export const CardVerticalBusinessSkeleton = () => (
  <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl animate-pulse">
    <div className="md:flex">
      <div className="md:flex-shrink-0">
        <div className="h-48 w-full bg-gray-300"></div>
      </div>
      <div className="p-8 w-full">
        <div className="uppercase tracking-wide text-sm text-gray-500 font-semibold bg-gray-300 rounded mb-2 h-4"></div>
        <div className="h-6 bg-gray-300 rounded mb-4"></div>
        <div className="h-4 bg-gray-300 rounded mb-2"></div>
        <div className="h-4 bg-gray-300 rounded mb-2"></div>
        <div className="h-4 bg-gray-300 rounded"></div>
      </div>
    </div>
  </div>
);
