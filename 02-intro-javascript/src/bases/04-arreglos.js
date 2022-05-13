

// Arreglos en JS
// const arreglo = new Array( 100 );
const arreglo = [1, 2, 3]
arreglo.push(4); // push modifica el objeto principal.

/// ... (spread operator) hace una "copia" o extrae la informacion del array/object
const arreglo2 = [ ...arreglo, 5 ]

// .map recorre el arreglo.
const arreglo3 = arreglo2.map( function(numero) {
    return numero * 2;
});



console.log( arreglo );
console.log( arreglo2 );
console.log( arreglo3 );