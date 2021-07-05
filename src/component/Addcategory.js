import React,{useState}  from 'react'
import PropTypes from 'prop-types';



//rafc
export const Addcategory = ({setCategories}) => {
    
    const [inputValue, setInputValue] = useState('');

    const handleInputChange=(e)=>{
        
        setInputValue(e.target.value);

    };

    //enter .previene refresco del explorador
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log('submit hecho');

        if (inputValue.trim().length>0){
            //ya que no tenemos acceso al arreglo desde aca
            setCategories(arr=>[]);
            setCategories(arr=>[inputValue,...arr]);
            setInputValue("");
            // console.log("agregado ...",e.target.value);  
        };
            
        
    };
    
    
    return (
        <form onSubmit={handleSubmit} > 
            
            <input
                type='text'
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
        
    );
};



//se obliga a tener este prop
Addcategory.propTypes={
    setCategories:PropTypes.func.isRequired
};

export default Addcategory;

