module.exports = {
  bookPurchaseHandler: async (req, res, next) => {
    try {
      const {
        name,
        price,
        category,
        amountOfStock,
        percentageDiscount,
        percentageTax,
        amountOfPurchased,
        termOfCredit,
      } = req.body;

      const amountOfDiscount = (percentageDiscount / 100) * price;
      const priceAfterDiscount = price - amountOfDiscount;
      const amountOfTax = price * (percentageTax / 100);
      const priceAfterTax = priceAfterDiscount - amountOfTax;
      let stock = amountOfStock;
      let totalPrice = 0;
      for (let index = amountOfPurchased; index > 0; index--) {
        totalPrice += priceAfterTax;
        stock--;
        if (stock === 0) {
          //console.log(`${name} is out of stock`);
          res.status(400).json({
            status: "fail",
            message: "Book out of stock",
          });
          //break;
        }
        //console.log(`Buy a ${name}, stock now is ${amountOfStock}`);
      }

      //console.log(`Total price = ${totalPrice}`);

      let priceTerm = totalPrice / termOfCredit;
      let objectTerm = [];

      for (let index = 0; index < termOfCredit; index++) {
        objectTerm.push({ index: index + 1, term: priceTerm });
      }

      res.status(201).json({
        status: "success",
        message: "Successfully order book",
        data: {
          name,
          price,
          category,
          amountOfDiscount,
          amountOfPurchased,
          priceAfterTax,
          amountOfStock,
          totalPrice,
          objectTerm,
        },
      });
    } catch (error) {
      next(error);
    }
  },
};
