const express = require("express");
const bodyParser = require("body-parser");
const productRouter = require("../routes/products");
const { router: cartRouter, cartManager } = require('../routes/carts');



const app = express();
const port = 8080;

app.use(bodyParser.json());

app.use("/api/products", productRouter);
app.use("/api/carts", cartRouter);

console.log(cartManager);

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});