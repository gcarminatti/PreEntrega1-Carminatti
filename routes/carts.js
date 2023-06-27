const express = require("express");
const router = express.Router();
const CartManager = require("../routes/cartManager");

const cartManager = new CartManager("../data/carts.json");

router.post("/:cid/products/:pid", (req, res) => {
  const { cid, pid } = req.params;

  let cart = cartManager.getCartById(cid);

  if (!cart) {
    cart = cartManager.createCart();
  } else {
    cartManager.addItemToCart(cid, product);
  }

  const product = {
    id: pid,
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
  };

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

router.get("/", (req, res) => {
  const carts = cartManager.getAllCarts();

  res.json(carts);
});

module.exports = { router, cartManager };
