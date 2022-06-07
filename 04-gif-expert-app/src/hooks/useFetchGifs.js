import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";



export const useFetchGifs = ( category ) => {

    const [state, setstate] = useState({
        data: [],
        loading: true,
    });

    

    useEffect(() => {
 
        getGifs( category )
        .then( imgs => {

            setTimeout(() => {
                setstate({
                    data: imgs,
                    loading: false,
                });

            })

        });


    }, [ category ]); // Lista de dependecias => Si es [] sólo se ejecuta 1 sola vez.


    return state; // { data:[], loading:true };

}