import  { type SearchParams } from '../@types/SearchParams';
import queryString from 'query-string';

export const useGetData = async (searchParams: SearchParams, source: string, session: any) => { 
  const searchQuery = queryString.stringify(searchParams);

  const response = await fetch(`http://localhost:5000/api/${source}/get?${searchQuery}`, {
    headers: {
      authorization: `Bearer ${session?.tokens.access}`,
      "Content-Type": "application/json",
    },
  });

  if(response.ok) {
    const { data } = await response.json();
    return data;
  }
}