console.log("Theme 07 Objects - Exercise 02 - How to access the values of an object");

const producto2 = {
    nombre : "Monitor de 100 Pulgadas",
    precio : 5000,
    disponible : false,
};

console.log(producto2);

// se puede acceder de manera tradicional/común a los valores de un objeto con el punto objeto.value
console.log(producto2.nombre);
console.log(producto2.precio);
console.log(producto2.disponible);

//Ó también se puede hacer de una manera no tan tradiconal/común con las llaves object["value"]
console.log(producto2["nombre"]);
console.log(producto2["precio"]);
console.log(producto2["disponible"]);

//de las dos maneras es válido pero la más compun es con el punto: objeto.value