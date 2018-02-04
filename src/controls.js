import * as THREE from 'three'
import 'three-examples/controls/TrackballControls'
import camera from './camera'

const controls = new THREE.TrackballControls(camera)
controls.rotateSpeed = 5.0
controls.zoomSpeed = 5
controls.panSpeed = 2
controls.noZoom = false
controls.noPan = false
controls.staticMoving = true
controls.dynamicDampingFactor = 0.3

export default controls
