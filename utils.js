// Rand1-------------

if (randomString[0] === 0) {
  return setMonsterState({ ...monsterState, head: <Head0 /> })
}

if (randomString[1] === 0) {
  setMonsterState({ ...monsterState, body: <Body0 /> })
}

if (randomString[2] === 0) {
  setMonsterState({ ...monsterState, eye: <Eye0 /> })
}
if (randomString[3] === 0) {
  setMonsterState({ ...monsterState, legs: <Legs0 /> })
}
if (randomString[4] === 0) {
  setMonsterState({ ...monsterState, hands: <Hands0 /> })
}
if (randomString[5] === 0) {
  setMonsterState({ ...monsterState, mouth: <Mouth0 /> })
}
// Rand2-------------

if (randomString[0] === 1) {
  return setMonsterState({ ...monsterState, head: <Head1 /> })
}
if (randomString[1] === 1) {
  setMonsterState({ ...monsterState, body: <Body1 /> })
}
if (randomString[2] === 1) {
  setMonsterState({ ...monsterState, eye: <Eye1 /> })
}
if (randomString[3] === 1) {
  setMonsterState({ ...monsterState, legs: <Legs1 /> })
}
if (randomString[4] === 1) {
  setMonsterState({ ...monsterState, hands: <Hands1 /> })
}
if (randomString[5] === 1) {
  setMonsterState({ ...monsterState, mouth: <Mouth1 /> })
}

// Rand2-------------

if (randomString[0] === 2) {
  return setMonsterState({ ...monsterState, head: <Head2 /> })
}
if (randomString[1] === 2) {
  setMonsterState({ ...monsterState, body: <Body2 /> })
}
if (randomString[2] === 2) {
  setMonsterState({ ...monsterState, eye: <Eye2 /> })
}
if (randomString[3] === 2) {
  setMonsterState({ ...monsterState, legs: <Legs2 /> })
}
if (randomString[4] === 2) {
  setMonsterState({ ...monsterState, hands: <Hands2 /> })
}
if (randomString[5] === 2) {
  setMonsterState({ ...monsterState, mouth: <Mouth2 /> })
}

// Rand3-------------

if (randomString[0] === 3) {
  setMonsterState({ ...monsterState, head: <Head3 /> })
}
if (randomString[1] === 3) {
  setMonsterState({ ...monsterState, body: <Body3 /> })
}
if (randomString[2] === 3) {
  setMonsterState({ ...monsterState, eye: <Eye3 /> })
}
if (randomString[3] === 3) {
  setMonsterState({ ...monsterState, legs: <Legs3 /> })
}
if (randomString[4] === 3) {
  setMonsterState({ ...monsterState, hands: <Hands3 /> })
}
if (randomString[5] === 3) {
  setMonsterState({ ...monsterState, mouth: <Mouth3 /> })
}

// Rand4-------------

if (randomString[0] === 4) {
  return setMonsterState({ ...monsterState, head: <Head4 /> })
}
if (randomString[1] === 4) {
  setMonsterState({ ...monsterState, body: <Body4 /> })
}
if (randomString[2] === 4) {
  setMonsterState({ ...monsterState, eye: <Eye4 /> })
}
if (randomString[3] === 4) {
  setMonsterState({ ...monsterState, legs: <Legs4 /> })
}
if (randomString[4] === 4) {
  setMonsterState({ ...monsterState, hands: <Hands4 /> })
}
if (randomString[5] === 4) {
  setMonsterState({ ...monsterState, mouth: <Mouth4 /> })
}

// Rand5-------------

if (randomString[0] === 5) {
  return setMonsterState({ ...monsterState, head: <Head5 /> })
}
if (randomString[3] === 5) {
  setMonsterState({ ...monsterState, legs: <Legs5 /> })
}
if (randomString[4] === 5) {
  setMonsterState({ ...monsterState, hands: <Hands5 /> })
}
if (randomString[5] === 5) {
  setMonsterState({ ...monsterState, mouth: <Mouth5 /> })
}




const monsterParts = (arr) => {
      for (let i = 0; i < 6; i++) {
        if (arr[0] === i) {
          return setMonsterState({ ...monsterState, head: head[i] })
        }
        if (arr[1] === i) {
          return setMonsterState({ ...monsterState, eye: eye[i] })
        }
        if (arr[2] === i) {
          return setMonsterState({ ...monsterState, mouth: mouth[i] })
        }
        if (arr[3] === i) {
          return setMonsterState({ ...monsterState, hands: hands[i] })
        }
        if (arr[4] === i) {
          return setMonsterState({ ...monsterState, body: body[i] })
        }
        if (arr[5] === i) {
          return setMonsterState({ ...monsterState, legs: legs[i] })
        }
      }