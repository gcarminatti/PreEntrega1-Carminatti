const fs = require("fs");

class CartManager {
  //Creamos constructor del carrito que recibe el path que es la ruta hacia el archivo.
  constructor(path) {
    this.carts = [];
    this.path = path;
    this.carts = this.loadCarts();
  }

  createCart() {
    //Creamos funcion del carrito con los distintos metodos , comezando con la generacion del ID del carrito y el objeto para posterior hacer un push hacia el arreglo .Por ultimo retornamos el carro creado.
    const newCartId = this.generateCartId();
    const newCart = {
      id: newCartId,
      products: [],
    };
    this.carts.push(newCart);
    return newCart;
  }

  getCartById(cartId) {
    // Retornamos el ID carrito pasado a nuestra api
    return this.carts.find((cart) => cart.id === cartId);
  }

  getAllCarts() {
    return this.carts; // Retornamos todos los productos
  }

  generateCartId() {
    //Generamos el ID del carrito verificando que el arreglo este vacio , de lo contrario accedemos al ultimo id y le agregamos uno.
    if (this.carts.length === 0) {
      return 1;
    }

    const lastCartId = this.carts[this.carts.length - 1].id;
    return lastCartId + 1;
  }

  addItemToCart(cartId, product) {
    //Comenzamos tomando como parametros el ID del carrito y el producto que queremos agregar
    const cart = this.getCartById(cartId); //Para luego buscar el ID del carrito que se le envio en la url

    if (cart) {
      // En caso de encontrar un carrito con el ID , se agrega el producto al carrito
      cart.products.push(product);
      this.saveCarts(); //Utilizamos este metodo para guardar los cambios
      return true;
    }

    return false;
  }

  saveCarts() {
    // Convertimos a Json y guardamos utilizando el archivo especificado en this.path
    const cartsData = JSON.stringify(this.carts, null, 2);

    fs.writeFileSync(this.path, cartsData, "utf8");
  }

  loadCarts() {
    //Cargamos el archivo desde el inicio con readFileSync y en caso de no existir mostramos un arreglo vacio
    try {
      const data = fs.readFileSync(this.path, "utf8");
      this.carts = JSON.parse(data);
    } catch (error) {
      this.carts = [];
    }
  }
}
module.exports = CartManager;
