const producto5 = 'Monitor 70 Pulgadas ';
const precio = '30 USD';

//existen diferentes formas de concatenar variables, esta es una con el metodo concat
console.log(producto5.concat(precio));
console.log(producto5.concat('En descuento'));

//Otra forma de concatenar es agregando el signo más después de cada variable
console.log(producto5 + precio);
//Se le pueden agregar string en la ubicación deseada
console.log(producto5 + "Con un precio de " + precio);
//Se puede ajustar a la necesidad puntual
console.log("El producto " + producto5 + "tiene un precio de " + precio);
//Otra forma es separando las variables y/o strings con el signo , (coma)
console.log("El producto " , producto5 , "tiene un precio de " , precio);

//Otra forma de hacerlo es con los backticks `` y el signo $ para agregar cada variable
console.log(`El producto ${producto5} tiene un precio de $ ${precio} `)
 