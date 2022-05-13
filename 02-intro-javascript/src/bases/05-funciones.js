

// Funciones en JS

// const saludar = function( nombre ){
//     return `Hola, ${ nombre }`;
// }


const saludar2 = ( nombre ) => {
    return `Hola, ${ nombre }`;
}

const saludar3 = ( nombre ) => `Hola, ${ nombre }`;

const saludar4 = () => `Hola mundo!`;



console.log( saludar3 ( 'soy Vegeta!') );
console.log( saludar4() );

// const getUser = () => {
//     return {
//         uid: 'ABC123',
//         username: 'Dinoman',
//     }
// }

const getUser = () => ({
        uid: 'ABC123',
        username: 'Dinoman',
    });


const user = getUser();
console.log( user );

// Tarea
// 1. Transformar a una función de flecha. ok
// 2. Tiene que retornar un objeto implícito ok
// 3. Pruebas ok

const getUsuarioActivo = ( nombre ) => ({
        uid: 'ABC567',
        username: nombre,
    });


const usuarioActivo = getUsuarioActivo('Fernando');
console.log( usuarioActivo );