import type { IPagination } from "../interfaces/IPagination";
import { GetValidTab, TabsTypes, type TabsType } from "../types/TabsTypes";


export class PaginationFactory {
    
    public static CreatePaginationObject = (page: string | null = null, limit: string | null = null, category: string | null = null): IPagination => {
        let newPage: number = 1,
            newLimit: number = 6,
            newCategory: TabsType = TabsTypes.All;
    
        if (page && !isNaN(+page)){
            newPage = +page;
        }
    
        if (limit && !isNaN(+limit)){
            newLimit = +limit;
        }

        if (category) {
            newCategory = GetValidTab(category as TabsType);
        }
    
        return {
            page: newPage,
            limit: newLimit,
            category: newCategory
        } as IPagination
    }
}

export class PaginationTranslation {
    public static GetCategoryByTabSelected(tab: TabsType): string {
        switch(tab) {
            default:
                return "all";
        }
    }
}