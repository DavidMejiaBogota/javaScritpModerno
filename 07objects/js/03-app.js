console.log("Theme 07 Objects - Exercise 03 - To add or remove properties of an object");

const producto3 = {
    nombre : "Monitor de 5 Pulgadas",
    precio : 5,
    disponible : false,
    imagen : "imagen.jpg", //agregando mas propiedades dentro del objeto ya creado
};

//también se puede hacer de las siguientes dos formas

//Agregar nuevas propiedades al objeto
producto3.ubicacion = "Sede Las Americas";


//Elminar propiedad del objeto
delete producto3.imagen;

console.log(producto3);
