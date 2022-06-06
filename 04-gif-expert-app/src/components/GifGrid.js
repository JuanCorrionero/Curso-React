import React, { useState, useEffect } from 'react';

export const GifGrid = ( { category } ) => {


    const [count, setCount] = useState(0);

    useEffect( () => {
        getGifs();
    }, []); // Lista de dependecias => Si es [] sólo se ejecuta 1 sola vez.

    const getGifs = async() => {

        const url = 'https://api.giphy.com/v1/gifs/search?q=Markiplier&limit=10&api_key=XUdOBpbuPRn0IoqNDfn0xWro0DvCMhcl';

        const resp = await fetch( url );
        const { data } = await resp.json();

        const gifs = data.map( img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })

        console.log(gifs);
        

    }

    // getGifs();


  return (
    <h3>
        { category }
    </h3>
  )
}
