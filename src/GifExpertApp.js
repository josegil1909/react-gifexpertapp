import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
//RAFC

const GifExpertApp =() =>{
    const [categories, setCategories] = useState(['Memes'])
    // const handleAdd = ()=>{
    //     // setCategories( [ ...categories, 'HunterxHunter'] );
    //     setCategories( cats => [...categories, 'HunterXHunter'])
    // };




    return(
    <>
        <h2>GifExpertApp</h2>

        <AddCategory setCategories={setCategories}/>

        <hr />

        <ol>
            {
                categories.map( category =>(
                    //return <li key ={category}>{category}</li>
                    <GifGrid  
                    key = {category}
                    category={category}/>
                ))
            }
        </ol>
    </>
    );
    
}



export default GifExpertApp;


