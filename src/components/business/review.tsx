import React from 'react';
import { Review } from '../../interface/business';

type Props = {
  review: Review;
};

export const ReviewBusiness = ({ review }: Props) => (
  <div className="mb-6 border-b border-gray-300 pb-4">
    <div className="flex items-center mb-2">
      <img
        src={review.authorAttribution.photoUri}
        alt="Avatar"
        className="w-10 h-10 rounded-full mr-4"
      />
      <div>
        <p className="font-semibold">{review.authorAttribution.displayName}</p>
        <p className="text-gray-600">{review.relativePublishTimeDescription}</p>
      </div>
    </div>
    <p className="mb-2">{review.originalText?.text || '*No especificado*'}</p>
    <div className="flex items-center">
      <div className="flex text-yellow-400">
        {Array.from({ length: review.rating }, (_, index) => (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            key={index.toString()}
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-star-fill"
            viewBox="0 0 16 16"
          >
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
          </svg>
        ))}
      </div>
      <p className="ml-2">{review.rating}</p>
    </div>
  </div>
);
