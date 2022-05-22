import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
// import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    
    // const [images, setImages] = useState([])
    const {data:images, loading} = useFetchGifs(category);

    // //  Esto para hacer una sola ves la solicitud
    // useEffect( () =>{
    //     // getGifs();
    //     getGifs(category)
    //     .then(setImages);
    //     }, [ category])
    


  return (
      <>
        <h3 className="animate__animated animate__fadeIn">{category } </h3>
        {loading ? <p className="animate__animated animate_flash">Loading</p> : null}
        <div>            
                {
                    images.map( img => (
                        <GifGridItem 
                        key={img.id}
                        {...img}/>

                    ))     
                }
        </div>
    </>
  )
}
