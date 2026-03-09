import type { Product } from "@/interfaces/product.interface";

export const productImageURLSetter = (product: Product): Product => {
    
    if (!product) { 
        return product;
    }

    return {
        ...product,
        images: product.images.map(i => {

            if (i.includes('http')) {
                return i;
            }

            return `${import.meta.env.VITE_API_URL}/files/product/${i}`;
        })
    }
}

export const setURLToImagesInProducts = (products: Product[]): Product[] => {
    
    if (!products) { 
        return [];
    }

    return products.map(p => productImageURLSetter(p));
}