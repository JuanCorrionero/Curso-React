
// Desestructuración
// Asignación Desestructurante

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Iron man',
};

// const { nombre, edad, clave } = persona;

// console.log( nombre, edad, clave );

const usoContext = ({ clave, nombre, edad, rango = 'Capitán' }) => {

    // console.log( nombre, edad, rango );

    return {
        nombreClave: clave,
        anios: edad,
        latlng:{
            lat: 14.344,
            lng: -12.535,
        }
    }

}

const { nombreClave, anios, latlng: { lat, lng } } = usoContext( persona );

console.log( nombreClave, anios );
console.log( lat, lng );