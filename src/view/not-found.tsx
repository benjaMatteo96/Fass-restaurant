import React from 'react';
import { Link } from 'react-router-dom';

export const NotFound = () => (
  <div className="bg-gray-100 h-screen flex flex-col items-center justify-center">
    <h1 className="text-5xl text-gray-800 mb-4">404</h1>
    <h2 className="text-2xl text-gray-600 mb-8">Página no encontrada</h2>
    <p className="text-gray-600">La página que estás buscando no existe.</p>
    <Link to="/" className="text-blue-500 hover:text-blue-700 mt-4">
      Volver al inicio
    </Link>
  </div>
);
