import * as THREE from 'three'
import { scene, renderer } from './init'
import line from './line'
import light from './light'
import camera from './camera'
import cube from './cube'
import bunny from '../res/models/bunny.vtk'
import VTKLoader from './loaders/VTKLoader'

function run () {
  const loader = new VTKLoader()

  loader.load(bunny, function (geometry) {
    geometry.center()
    geometry.computeVertexNormals()
    const material = new THREE.MeshLambertMaterial({ color: 0xff0000, side: THREE.DoubleSide })
    var mesh = new THREE.Mesh(geometry, material)
    mesh.position.set(-100, 0, 0)
    mesh.scale.multiplyScalar(1000)
    scene.add(mesh)

    scene.add(light)
    scene.add(cube)
    scene.add(line)
    cube.scale.multiplyScalar(0.2)
    animate()
  })
}

function animate () {
  // requestAnimationFrame(animate)
  render()
}

function render () {
  cube.rotation.y += 0.02
  cube.rotation.z += 0.01

  renderer.clear()
  renderer.render(scene, camera)
}

window.addEventListener('load', run)
