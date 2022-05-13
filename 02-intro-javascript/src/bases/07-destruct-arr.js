

const personajes = ['Goku', 'Vegeta', 'Trunks'];

const [ , , p ] = personajes;

console.log( p );

const retornaArreglo = () => {
    return ['ABC', 123];
}

const [letras, numeros] = retornaArreglo();

console.log( letras, numeros );

//Tarea
// 1. el primer valor del arr se llamará nombre
// 2. se llamará setNombre
const estado = ( valor ) => {
    return [ valor, () =>{ console.log('Hola mundo!') }]
}

const [ nombre, setNombre ] = estado ( 'Goku' );

console.log( nombre );
setNombre();