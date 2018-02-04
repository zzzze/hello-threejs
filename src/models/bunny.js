import * as THREE from 'three'
import bunny from '../../res/models/bunny.vtk'
import { VTKLoader } from '../utils/loaders'

export default VTKLoader.load(bunny)
  .then(geometry => {
    geometry.center()
    geometry.computeVertexNormals()
    const material = new THREE.MeshLambertMaterial({ color: 0xff0000, side: THREE.DoubleSide })
    const mesh = new THREE.Mesh(geometry, material)
    mesh.position.set(-100, 0, 0)
    mesh.scale.multiplyScalar(1000)
    return mesh
  })
