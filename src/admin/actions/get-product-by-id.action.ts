import type { Product, SizeType } from "@/interfaces/product.interface";
import { StringUtils } from "@/shared/utils/stringUtils";
import { Gender } from '../../interfaces/product.interface';
import type { User } from "@/interfaces/user.interface";
import { tesloApi } from "@/api/tesloApi";
import { productImageURLSetter } from "@/lib/product-images-setter";

export const getProductByIdAction = async(id: string): Promise<Product> => {
    
    if (StringUtils.StringIsNullEmptyOrWhiteSpace(id)){
        throw new Error('Id is required.');
    }

    if (id === 'new') {
        return {
            id: 'new',
            title: '',
            price: 0,
            description: '',
            slug: '',
            stock: 0,
            sizes: [] as SizeType[],
            gender: Gender.Unisex,
            tags: [],
            images: [],
            user: {} as User
        } as Product
    }

    const { data: product } = await tesloApi.get<Product>(`/products/${ id }`);

    const productWithImageUrl = productImageURLSetter(product);
    
    return productWithImageUrl;

}