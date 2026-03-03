import { StringUtils } from "./stringUtils";

export class LocalStorageUtils {
    public static GetDataFromLocalStorage<T>(key: string, defaultValue: T = null as T): T {

        const data = localStorage.getItem(key);

        if (StringUtils.StringIsNullEmptyOrWhiteSpace(data)) {
            return defaultValue;
        }

        return JSON.parse(data!) as T;
    }

    public static SetDataToLocalStorage(key: string, data: any): void {
        localStorage.setItem(key, JSON.stringify(data));
    }

    public static RemoveDataFromLocalStorage(key: string): void {
        localStorage.removeItem(key);
    }
}