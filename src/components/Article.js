import React from 'react'
import '../App.css'
export const Article = ({ srcInfo }) => {
  const { image, name, description } = srcInfo
  console.log(name)
  return (
    <div className='monster-container'>
      <img className='monster-image' src={image}></img>
      <div className='monster-info'>
        <p className='specimen-name'>Specimen name: </p>
        <p className='specimen-name name'>{name} </p>

        <p className='created-by'>Created by: </p>
        <p className='created-by name'>{description} </p>
      </div>
    </div>
  )
}
