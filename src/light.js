import * as THREE from 'three'

function initLight () {
  const light = new THREE.DirectionalLight(0xFF0000, 1.0)
  light.position.set(100, 100, 200)
  return light
}

export default initLight()
