import React from 'react';

type Props = {
  weekdayDescriptions: string[];
};

export const OpeningHours = ({ weekdayDescriptions }: Props) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
      <ul className="divide-y divide-gray-200">
        {weekdayDescriptions.map(description => (
          <li key={description} className="py-2">
            {description}
          </li>
        ))}
      </ul>
    </div>
  );
};
