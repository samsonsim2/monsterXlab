import { useState, useReducer, useContext } from 'react'
import reducer from './reducer'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Head0, Head1, Head2, Head3, Head4, Head5 } from '../components/head'
import { Body0, Body1, Body2, Body3, Body4 } from '../components/body'
import { Eye0, Eye1, Eye2, Eye3, Eye4 } from '../components/eye'
import { Legs0, Legs1, Legs2, Legs3, Legs4, Legs5 } from '../components/legs'
import {
  Hands0,
  Hands1,
  Hands2,
  Hands3,
  Hands4,
  Hands5,
} from '../components/hands'

import {
  Mouth0,
  Mouth1,
  Mouth2,
  Mouth3,
  Mouth4,
  Mouth5,
} from '../components/mouth'

// Create context
const AppContext = React.createContext()

// State values

const initialState = {}
// Create Provider
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [image, setImage] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [gallery, setGallery] = useState([])
  const [name, setName] = useState('')
  const [createdBy, setCreatedBy] = useState('')
  const head = [
    <Head0 />,
    <Head1 />,
    <Head2 />,
    <Head3 />,
    <Head4 />,
    <Head5 />,
  ]
  const body = [
    <Body0 />,
    <Body1 />,
    <Body2 />,
    <Body3 />,
    <Body4 />,
    <Body0 />,
  ]
  const mouth = [
    <Mouth0 />,
    <Mouth1 />,
    <Mouth2 />,
    <Mouth3 />,
    <Mouth4 />,
    <Mouth5 />,
  ]
  const legs = [
    <Legs0 />,
    <Legs1 />,
    <Legs2 />,
    <Legs3 />,
    <Legs4 />,
    <Legs5 />,
  ]
  const eye = [<Eye0 />, <Eye1 />, <Eye2 />, <Eye3 />, <Eye4 />, <Eye0 />]
  const hands = [
    <Hands0 />,
    <Hands1 />,
    <Hands2 />,
    <Hands3 />,
    <Hands4 />,
    <Hands5 />,
  ]

  const [colorArr, setColorArr] = useState([
    '#ff61d2' /*Pink*/,
    '#ffdb0f' /* Yellow*/,
    '#cbf958' /*Lime*/,
    '#3870ff' /*Blue*/,
    '#9d57ff' /*purple*/,
    '#383838' /*grey*/,
  ])

  const colorButtons = [
    '#ff61d2' /*Pink*/,
    '#ffdb0f' /* Yellow*/,
    '#cbf958' /*Lime*/,
    '#3870ff' /*Blue*/,
    '#9d57ff' /*purple*/,
    '#383838' /*grey*/,
  ]

  const [monsterState, setMonsterState] = useState([
    head[0],
    eye[0],
    mouth[0],
    hands[0],
    body[0],
    legs[0],
  ])

  const [isActive, setIsActive] = useState(null)

  const shuffle = () => {
    let shuffle = setInterval(() => generateRandom(), 100)
    setTimeout(function () {
      clearInterval(shuffle)
    }, 2000)
  }
  const generateRandom = () => {
    const colorList = [
      '#ff61d2' /*Pink*/,
      '#ffdb0f' /* Yellow*/,
      '#cbf958' /*Lime*/,
      '#3870ff' /*Blue*/,
      '#9d57ff' /*purple*/,
      '#383838' /*grey*/,
    ]

    const randomString = []
    for (let i = 0; i < 6; i++) {
      const randomNumber = Math.floor(Math.random() * 6)
      randomString.push(randomNumber)
    }

    const monsterParts = (arr) => {
      let newMonster = []
      for (let i = 0; i < 6; i++) {
        if (arr[0] === i) {
          newMonster.push(head[i])
        }
        if (arr[1] === i) {
          newMonster.push(eye[i])
        }
        if (arr[2] === i) {
          newMonster.push(mouth[i])
        }
        if (arr[3] === i) {
          newMonster.push(hands[i])
        }
        if (arr[4] === i) {
          newMonster.push(body[i])
        }
        if (arr[5] === i) {
          newMonster.push(legs[i])
        }
      }
      setMonsterState(newMonster)
    }

    function randomColor(array) {
      let currentIndex = array.length,
        randomIndex

      // While there remain elements to shuffle.
      while (currentIndex != 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex--

        // And swap it with the current element.
        ;[array[currentIndex], array[randomIndex]] = [
          array[randomIndex],
          array[currentIndex],
        ]
      }

      setColorArr(array)
    }

    monsterParts(randomString)
    randomColor(colorList)
    console.log(colorArr)

    //Render Body
  }

  return (
    <AppContext.Provider
      value={{
        monsterState,

        generateRandom,
        shuffle,
        isActive,
        setIsActive,
        colorArr,
        setColorArr,

        colorButtons,
        gallery,
        setGallery,
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
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

// Exports

export const useAppContext = () => {
  return useContext(AppContext)
}

export { AppProvider }
