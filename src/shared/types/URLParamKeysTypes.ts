export const URLParamKeysTypes = {
    Page: 'page',
    ViewMode: 'viewMode',
    Sizes: 'sizes',
    Price: 'price',
    Query: 'query',
    GenderMen: 'men',
    GenderWomen: 'women',
    GenderKid: 'kid'
} as const;    

export type URLParamKeysType = typeof URLParamKeysTypes[keyof typeof URLParamKeysTypes];