import heroes, {owners} from "../data/heroes";

// const getHeroeById = (id) => {
//     return heroes.find( (heroe ) => {
//         if ( heroe.id === id ){
//             return true;
//         }
//     });
// }


export const getHeroeById = (id) =>  heroes.find( ( heroe )  => heroe.id === id ); 

// console.log( getHeroeById(4) );

export const getHeroesByOwner = (owner) => heroes.filter( ( heroe )  => heroe.owner === owner );

// console.log( getHeroesByOwner('DC'));
// console.log( owners );
