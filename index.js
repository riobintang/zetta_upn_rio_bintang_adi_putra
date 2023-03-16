function bookPurchase({name, price, category, amountOfStock}, percentageDiscount, percentageTax, amountOfPurchased) {
    const amountOfDiscount = (percentageDiscount/100) * price;
    const priceAfterDiscount = price-amountOfDiscount;
    const amountOfTax = price*(percentageTax/100);
    const priceAfterTax = priceAfterDiscount-amountOfTax;
    let totalPrice = 0;
    for (let index = amountOfPurchased; index > 0; index--) {
        totalPrice += priceAfterTax;
        amountOfStock--;
        if (amountOfStock === 0) {
            console.log(`${name} is out of stock`);
            break;
        }
        console.log(`Buy a ${name}, stock now is ${amountOfStock}`);
    }

    console.log(`Total price = ${totalPrice}`);
    return {
        name,
        price,
        category,
        amountOfDiscount,
        amountOfPurchased,
        priceAfterTax,
        amountOfStock,
        totalPrice,
    };
}


const book = {
    "name": "Buku",
    "category": "technology",
    "price": 100000,
    "amountOfStock": 5
}

console.log(bookPurchase(book, 10,10,3))