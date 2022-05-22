import React from 'react'

export const GifGridItem = ( { title, url }) => {

  return (
    <div className="card-grid animate__animated animate__fadeIn">
        <img className="card" src={ url } alt= { title }/>
            <p> { title }</p>

    </div>
  )
}
