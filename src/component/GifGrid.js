import React from 'react';
import { useFtechsGrids } from '../hooks/useFtechsGrids';
import GridGifItem from './GridGifItem';

//import {getGifs} from '../helpers/getGifs';


export const GifGrid = ({category}) => {



        const {data:images,loading} =useFtechsGrids(category);

        console.log(loading);
        
        return (
            <>
                <h3>{category}</h3>
                {loading&&<p className="animate__animated animate__flash" >Cargando...</p>}
            
                <div className="animate__animated animate__fadeIn" >
                
                        {images.map((img) =>
                                <GridGifItem 
                                    key={img.id}    
                                    {...img}
                                />
                        )}
                    
                </div>
            </>
        );
};

export default GifGrid;