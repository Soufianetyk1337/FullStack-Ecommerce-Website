export const formatProductName = (name) =>
    name?.toLowerCase().replace(/\s+/g, "-").slice(0, 96);

export const calculateDiscount = (price, discount) => {
    const priceAfterDiscount = price - (price * discount) / 100
    return formatter.format(priceAfterDiscount)
}



export const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    // These options are needed to round to whole numbers if that's what you want.
    // minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    // maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});
