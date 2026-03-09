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
    Xxs: "XXS",
    Xs: "XS",
    S: "S",
    M: "M",
    L: "L",
    Xl: "XL",
    Xxl: "XXL",
    Xxxl: "XXXL"
});

export const Gender = Object.freeze({
    Kid: "kid",
    Men: "men",
    Women: "women",
    Unisex: "unisex"
});

export type SizeType = typeof Size[keyof typeof Size];
export type GenderType = typeof Gender[keyof typeof Gender];