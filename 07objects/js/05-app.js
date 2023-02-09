console.log("Theme 07 Objects - Exercise 05 - Objects Within Objects");

const producto5 = {
    nombre5 : 'Tablero Digital',
    precio5 : 150,
    disponigle5 : true,
    informacio5 : {
        medidas : {
            peso : '1KG',
            ancho : '1m',
            largo : '2m',
            alto : '20cm'
        },

        fabricacion : {
            pais : 'Colombia',
            ciudad : 'Bogotá',
            fecha : '01-01-2023',
        },
    },
};

console.log(producto5.informacio5.fabricacion.ciudad);