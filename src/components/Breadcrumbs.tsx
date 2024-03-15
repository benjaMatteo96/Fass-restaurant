import React from 'react';
import { Link } from 'react-router-dom';

type Item = {
  label: string;
  url: string;
};

type Props = {
  items: Item[];
};

export const Breadcrumbs = ({ items }: Props) => {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="list-none p-0 inline-flex">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <Link to={item.url} className="text-gray-500 hover:text-gray-700">
              {item.label}
            </Link>
            {index < items.length - 1 && (
              <svg
                className="h-5 w-auto mx-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.707 3.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L14.586 10 10.293 5.707a1 1 0 010-1.414zM4 11a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};
