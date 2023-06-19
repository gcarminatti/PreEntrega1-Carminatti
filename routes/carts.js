const express = require("express");
const router = express.Router();
const CartManager = require("../routes/cartManager"); 

const cartManager = new CartManager('../data/carts.json');

router.post("/:cid/product/:pid", (req, res) => {
  const { cid, pid } = req.params;

  let cart = cartManager.getCartById(cid);

  if (!cart) {
    cart = cartManager.createCart();
  }

  const product = { id: pid };

  cart.products.push(product);

  res.json(cart);
});

router.get("/:cid", (req, res) => {
  const { cid } = req.params;

  const cart = cartManager.getCartById(cid); 
  if (cart) {
    res.json(cart.products);
  } else {
    res.status(404).json({ error: "Carrito no encontrado" });
  }
});

router.get('/', (req, res) => {
  const carts = productManager.getAllCarts();
  res.json(carts);
});

module.exports = {router,cartManager};




