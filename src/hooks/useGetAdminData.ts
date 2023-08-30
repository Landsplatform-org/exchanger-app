import type { MainSearchParams } from '../interfaces/MainSearchParams';
import axios from 'axios';
import queryString from 'query-string';

export const useGetAdminData = async (searchParams: MainSearchParams, source: string) => {
  const urlParams = {
    limit: searchParams.limit,
    page: searchParams.page,
  };
  
  const searchQuery = queryString.stringify(urlParams);

  const response = await axios.get(
    `http://localhost:5000/api/${source}/get?${searchQuery}`
  );
  const data = response.data.data;

  return data;
}