import Stats from 'stats.js'
import { scene, renderer, container } from './init'
import camera from './camera'
import controls from './controls'
import models, { cube } from './models'
import lights from './lights'
import addObjects from './utils/addObjects'
import addLights from './utils/addLights'

const stats = new Stats()
container.appendChild(stats.dom)

function run () {
  addObjects(scene, models)
  addLights(scene, lights)
  cube.scale.multiplyScalar(0.2)
  animate()
}

function animate () {
  requestAnimationFrame(animate)
  controls.update()
  stats.update()
  render()
}

function render () {
  cube.rotation.y += 0.02
  cube.rotation.z += 0.01

  renderer.clear()
  renderer.render(scene, camera)
}

window.addEventListener('load', run)
