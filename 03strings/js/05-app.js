const producto8 = "Monitor de 500 Pulgadas";
console.log(producto8);
//Método replace, nos sirve para reemplazar total o parcialmente los strings
console.log(producto8.replace('Pulgadas', '"'));
console.log(producto8.replace('Monitor', 'Monitor Curvo'));

//El metodo slice permite cortar strings
console.log(producto8.slice(0, 10));
//si solo se le da un valor, el iniciará de izquierda a dereche hasta ubicar esa posición
console.log(producto8.slice(8));

//No se puede engañar a JavaScript, si se le da en la posición un valor mayor de la posición 2, no ejecutará nada
console.log(producto8.slice(2,1));

//Para este caso existe otro muy similiar, substrings (es una alternativa)
console.log(producto8.substring(2, 1));//el resultado será la visualización de la letra Ó,

const usuario = "David Mejia"
console.log(usuario.substring(0,1));
//Existe una alternativa para mostrar solo un caracter
console.log(usuario.charAt(6));