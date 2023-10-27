var express = require('express');
var app = express();
const PORT = process.env.PORT || 3003;
const bodyParser = require("body-parser");
const path = require("path");


app.set("view engine", "ejs");
app.set("views", "./views");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


app.listen(PORT, () => {
    console.log(`Server start on port ${PORT}`);
})

app.get('/', (req, res) => {
    res.render('cart');
});

app.post('/checkout', (req, res) => {
    con

    const sdk = require('api')('@scalapaydocs/v1.1#5ryqsdllosocp4');

sdk.auth('Bearer qhtfs87hjnc12kkos');
sdk.postV2Orders({
  totalAmount: {currency: 'EUR', amount: '190.00'},
  consumer: {givenNames: 'Joe', surname: 'Consumer'},
  shipping: {
    countryCode: 'IT',
    name: 'Joe Consumer',
    postcode: '50056',
    suburb: 'Montelupo Fiorentino',
    line1: 'Via della Rosa, 58'
  },
  merchant: {
    redirectCancelUrl: 'https://portal.integration.scalapay.com/failure-url',
    redirectConfirmUrl: 'https://portal.integration.scalapay.com/success-url'
  },
  shippingAmount: {currency: 'EUR', amount: '10.00'},
  taxAmount: {currency: 'EUR', amount: '3.70'},
  type: 'online',
  product: 'pay-in-3',
  frequency: {number: 1, frequencyType: 'monthly'},
  orderExpiryMilliseconds: 600000,
  items: [
    {
      price: {currency: 'EUR', amount: '10.00'},
      quantity: 1,
      name: 'T-Shirt',
      category: 'clothes',
      sku: '12341234',
      brand: 'TopChoice',
      pageUrl: 'https://www.scalapay.com//product/view/',
      imageUrl: 'https://www.scalapay.com//product/view/'
    },
    {
      price: {currency: 'EUR', amount: '10.00'},
      quantity: 1,
      name: 'T-Shirt',
      category: 'clothes',
      sku: '12341234',
      brand: 'TopChoice',
      pageUrl: 'https://www.scalapay.com//product/view/',
      imageUrl: 'https://www.scalapay.com//product/view/'
    }
  ],
  merchantReference: 'merchantOrder-1234'
})
  .then(({ data }) => console.log(data))
  .catch(err => console.error(err));


    var steak = req.body.steak;
    var burrito= req.body.burrito;
    var chickensalad = req.body.chickensalad;
    var italianpasta = req.body.italianpasta;
    var potatomeat = req.body.potatomeat;

    res.render("checkout", {
        steak: steak,
        burrito: burrito,
        chickensalad:chickensalad,
        italianpasta: italianpasta,
        potatomeat: potatomeat
    });
});
