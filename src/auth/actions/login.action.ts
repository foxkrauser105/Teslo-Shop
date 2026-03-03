import { tesloApi } from "@/api/tesloApi"
import type { AuthResponse } from "../interfaces/auth.response";

export const loginAction = async( email: string, password: string): Promise<AuthResponse> => {
    
    try {
        const { data } = await tesloApi.post<AuthResponse>('/auth/login', {
            email, //ECMAScript 6: we can send the parameter directly, as both parameters have the same name
            password
        });

        return data;
    }
    catch(error) {
        console.log(error);
        throw error;
    }
}