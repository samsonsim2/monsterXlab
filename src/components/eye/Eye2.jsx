import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useAppContext } from '../../context/appContext'
export default function Eye2(props) {
  const { colorArr } = useAppContext()
  const { nodes, materials } = useGLTF('/models/Eye2.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[-1.78, 290.21, 113.29]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Eye2-White'].geometry}
          material={materials.White}
        />
        <mesh castShadow receiveShadow geometry={nodes['Eye2-Black'].geometry}>
          <meshPhysicalMaterial color={colorArr[1]} reflectivity={1} />
        </mesh>
      </group>
    </group>
  )
}

useGLTF.preload('/models/Eye2.glb')
