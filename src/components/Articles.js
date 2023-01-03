import React from 'react'
import { Article } from './Article'

const Articles = ({ images }) => {
  return (
    <>
      <div className='monster-gallery-container'>
        <div className='monster-gallery'>
          {images.map((data) => {
            return <Article srcInfo={data} key={data._id} />
          })}
        </div>
      </div>
    </>
  )
}

export default Articles
