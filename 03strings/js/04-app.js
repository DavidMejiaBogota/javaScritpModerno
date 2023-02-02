const producto6 = "       Monitor 100 Pulgadas    ";

console.log(producto6);
console.log(producto6.length);

//Elminar espacios en blanco al inicio
console.log(producto6.trimStart());
console.log(producto6.length);


//Elminiar espacios en blanco al final
console.log(producto6.trimEnd());
console.log(producto6.length);

//Para eleminar los espacios a lado y lado en una sola acción se pueden utilizar dos métodos

//Método 1 que existe hace muchos años
console.log(producto6.trim());
console.log(producto6.length);

//Método 2, es más reciente poco mas de 2 años, encadenando los métodos trimStar().trimEnd()
const producto7 = "       Monitor 200 Pulgadas    ";
console.log(producto7.trimStart().trimEnd());
console.log(producto7.length);
//En mi opinión no le veo sentido utilizar el método 2, veo el 1 más práctico.