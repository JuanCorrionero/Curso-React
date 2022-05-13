

import { getHeroeById } from './bases/08-imp-ex'

// const promesa = new Promise( (resolve, reject) => {

//     setTimeout( () => {
        
//         // Tarea
//         // Importen el GetHeroeById
//         const heroe = getHeroeById(2);
//         // console.log( heroe );
        
//         resolve( heroe );
//         // reject( 'No se pudo encontrar el héroe' )
//     }, 3000)
// } );


// promesa.then( (heroe) => {
//     console.log( "después de unos segundos: ", heroe );
// } ).catch( err => console.warn( err ));

const getHeroeByIdAsync = ( id ) => {
    // Hace que la función devuelva una promesa.
    return new Promise( (resolve, reject) => {

        setTimeout( () => {

            const heroe = getHeroeById(id);
            
            if( heroe ){
                // Va para el then (que es éxito) de la promesa.
                resolve( heroe );
            }else {
                // Va para el catch de la promesa.
                reject(`No se pudo encontrar el héroe con el ID: ${id}`)
            }
        }, 3000)
    } );

   
}

// Al devolver una promesa, puedo manipular el then y catch desde acá.
getHeroeByIdAsync(1)
.then( console.log )
.catch( console.error );