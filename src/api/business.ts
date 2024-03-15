import { apiPlace } from '.';

export const searchBusiness = async (options: { textQuery: string }) => {
  const { textQuery } = options;

  return await apiPlace({
    method: 'POST',
    url: `/places:searchText`,
    headers: {
      'X-Goog-Api-Key': process.env.REACT_APP_API_KEY_GOOGLE_PLACE,
      'X-Goog-FieldMask': '*'
    },
    data: { textQuery }
  });
};

export const detailsBusiness = async (options: { id: string }) => {
  const { id } = options;

  return await apiPlace({
    method: 'GET',
    url: `/places/${id}`,
    headers: {
      'X-Goog-Api-Key': process.env.REACT_APP_API_KEY_GOOGLE_PLACE,
      'X-Goog-FieldMask': '*'
    }
  });
};
