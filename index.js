function bookPurchase({name, price, category}, percentageDiscount, percentageTax) {
    const amountOfDiscount = (percentageDiscount/100) * price;
    const priceAfterDiscount = price-amountOfDiscount;
    const amountOfTax = price*(percentageTax/100);
    const priceAfterTax = priceAfterDiscount-amountOfTax;

    return {
        name,
        price,
        category,
        priceAfterTax,
    };
}