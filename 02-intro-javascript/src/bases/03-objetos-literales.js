

const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    alias: 'Iron Man',
    direccion: {
        ciudad: 'New York',
        zip: 55335213,
        lat: 14.3232,
        lng: 332.9343431,
    }
};


// Se copia la referencia => se modifica en ambos objetos.
const persona2 = { ...persona };

persona2.nombre = 'Peter';
console.log( persona );
console.log( persona2 );