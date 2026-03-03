import { tesloApi } from "@/api/tesloApi"
import type { AuthResponse } from "../interfaces/auth.response";

export const registerAction = async( email: string, password: string, fullName: string): Promise<AuthResponse> => {
    
    try {
        const { data } = await tesloApi.post<AuthResponse>('/auth/register', {
            email, //ECMAScript 6: we can send the parameter directly, as both parameters have the same name
            password,
            fullName
        });

        return data;
    }
    catch(error) {
        console.log(error);
        throw error;
    }
}