import React from 'react'
import { Button } from '@mui/material'
import '../App.css'
import { useAppContext } from '../context/appContext'
import { gsap } from 'gsap'
import { useEffect } from 'react'

const Color = () => {
  const { colorButtons, isActive, colorArr, setColorArr } = useAppContext()

  const newArray = [...colorArr]

  const changeColor = ({ color }) => {
    if (isActive === 'head') {
      newArray[0] = color
      setColorArr(newArray)
    }
    if (isActive === 'eyes') {
      newArray[1] = color
      setColorArr(newArray)
    }
    if (isActive === 'lips') {
      newArray[2] = color
      setColorArr(newArray)
    }
    if (isActive === 'body') {
      newArray[3] = color
      setColorArr(newArray)
    }
    if (isActive === 'hands') {
      newArray[4] = color
      setColorArr(newArray)
    }
    if (isActive === 'hands') {
      newArray[4] = color
      setColorArr(newArray)
    }
    if (isActive === 'legs') {
      newArray[5] = color
      setColorArr(newArray)
    }
  }

  console.log(window.innerWidth)

  return (
    <div className='colors-container'>
      <div className='colors'>
        {colorButtons.map((color, index) => {
          return (
            <button
              key={index}
              style={{ backgroundColor: `${color}` }}
              className={`pallete pallete${index}`}
              onClick={() => changeColor({ color })}
            ></button>
          )
        })}
      </div>
    </div>
  )
}

export default Color
