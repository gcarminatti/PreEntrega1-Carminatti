


/*Mi idea para projecto final es dejar un carrito de compras funcional (en desarollo web cree una pagina de Ecommerce)*/ 
/*En este ejemplo se me ocurrio crear un array y seleccionar un producto mediante su ID , corriendo el numero de id en el console.log nos devuelve el producto*/ 

function run(valorABuscar) {
    var ret = null;
    const arrayItems = [
      {
        sys: { id: "1" },
        fields: {
          title: "Iphone 12 Pro",
          price: 999,
          image: { fields: { file: { url: "" } } },
        },
      },
      {
        sys: { id: "2" },
        fields: {
          title: "Teclado Razer",
          price: 119,
          image: { fields: { file: { url: "" } } },
        },
      },
      {
        sys: { id: "3" },
        fields: {
          title: "Pantalon Adidas",
          price: 59,
          image: { fields: { file: { url: "" } } },
        },
      },
    ];
  
    encontre = false;
    index = 0;
  
    while (!encontre && index < arrayItems.length) {
      if (arrayItems[index].sys.id == valorABuscar) {
        ret = arrayItems[index];
        encontre = true;
      }
      index++;
    }
    return ret;
  }
  
  console.log(run("3"));