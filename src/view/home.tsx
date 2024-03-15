/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import SugerenciasJson from '../mock/sugerencias.json';
import { LayoutMain } from '../layout';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import { CardVerticalBusiness, CardVerticalBusinessSkeleton } from '../components/business/card';
import { responsiveMultiCarousel } from '../utils/responsive';
import { BusinessModel } from '../interface/business';
import { searchBusiness } from '../api/business';
import { Link } from 'react-router-dom';

const defaultValueSearch = 'Pizza';
let searchTimer: string | number | NodeJS.Timeout | null | undefined = null;

const Home = () => {
  const [loadingBusiness, setLoadingBusiness] = useState<boolean>(false);
  const [business, setBusiness] = useState<BusinessModel[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>(defaultValueSearch);

  const handleSearch = async (options: { textQuery: string }) => {
    const { textQuery } = options;
    setLoadingBusiness(true);

    try {
      const { places } = (await searchBusiness({ textQuery })).data;
      setBusiness(places);
    } catch (error) {
      console.error('Error fetching restaurants:', error);
    } finally {
      setLoadingBusiness(false);
    }
  };

  useEffect(() => {
    if (searchTimer) clearTimeout(searchTimer);

    searchTimer = setTimeout(() => {
      handleSearch({ textQuery: searchQuery || defaultValueSearch });
    }, 500);
  }, [searchQuery]);

  const formatResult = (item: any) => {
    return (
      <>
        <span style={{ display: 'block', textAlign: 'left' }}>{item.name}</span>
      </>
    );
  };

  const handleOnSearch = (string: string) => {
    setSearchQuery(string);
  };

  const handleOnSelect = (item: any) => {
    setSearchQuery(item.name);
  };

  return (
    <LayoutMain>
      <div className="md:flex justify-center">
        <div className="relative md:rounded-xl h-96 md:h-auto w-full md:w-9/12 bg-gray-800 text-white py-6 px-12 md:flex items-center justify-around">
          <img
            src="/plato-transparent.png"
            alt="Plato de comida"
            className="w-60 absolute bottom-0 left-0"
          />
          <div className="">
            <h1 className="text-4xl font-semibold p-5">
              Busca, descubre y encuentra el mejor restaurante
            </h1>
            <div className="flex items-center space-x-4 w-full">
              <div className="relative w-full">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </div>
                <ReactSearchAutocomplete
                  items={[...SugerenciasJson.food, ...SugerenciasJson.business]}
                  onSearch={handleOnSearch}
                  onSelect={handleOnSelect}
                  autoFocus
                  className="z-10"
                  inputSearchString={searchQuery}
                  formatResult={formatResult}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <br />
      <hr />

      <div className="md:flex justify-center">
        <div className="w-full md:w-3/5">
          <h2 className="p-3 text-2xl font-semibold">Seleccionados para ti</h2>

          <div className="mx-auto">
            <Carousel
              autoPlay={true}
              removeArrowOnDeviceType={['tablet', 'mobile']}
              infinite={true}
              responsive={responsiveMultiCarousel}
            >
              {loadingBusiness
                ? [0, 1, 2, 3, 4].map(skl => <CardVerticalBusinessSkeleton key={skl.toString()} />)
                : business.map(neg => (
                    <Link to={`/details/${neg.id}`} key={neg.id}>
                      <CardVerticalBusiness data={neg} />
                    </Link>
                  ))}
            </Carousel>
          </div>
        </div>
      </div>

      <div className="md:flex justify-center">
        <div className="w-full md:w-3/5">
          <h2 className="p-3 text-2xl font-semibold">Quizas te interese</h2>

          <div className="mx-auto">
            <Carousel
              autoPlay={true}
              removeArrowOnDeviceType={['tablet', 'mobile']}
              infinite={true}
              responsive={responsiveMultiCarousel}
            >
              {loadingBusiness
                ? [0, 1, 2, 3, 4].map(skl => <CardVerticalBusinessSkeleton key={skl.toString()} />)
                : business.reverse().map(neg => (
                    <Link to={`/details/${neg.id}`} key={neg.id}>
                      <CardVerticalBusiness data={neg} key={neg.id} />
                    </Link>
                  ))}
            </Carousel>
          </div>
        </div>
      </div>

      <div className="md:p-5 gap-4 grid md:grid-cols-3 xl:grid-cols-4"></div>
    </LayoutMain>
  );
};

export default Home;
