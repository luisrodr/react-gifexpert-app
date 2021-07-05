import {useEffect, useState} from 'react';
import {getGifs} from '../helpers/getGifs';

export const useFtechsGrids = (category) => {
    const [state, setState] = useState({
        data:[],
        loading:true
    });

    
    useEffect(() => {

     
            getGifs(category)
            .then(imgs=>{

                //console.log(imgs)
                setState({
                    data:imgs,
                    state:false
                })
            })




    },[category]);


    return state;
};
