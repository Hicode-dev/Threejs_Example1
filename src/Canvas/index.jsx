import {Canvas} from '@react-three/fiber'
import { Environment } from '@react-three/drei'
import { Center } from '@react-three/drei'
import Shirt from './Shirt'
import CameraRig from './CameraRig'
import BackDrop from './BackDrop'
// import Shirt from './Shirt'
// import BackDrop from './BackDrop'
// import CameraRig from './CameraRig'
const canvasModel = () => {
  return (
    <div>
<Canvas>
  <ambientLight  />
  <Environment preset='city' />
{/* <CameraRig>
  <BackDrop /> */}
  <Center>
<Shirt ></Shirt>
    </Center>
{/* </CameraRig> */}
</Canvas>
    </div>
  )
}

export default canvasModel