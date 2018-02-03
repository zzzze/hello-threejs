import * as THREE from 'three'
import { width, height } from './init'

function initCamera () {
  const camera = new THREE.PerspectiveCamera(60, width / height, 0.01, 1e10)
  camera.position.x = 0
  camera.position.y = 0
  camera.position.z = 1000
  camera.up.x = 0
  camera.up.y = 1
  camera.up.z = 0
  camera.lookAt(0, 0, 0)

  return camera
}

export default initCamera()
