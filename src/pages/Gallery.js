import axios from 'axios'
import React, { useEffect } from 'react'
import Articles from '../components/Articles'
import { useAppContext } from '../context/appContext'
import { ImLab } from 'react-icons/im'
import { Link } from 'react-router-dom'

export const Gallery = () => {
  const { gallery, setGallery } = useAppContext()

  useEffect(() => {
    const fetchImages = async () => {
      const {
        data: { Images },
      } = await axios.get(`/api/v1/images`)

      const reverseImage = Images.reverse()

      setGallery(reverseImage)
    }

    fetchImages()
  }, [])

  return (
    <>
      <div className='logo'>Monster X Lab</div>
      <button className='gallery-btn'>
        <Link to='/'>
          <ImLab color='black' />
        </Link>
      </button>
      <h1 className='title'>Specimen Gallery</h1>
      <Articles images={gallery} />
    </>
  )
}
