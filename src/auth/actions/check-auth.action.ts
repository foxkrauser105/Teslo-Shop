import { LocalStorageUtils } from "@/shared/utils/localStorageUtils"
import { AuthConstants } from "../constants/AuthConstants"
import { StringUtils } from "@/shared/utils/stringUtils";
import { tesloApi } from "@/api/tesloApi";
import type { AuthResponse } from "../interfaces/auth.response";

export const checkAuthAction = async(): Promise<AuthResponse> => {

    const token = LocalStorageUtils.GetDataFromLocalStorage<string>(AuthConstants.AuthTokenLSK);

    if (StringUtils.StringIsNullEmptyOrWhiteSpace(token)){
        throw new Error('No Token Found');
    }

    try {
        const { data } = await tesloApi.get<AuthResponse>('/auth/check-status');

        LocalStorageUtils.SetDataToLocalStorage(AuthConstants.AuthTokenLSK, data.token);

        return data;

    } catch(error) {
        LocalStorageUtils.RemoveDataFromLocalStorage(AuthConstants.AuthTokenLSK);
        throw new Error('Token expired or not valid');
    }

}