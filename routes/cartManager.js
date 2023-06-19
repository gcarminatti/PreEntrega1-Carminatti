const fs = require("fs");


class CartManager {
    constructor(path) {
      this.carts = [];
      this.path = path;
      this.carts = this.loadCarts();
    }
  
    createCart() {
        const newCartId = this.generateCartId();
        const newCart = {
          id: newCartId,
          products: [],
        };
        this.carts.push(newCart);
        return newCart;
      }
    
      getCartById(cartId) {
        return this.carts.find((cart) => cart.id === cartId);
      }

      getAllCarts() {
        return this.carts; // Retornamos todos los productos
      }
    
      generateCartId() {
        if (this.carts.length === 0) {
          return 1;
        }
    
        const lastCartId = this.carts[this.carts.length - 1].id;
        return lastCartId + 1;
      }
  
    addItemToCart(cartId, product) {
      const cart = this.getCartById(cartId);
  
      if (cart) {
        cart.products.push(product);
        this.saveCarts();
        return true;
      }
  
      return false;
    }
  
  
    generateCartId() {
      // Lógica para generar un ID único para los carritos
    }
  

  
    saveCarts() {
      const cartsData = JSON.stringify(this.carts, null, 2);
  
      fs.writeFileSync(this.path, cartsData,"utf8");
    }
    
    loadCarts() {
      try {
        const data = fs.readFileSync(this.path, "utf8");
        this.carts = JSON.parse(data);
      } catch (error) {
        this.carts = [];
      }
    }

  
 
  
}
  module.exports = CartManager;

