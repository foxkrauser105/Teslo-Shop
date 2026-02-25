export const TabsTypes = {
    All: "all"
} as const;

export const GetValidTab = (tab: TabsType): TabsType => {
    if (!tab || !Object.values(TabsTypes).some((t: TabsType) => t === tab)) 
    {
        return TabsTypes.All;
    }
    
    return tab;
}

export type TabsType = typeof TabsTypes[keyof typeof TabsTypes];