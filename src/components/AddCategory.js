import React, { useState } from 'react'
import { PropTypes } from "prop-types";

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('Memes')

    const handleInputChange = (e) =>{
        setInputValue(e.target.value);
    }

    const handdleSubmit= (e) =>{
        e.preventDefault();
        //IMPORTANTE esto es para evitar que recargue la pagina

        

        if (inputValue.trim().length > 2) {
            setCategories( cats => [ inputValue, ...cats ])
            setInputValue('');
        }
        
        // console.log('Submit Hecho')

    }

  return (
    <>

        <form onSubmit={handdleSubmit}>
            <input
                type="text"
                value= {inputValue}
                onChange={ handleInputChange}
            />
        </form>
        
    </>
  )
}

AddCategory.protoTypes = {
    setCategories: PropTypes.func.isRequired,
}