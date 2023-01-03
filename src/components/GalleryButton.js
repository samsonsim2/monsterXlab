import { React, useState } from 'react'
import { Link } from 'react-router-dom'

export const GalleryButton = () => {
  const [isGallery, setIsGallery] = useState(true)
  return (
    <button className='gallery-btn'>
      <Link
        to={isGallery ? '/' : '/gallery'}
        onClick={() => setIsGallery(!isGallery)}
      >
        G
      </Link>
    </button>
  )
}
