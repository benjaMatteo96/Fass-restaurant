import * as axios from 'axios';

const BASE_API_PLACE = 'https://places.googleapis.com';
export const apiPlace = axios.default.create({
  baseURL: `${BASE_API_PLACE}/v1`
});

// apiMap.defaults.headers['Access-Control-Allow-Origin'] = '*';
// apiMap.defaults.headers['Access-Control-Allow-Origin'] = '*';
