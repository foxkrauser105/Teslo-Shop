import { tesloApi } from "@/api/tesloApi"
import type { ProductsResponse } from "@/interfaces/products.response";

interface Options {
    limit?: number | string | undefined;
    offset?: number | string | undefined;
    gender?: string | undefined;
    sizes?: string | undefined,
    minPrice?: number,
    maxPrice?: number,
    query?: string | undefined
}

export const getProductsAction = async(options: Options): Promise<ProductsResponse> => {

    const { query: q, ... rest } = options; //Destructuring & Spreading (Runtime)

    const { data } = await tesloApi.get<ProductsResponse>('/products', {
        params: {
            q, 
            ...rest
        }
    });

    const productsWithImageUrl = data.products.map(p => ({
        ...p,
        images: p.images.map(i => `${import.meta.env.VITE_API_URL}/files/product/${i}`)
    }));

    return {
        ...data,
        products: productsWithImageUrl
    }
}