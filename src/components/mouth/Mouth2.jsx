/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useAppContext } from '../../context/appContext'
export default function Mouth2(props) {
  const { colorArr } = useAppContext()
  const { nodes, materials } = useGLTF('/models/Mouth2.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mouth2.geometry}
        material={materials.Red}
        position={[0, 0, 117.19]}
      >
        <meshPhysicalMaterial
          color={colorArr[2]}
          reflectivity={1}
          roughness={0.8}
        />
      </mesh>
    </group>
  )
}

useGLTF.preload('/models/Mouth2.glb')