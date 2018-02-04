import * as THREE from 'three'
import 'three-examples/loaders/VTKLoader'

export const VTKLoader = {
  load: url => new Promise((resolve) => {
    new THREE.VTKLoader().load(url, function (geometry) {
      resolve(geometry)
    })
  })
}
