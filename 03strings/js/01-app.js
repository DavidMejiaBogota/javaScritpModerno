//Para escribir strings/cadenas de texto se pueden usar las comillas dobles "" al inicio y fin, o, comillas sencillas '' al inicio y fin, pero se debe usar un solo estilo de comillas y nunca convinar.

//la forma más común de crear strings/cádenas de texto.
const producto = "Monitor de 20 pulgadas";

//existe otra forma de crear sgtrings/cadenas de texto.
const producto2 = String('Monitor 24 "');

//esta forma no es tan común
const producto3 = new String('Monitor de 27 Pulgadas');


//Imprime en consola.
console.log(producto);
console.log(producto2);
console.log(producto3);