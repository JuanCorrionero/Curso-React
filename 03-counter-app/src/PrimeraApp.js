import React from 'react';
import PropTypes from 'prop-types';

const PrimeraApp = ( { saludo } ) => {


    // Al poner las <></> lo toma como un "Fragment"
    return <> 
        <h1> {saludo} </h1>
        <p>Mi primera aplicación</p>
    </>
    



}


PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired,
    otra: PropTypes.number.isRequired
}

export default PrimeraApp;