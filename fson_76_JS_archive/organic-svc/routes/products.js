const express = require('express');
const router = express.Router();
const initialProducts = require('../static/products.json');

router.get('/', function(req, res, next) {
  const validProducts = (initialProducts.filter(product => {
    return product.name && product.type && product.price && product.priceBeforeDiscount;
  })).map((item, index) => ({...item, index}));
  
  const limit = req?.query?.limit ? Number(req?.query?.limit) : 100;
  const offset = req?.query?.offset ? Number(req?.query?.offset): 0;

  console.log({ offset, limit });

  const productsWithOffset = [];
  for (let index = offset; index < validProducts.length; index++) {
    const product = validProducts[index];
    if (product) {
      productsWithOffset.push(product);
    }
  }

  const productsWithLimit = [];
  for (let index = 0; index < limit && index < productsWithOffset.length; index++) {
    const product = productsWithOffset[index];
    if (product) {
      productsWithLimit.push(product);
    }
  }
  
  const products = productsWithLimit;
  console.log(products);

  res.status(200).send(products);
});

router.post('/', function(req, res, _next) {
  console.log({ body: req.body, parameters: req.query });
  res.status(200).send({message: 'ENTITY CREATED'});
});

router.put('/', function(req, res, _next) {
  console.log({ req });
  console.log({ body: req.body, parameters: req.query });
  res.status(404).send({message: 'FAILED TO UPDATE'});
});

router.delete('/', function(req, res, _next) {
  console.log({ body: req.body, parameters: req.query });
  res.status(200).send({message: 'ENTITY Deleted'});
});

module.exports = router;
