
import type { IKeyGenericValuePair } from '../interfaces/arrayTypeInterfaces';
import { StringUtils } from './stringUtils';

export class ApiUtils {
    
    public static GetParamsFromSearchOptions (searchOptions: IKeyGenericValuePair<string>[]): string {
        
        if(!searchOptions){
            return "";
        }

        let params: string = "";

        searchOptions.forEach((pair: IKeyGenericValuePair<string>) => {
            if (!StringUtils.StringIsNullEmptyOrWhiteSpace(pair.key)) {
                
                if(!params) {
                    params += "?";
                }
                else {
                    params += "&";
                }

                params += `${pair.key}=${pair.value}`;
            }
        });

        return params;
    }
}