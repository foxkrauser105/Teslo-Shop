import { tesloApi } from "@/api/tesloApi"
import type { ProductsResponse } from "@/interfaces/products.response";
import { setURLToImagesInProducts } from "@/lib/product-images-setter";

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

    const productsWithImageUrl = setURLToImagesInProducts(data.products);

    return {
        ...data,
        products: productsWithImageUrl
    }
}