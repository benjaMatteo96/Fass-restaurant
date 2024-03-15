import React from 'react';

export const Footer = () => (
  <footer className="bg-gray-800 text-gray-300 py-6">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h2 className="text-lg font-semibold mb-4">Contacto</h2>
          <ul className="space-y-2">
            <li>Teléfono: (123) 456-7890</li>
            <li>Email: info@example.com</li>
            <li>Dirección: 123 Calle Principal, Ciudad</li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-4">Enlaces Rápidos</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-500">
                Inicio
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-500">
                Productos
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-500">
                Servicios
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-500">
                Acerca de Nosotros
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-4">Redes Sociales</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-500">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-500">
                Twitter
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-500">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-500">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-4">Boletín Informativo</h2>
          <p>Suscríbete a nuestro boletín para recibir actualizaciones y ofertas especiales.</p>
          <form className="mt-4">
            <input
              type="email"
              className="bg-gray-700 rounded-md py-2 px-3 w-full"
              placeholder="Tu correo electrónico"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md mt-2 inline-block"
            >
              Suscribirse
            </button>
          </form>
        </div>
      </div>
    </div>
  </footer>
);
