const producto9 = "Monitor de 150 Pulgadas";
//La función repeat permite repetir un string.
const texto = " En Promoción".repeat(3);

console.log(texto);

//se puede convinar para ajustar al requerimiento no necesidad
console.log(`${producto9} ${texto} !!!`);

//la función repeat no permite decimiles, los redondea y repite las vecs del # entero
const texto2 = " Full Promoción".repeat(2.4);
console.log(texto2);


//y lo redondea hacía abajo, así se le ponga el decimal más cercano al siguiente # entero.
const texto3 = " Inigualable".repeat(2.9);
console.log(texto3);

//Split, función que perminte dividir un string de acuerdo al criterio indicado (, . # / ;...)

const actividad = "Estoy aprendiendo #JavaScript Moderno"
console.log(actividad.split(" "));

const hobbies = "Leer, caminar, esuchar música, escribir, aprender a programar";
console.log(hobbies.split(","));

const tweet = "Parendiendo JavaScript @#DavidMejia";
console.log(tweet.split("@"));