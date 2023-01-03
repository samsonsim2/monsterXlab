/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useAppContext } from '../../context/appContext'
export default function Legs5(props) {
  const { colorArr } = useAppContext()
  const { nodes, materials } = useGLTF('/models/Legs5.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Legs5.geometry}
        position={[0, -20.87, 0]}
      >
        <meshPhysicalMaterial
          color={colorArr[5]}
          reflectivity={1}
          roughness={0.8}
        />
      </mesh>
    </group>
  )
}

useGLTF.preload('/models/Legs5.glb')