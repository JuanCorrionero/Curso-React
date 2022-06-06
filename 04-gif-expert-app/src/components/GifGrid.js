import React, { useState, useEffect } from 'react';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ( { category } ) => {

    const [images, setImages] = useState([]);

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
        setImages( gifs );
        

    }

    // getGifs();


  return (
    <h3>
        { category }
                   
                {
                    images.map( img => (
                        <GifGridItem
                         key={img.id}
                         {...img } />
                         )
                     
                )}
            
    </h3>
  )
}
