//inicializar una variable con un valor asignado
var producto = "Monitor de 24 Pulgadas";
console.log(producto);
//reasignar el valor de una variable
producto = "Monitor de 19 Pulgadas";
console.log(producto);
//JavaScript es un legunaje de programación de tipo dínamico, es decir, que no es obligatorio poner el tipo de dato al inicializar la variable. la variable reconoce el tipo de dato sin especificarlo

producto = 20;
console.log(producto);

//la variable se pueden inicializar sin valor y asignarlo después//
var disponible;

//y más adelente se puede inicializar
disponible = true;

//posteriormente también se puede cambiar el valor de esa variable//
disponible = false;

//inicializar múltiples variables.
var categoria = "Computador@s";
var marca = "Toshiba";
var calificacion = 5;

//tambíen se pueden inicializar separando con comas para no tener que repetir siempre la palabra var
var categoria = "Computador@s",
    marca = "Toshiba",
    calificacion = 5;

//la variables no pueden iniciar su nombre con números, ejemplo: var 22dias, no es válido, pero en intermedio o final de la palabra si los puede contener, ejemplo: var dias22, inicio22dias.

//existen diferentes estilos para nombrar las variables con más de una palabra

//camelCase: donde despupes de la primera palabra se asigna mayuscula a la letra inicial de cada siguiente palabra
var nombreProducto;

//underscore_snake_serpiente, después de la primela palabra, las siguientes se separan con guien bajo _ (no es comúnmente usada en javaScript)
var nombre_producto_categoria_precio;

//Pascal case:se inicia el nombre de la Variable con la letra en mayúscula, se usa más pára darle el nombre a las Clases
var Producto;

