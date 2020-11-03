import React, { useRef,Suspense, Section } from 'react'
import { Canvas, useFrame } from 'react-three-fiber'
import "./App.scss"
import { useGLTFLoader } from 'drei'
 
const Model = () => {
  const gltf = useGLTFLoader('/scene.gltf', true)
  const coin = useRef(null);
  useFrame(() => (coin.current.rotation.x = coin.current.rotation.x += 0.03));

  return (
      <mesh ref={coin}>
        <primitive object={gltf.scene} dispose={null} args={[1,2]}/>
      </mesh>
  )
}

const Lights =() => {
  return (
    <>
      <ambientLight intensity={1}/>
      <directionalLight position={[10,10,5]} intensity={1}/>
      <directionalLight position={[0,10,0]} intensity={1.5}/>
    </>
  )
}

function App(props) {
  return <>
    <Canvas colorManagement>
      <Lights/>
      <Suspense fallback={null}>
          <Model/>
      </Suspense>
    </Canvas>
  </>
}

export default App;