const fs = require("fs");

class CartManager {
  //Creamos constructor del carrito que recibe el path que es la ruta hacia el archivo.
  constructor(path) {
    this.path = path;
    this.carts = [];
    this.loadCarts();
  }

  createCart() {
    //Creamos funcion del carrito con los distintos metodos , comezando con la generacion del ID del carrito y el objeto para posterior hacer un push hacia el arreglo .Por ultimo retornamos el carro creado.
    const newCartId = this.generateCartId();
    const newCart = {
      id: newCartId,
      products: [],
    };
    this.carts.push(newCart);
    this.saveCarts();
    return newCart;
  }

  getCartById(cartId) {
    // Retornamos el ID carrito pasado a nuestra api
    const cartbById = this.carts.find((cart) => cart.id === cartId);
    return cartbById;
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
    const cartsData = JSON.stringify(this.carts, null, 2);
    console.log("Contenido de cartsDataasdadasdsa:", cartsData);

    fs.writeFileSync(this.path, cartsData, "utf8");
    console.log("Carritos guardados en el archivo:", this.path);
  }

  loadCarts() {
    try {
      const data = fs.readFileSync(this.path, "utf8");
      return JSON.parse(data);
    } catch (error) {
      console.error("Error al cargar los carritos:", error);
      return [];
    }
  }
}
module.exports = CartManager;
