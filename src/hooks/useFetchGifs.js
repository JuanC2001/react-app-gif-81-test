import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (categoria) => {
    const [state, setState] = useState({// Se encarga de crear una variable de estado
        data: [],
        loading: true
    });

    // setTimeout(() => {
    //     setState({
    //         data: [1,2,3,4,5,6],
    //         loading : false
    //     });
    // }, 3000);

    useEffect(() => {// Con useEffect conseguíamos que todas las cosas se estén ejecutando por lo menos una vez
        getGifs( categoria )
            .then(imgs => {
                    setState({
                        data: imgs,
                        loading: false
                    })
            })
    },[ categoria ]);// Con categoria como parámetro este hook se va a ejecutar cada que la variable categoria cambie

    return state; //Es un objeto, trae una data vacía {data:[], loading: true};
}