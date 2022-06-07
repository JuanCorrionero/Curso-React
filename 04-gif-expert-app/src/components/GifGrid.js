import React, { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const [images, setImages] = useState([]);

    useEffect(() => {
        getGifs(category)
        .then( setImages );
    }, [ category ]); // Lista de dependecias => Si es [] sólo se ejecuta 1 sola vez.



    // getGifs();


    return (
        <>
                <h3> {category} </h3>
            <div className='card-grid'>
                {
                    images.map(img => (
                        <GifGridItem
                            key={img.id}
                            {...img} />
                    )

                    )}

            </div>
        </>
    )
}
