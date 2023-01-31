const producto4 = 'Pantalla 24 Pulgadas'

console.log(producto4);

//la función length se encarga de contar cuantas letras contiene el string.
console.log(producto4.length);

//la función indexOf nos indica si el string contiene la palabra indicada, en este caso se busca la palabra 'Pantalla' y nos indica que está en la posción 0.
console.log(producto4.indexOf('Pantalla'));

//si se cambia la palabra 'Monitor' 'Pulgadas', indicara que dicha palabra se encuentra desde la posición 12.
console.log(producto4.indexOf('Pulgadas'));

//si ponemos la palabra 'Tablet', su respuesta es -1, indicando que no encontró esa palabra en el string.
console.log(producto4.indexOf('Tablet'));

//También existe la función includes, la que se encarga de indicar si la palabra buscada está o no dentro del string, en este caso su respuesta es true, a diferencia de la anterior que indica desde que posición.
console.log(producto4.includes('Pulgadas'));

//se tieen en cuenta la correcta escritura de la palabra, puesto que reconoce mayúsculas y minúsculas, en este caso su resultado será false, porque la palabara 'pulgadas' no se encuentra dentro del string. 
console.log(producto4.includes('pulgadas'));

//en este caso su respuesta es fale, porque la palabra 'Monitor' no se encuentra dentro del string.
console.log(producto4.includes('Monitor'));

