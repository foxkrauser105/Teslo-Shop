export const currencyFormatter = (value: number): string => {

    if (isNaN(value)) {
        value = 0;
    }

    return value.toLocaleString('es-ES', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2
    });
}