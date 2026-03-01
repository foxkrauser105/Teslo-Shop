import { useQuery } from '@tanstack/react-query'
import { getProductsAction } from '../actions/get-products.action'
import { useParams, useSearchParams } from 'react-router'
import { URLParamKeysTypes } from '@/shared/types/URLParamKeysTypes';
import { PriceTypes, type PriceType } from '../../shared/types/PriceTypes';

export const useProducts = () => {

  const [ searchParams ] = useSearchParams();
  const { gender } = useParams();

  const limit = searchParams.get(URLParamKeysTypes.Limit) || 9;
  const page = searchParams.get(URLParamKeysTypes.Page) || 1;
  const offset = (Number(page) - 1) * Number(limit);
  const sizes = searchParams.get(URLParamKeysTypes.Sizes) || undefined;
  const price: PriceType = searchParams.get(URLParamKeysTypes.Price) as PriceType || PriceTypes.Any;
  const query = searchParams.get(URLParamKeysTypes.Query) || undefined;
  let minPrice = undefined;
  let maxPrice = undefined;

  if (price.includes('-'))
  {
    const priceRange = price.split('-');
    minPrice = Number(priceRange[0]);
    maxPrice = Number(priceRange[1])
  }
  else 
  {
    const singlePrice = Number(price.replaceAll(/\+/g, ''));

    if (!isNaN(singlePrice)) {
      minPrice = singlePrice;
    }
  }

  return useQuery({
    queryKey: ['products', { offset, limit, gender, sizes, minPrice, maxPrice, query }],
    queryFn: () => 
      getProductsAction({
        limit: isNaN(+limit) ? 9 : limit,
        offset: isNaN(offset) ? 0 : offset,
        gender,
        sizes,
        minPrice,
        maxPrice,
        query
      }),
    staleTime: 1000 * 60 * 5
  })
}
