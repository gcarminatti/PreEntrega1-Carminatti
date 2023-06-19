const express = require("express");
const router = express.Router();
const ProductManager = require("../routes/productManager");

const productManager = new ProductManager("../data/productos.json");

// Ruta raíz GET
router.get("/", (req, res) => {
  const products = productManager.getAllProducts();
  res.json(products);
});

// Ruta GET /:pid
router.get("/:pid", (req, res) => {
  const { pid } = req.params;
  const product = productManager.getProductById(pid);

  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ error: "Producto no encontrado" });
  }
});

// Ruta raíz POST
router.post("/", (req, res) => {
  const {
    title,
    description,
    code,
    price,
    status,
    stock,
    category,
    thumbnails,
  } = req.body;

  const newProduct = productManager.addProduct({
    title,
    description,
    code,
    price,
    status,
    stock,
    category,
    thumbnails,
  });

  res.json(newProduct);
});

// Ruta PUT /:pid
router.put("/:pid", (req, res) => {
  const { pid } = req.params;
  const updatedFields = req.body;

  const updatedProduct = productManager.updateProduct(pid, updatedFields);

  if (updatedProduct) {
    res.json(updatedProduct);
  } else {
    res.status(404).json({ error: "Producto no encontrado" });
  }
});

// Ruta DELETE /:pid
router.delete("/:pid", (req, res) => {
  const { pid } = req.params;

  const deleted = productManager.deleteProduct(pid);

  if (deleted) {
    res.json({ message: "Producto eliminado correctamente" });
  } else {
    res.status(404).json({ error: "Producto no encontrado" });
  }
});

module.exports = router;
