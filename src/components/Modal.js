import { React, useState } from 'react'
import { useAppContext } from '../context/appContext'
import { Loading } from './Loading'
import { ImCross } from 'react-icons/im'
import axios from 'axios'

export const Modal = ({ profileImage }) => {
  const [formFilled, setFormFilled] = useState(true)
  const {
    isLoading,
    setShowModal,
    name,
    setName,
    createdBy,
    setCreatedBy,
    setDescription,
    setImage,
    image,
  } = useAppContext()
  console.log(profileImage)
  const closeModal = () => {
    setShowModal(false)
  }
  function reset() {
    setImage('')
    setName('')
    setDescription('')
  }

  const submitImage = () => {
    if (image === '' || name === '' || createdBy === '') {
      setFormFilled(false)
      console.log('please enter Name')
    } else
      try {
        setFormFilled(true)
        const uploadedImage = {
          name: name,
          description: createdBy,
          image: image,
        }

        axios.post(`/api/v1/images`, uploadedImage)
        console.log('uploaded')
        setShowModal(false)

        reset()
      } catch (error) {
        console.log(error)
      }
  }

  console.log(profileImage)
  if (profileImage === null) {
    console.log('no image')
  } else
    return (
      <>
        <div className='modal-bg'></div>
        <div className='modal'>
          <div className='close-btn'>
            <button onClick={() => closeModal()}>
              <ImCross />
            </button>
          </div>
          <div>
            {isLoading ? (
              <Loading />
            ) : (
              <img
                className='modal-image'
                src={profileImage}
                alt='Loading-Img'
              ></img>
            )}
          </div>
          {formFilled || (
            <h1 className='modal-alert'>Please fill in all names</h1>
          )}
          <div className='form-control'>
            <div className='form-row'>
              <label className='specimen-name' for='specimen-name'>
                Name:
              </label>
              <input
                type='text'
                id='form-input'
                maxlength='10'
                onChange={(e) => setName(e.target.value)}
              ></input>
            </div>

            <div className='form-row'>
              {' '}
              <label className='created-by' for='created-by'>
                Created By:
              </label>
              <input
                type='text'
                id='form-input'
                maxlength='10'
                onChange={(e) => setCreatedBy(e.target.value)}
              ></input>
            </div>
          </div>
          <div className='submit-container'>
            <button className='modal-submit' onClick={() => submitImage()}>
              Submit
            </button>
          </div>
        </div>
      </>
    )
}
