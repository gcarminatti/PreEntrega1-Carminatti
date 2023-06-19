README

Todos los testeos se hicieron mediante Postman

Previamente correr node app.js dentro del directorio ./src

##Para traer todos los productos  :

GET http://localhost:8080/api/products/



##Para traer un producto con PID :

GET http://localhost:8080/api/products/<ID>



##Para agregar productos usando POST , seleccionado en el body que usaremos tipos de datos raw y json :

POST http://localhost:8080/api/products/

{
  "title": "Apple",
  "description": "Descripción del nuevo producto",
  "code": "AAA111",
  "price": 19.99,
  "status": "active",
  "stock": 10,
  "category": "Electronics",
  "img": "pathtoimg"
}


##Para modificar productos usando PUT podemos usar el siguiente comando con los campos deseados :

PUT http://localhost:8080/api/products/12

{
  "title": "Nuevo Apple",
  "description": "Descripción del nuevo producto",
  "code": "AAA111",
  "price": 32.10,
  "status": "active",
  "stock": 15,
  "category": "Electronics",
  "img": "pathtoimg"
}

##Para borrar un producto usando DELETE y le pasamos el ID del producto:

Delete  http://localhost:8080/api/products/12



###Carrito###

Mediante postman para utilizar POST :


http://localhost:8080/api/carts/1/product/1




