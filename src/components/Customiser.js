import { React, useEffect } from 'react'
import { Button } from '@mui/material'
import '../App.css'
import { useAppContext } from '../context/appContext'
import { RxHand } from 'react-icons/rx'
import { SlEye } from 'react-icons/sl'
import { RiUserSmileLine } from 'react-icons/ri'
import { TbShirt } from 'react-icons/tb'
import { TbAlien } from 'react-icons/tb'
import { GiFootprint } from 'react-icons/gi'
import gsap from 'gsap'
const Customiser = () => {
  const { setIsActive, isActive } = useAppContext()

  const handleClick = (bodyPart) => {
    setIsActive(bodyPart)
    const tl = gsap.timeline() //for first section elements

    tl.set('.pallete0', {
      opacity: 0,
      x: 5,
    })
      .set('.pallete1', {
        opacity: 0,
        x: 5,
      })
      .set('.pallete2', {
        opacity: 0,
        x: 5,
      })
      .set('.pallete3', {
        opacity: 0,
        x: 5,
      })
      .set('.pallete4', {
        opacity: 0,
        x: 5,
      })
      .set('.pallete5', {
        opacity: 0,
        x: 5,
      })

    tl.to(
      '.pallete0',
      {
        opacity: 1,
        x: -5,
        duration: 0.5,
      },
      0
    )
    tl.to(
      '.pallete1',
      {
        opacity: 1,
        x: -5,
        duration: 0.5,
      },
      0.1
    )
    tl.to(
      '.pallete2',
      {
        opacity: 1,
        x: -5,
        duration: 0.5,
      },
      0.2
    )
    tl.to(
      '.pallete3',
      {
        opacity: 1,
        x: -5,
        duration: 0.5,
      },
      0.3
    )
    tl.to(
      '.pallete4',
      {
        opacity: 1,
        x: -5,
        duration: 0.5,
      },
      0.4
    )
    tl.to(
      '.pallete5',
      {
        opacity: 1,
        x: -5,
        duration: 0.5,
      },
      0.5
    )
  }
  return (
    <div className='bar-container'>
      <div className='bar'>
        <button
          className={isActive === 'head' ? 'asset-btn active' : 'asset-btn'}
          onClick={() => handleClick('head')}
        >
          <TbAlien />
        </button>
        <button
          className={isActive === 'eyes' ? 'asset-btn active' : 'asset-btn'}
          onClick={() => handleClick('eyes')}
        >
          <SlEye />
        </button>
        <button
          className={isActive === 'lips' ? 'asset-btn active' : 'asset-btn'}
          onClick={() => handleClick('lips')}
        >
          <RiUserSmileLine />
        </button>
        <button
          className={isActive === 'body' ? 'asset-btn active' : 'asset-btn'}
          onClick={() => handleClick('body')}
        >
          <TbShirt />
        </button>
        <button
          className={isActive === 'hands' ? 'asset-btn active' : 'asset-btn'}
          onClick={() => handleClick('hands')}
        >
          <RxHand />
        </button>
        <button
          className={isActive === 'legs' ? 'asset-btn active' : 'asset-btn'}
          onClick={() => handleClick('legs')}
        >
          <GiFootprint />
        </button>
      </div>
    </div>
  )
}

export default Customiser
