import type { User } from "./user.interface";

export interface Product {
    id:          string;
    title:       string;
    price:       number;
    description: string;
    slug:        string;
    stock:       number;
    sizes:       SizeType[];
    gender:      string;
    tags:        string[];
    images:      string[];
    user:        User;
}

export const Size = Object.freeze({
    L: "L",
    M: "M",
    S: "S",
    Xl: "XL",
    Xs: "XS",
    Xxl: "XXL",
});

export const Gender = Object.freeze({
    Kid: "kid",
    Men: "men",
    Women: "women",
    Unisex: "unisex"
});

export type SizeType = [keyof typeof Size];
export type GenderType = [keyof typeof Gender];