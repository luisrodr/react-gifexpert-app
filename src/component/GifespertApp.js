import React,{useState} from 'react';
import Addcategory from './Addcategory';
import GifGrid from './GifGrid';

const GifexpertApp = () =>{
   
    
    const [categories, setCategories] = useState([]);


    return(
        <>
        
           
            <h2>GifexpertApp</h2>
            <Addcategory setCategories={setCategories}/>

            <br/>
            {
                categories.map(category=>(

                    <GifGrid 
                        key={category}
                        category={category}
                    />
                ))
            }
        </>
    );
};


export default GifexpertApp;