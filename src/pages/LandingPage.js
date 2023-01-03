import React, { useEffect, useState, useRef } from 'react'

import { useAppContext } from '../context/appContext'
import '../App.css'
//Import Models
import Base from '../components/Base'
//Import UI Elements
import { Button } from '@mui/material'
//Import ThreeJS Dependencies
import { Canvas } from '@react-three/fiber'
import {
  OrthographicCamera,
  PerspectiveCamera,
  OrbitControls,
} from '@react-three/drei'
import { warning } from '@remix-run/router'
import Customiser from '../components/Customiser'
import Color from '../components/Color'
import html2canvas from 'html2canvas'
import axios from 'axios'
import { Modal } from '../components/Modal'
import { Link } from 'react-router-dom'
import { GrGallery } from 'react-icons/gr'
import { Loading } from '../components/Loading'
import gsap from 'gsap'
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*'

export const LandingPage = () => {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 1024)
  const cameraRef = useRef(null)
  const monsterRef = useRef(null)

  const rotate = () => {
    console.log(cameraRef.current)
    console.log(cameraRef.current.zoom)

    const tl = gsap.timeline()

    tl.add('same').to(
      cameraRef.current.position,
      {
        x: 0,
        y: 1,
        z: 10,

        duration: 1,
      },
      'same'
    )
  }

  const rotateMonster = () => {
    const tl = gsap.timeline()
    tl.set(monsterRef.current.rotation, {
      y: 0,
    })

    tl.to(monsterRef.current.rotation, {
      y: Math.PI * 2,

      duration: 1,
    })

    shuffle()
  }

  const {
    monsterState,

    shuffle,
    isLoading,
    setIsLoading,
    image,
    setImage,
    showModal,
    setShowModal,
    name,
    setName,
    createdBy,
    setCreatedBy,
  } = useAppContext()

  const updateMedia = () => {
    setDesktop(window.innerWidth > 1450)
    console.log(isDesktop)
  }

  useEffect(() => {
    window.addEventListener('resize', updateMedia)
    return () => window.removeEventListener('resize', updateMedia)
  }, [])

  console.log(isDesktop)
  useEffect(() => {
    shuffle()
  }, [])

  useEffect(() => {
    setIsLoading(false)
    //
  }, [image])

  const uploadFile = () => {
    setIsLoading(true)
    // -- function that converts base64 to image file
    const dataURLtoFile = (dataurl, filename) => {
      const arr = dataurl.split(',')
      const mime = arr[0].match(/:(.*?);/)[1]
      const bstr = atob(arr[1])
      let n = bstr.length
      const u8arr = new Uint8Array(n)
      while (n) {
        u8arr[n - 1] = bstr.charCodeAt(n - 1)
        n -= 1 // to make eslint happy
      }
      return new File([u8arr], filename, { type: mime })
    }

    // -- Select canvas element

    const screenshotTarget = document.getElementById('canvas')
    // -- Use html2canvas to convert to base 64 image
    html2canvas(screenshotTarget).then((canvas) => {
      const base64image = canvas.toDataURL('image/png')

      // -- Upload Function ( Converts base64 image to image file before uploading to cloudinary)

      const uploadToCloud = async () => {
        const file = dataURLtoFile(base64image)
        const formData = new FormData()
        formData.append('image', file, file.name)
        // if (name === '' || description === '') {
        //   console.log('please give a name and desc')
        // } else
        try {
          const {
            data: {
              image: { src },
            },
          } = await axios.post(
            `${process.env.REACT_APP_SERVER_URL}`,
            formData,
            {
              headers: {
                'Content-Type': 'multipart/form-data',
              },
            }
          )

          // problem is that setImage is asynchronous. So axios.post is invoked before setImage is set, therefore upload a null value

          setImage(src)
          setShowModal(true)
          setIsLoading(false)
        } catch (error) {
          image = null
          console.log(error)
        }
      }

      uploadToCloud()
    })
  }

  const handleSubmit = (e) => {
    rotate()
    console.log('button clicked')
    e.preventDefault()
    setTimeout(function () {
      uploadFile()
    }, 1000)
  }

  return (
    <>
      <div className='canvas-container'>
        <div className='top-line'></div>
        <div className='left-line'></div>
        <div className='right-line'></div>
        <div className='btm-line'></div>
        <div className='logo'>Monster X Lab</div>
        <button className='gallery-btn'>
          <Link to='/gallery'>
            <GrGallery color='grey' />
          </Link>
        </button>
        <button className='generate-btn' onClick={() => rotateMonster()}>
          Generate
        </button>
        <button className='submit-btn' onClick={(e) => handleSubmit(e)}>
          Submit my creation
        </button>

        {showModal && <Modal profileImage={image} />}
        {isLoading && (
          <div className='loading-main'>
            <Loading />
          </div>
        )}

        <Canvas
          gl={{ preserveDrawingBuffer: true }}
          className='canvas'
          id='canvas'
        >
          <OrthographicCamera
            makeDefault={true}
            zoom={isDesktop ? 88 : 80}
            far={100000}
            near={-100000}
            position={[0, 1, 10]}
            ref={cameraRef}
          />
          <OrbitControls
            maxPolarAngle={Math.PI / 2.2}
            minPolarAngle={Math.PI / 2.2}
            minZoom={isDesktop ? 88 : 80}
            maxZoom={isDesktop ? 200 : 80}
          />

          <ambientLight intensity={0.5} />
          <directionalLight intensity={0.5} position={[0, 0.1, 0]} />
          <directionalLight intensity={0.3} position={[1, 0, 0.1]} />
          <directionalLight intensity={0.3} position={[-1, 0, 0.1]} />
          <group
            ref={monsterRef}
            position={[0, -1.5, 0]}
            scale={[0.008, 0.008, 0.008]}
            rotation={[0, 0, 0]}
          >
            {monsterState[0]}
            {monsterState[1]}
            {monsterState[2]}
            {monsterState[3]}
            {monsterState[4]}
            {monsterState[5]}

            <Base />
          </group>
        </Canvas>

        <Customiser />
        <Color />
      </div>
    </>
  )
}
