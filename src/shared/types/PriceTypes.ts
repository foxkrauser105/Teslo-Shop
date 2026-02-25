export const PriceTypes = Object.freeze({
    Any: 'any',
    ZeroToFifty: '0-50',
    FiftyToHundred: '50-100',
    HundredToTwoHundred: '100-200',
    MoreThanTwoHundred: '200+'
  });

export const GetValidPriceRange = (price: PriceType): PriceType => {
    if (!price || !Object.values(PriceTypes).some((p: PriceType) => p === price)) 
    {
        return PriceTypes.Any;
    }
    
    return price;
}

export type PriceType = typeof PriceTypes[keyof typeof PriceTypes];