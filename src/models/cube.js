import * as THREE from 'three'
import crateTexture from '../../res/textures/crate.gif'

// const geometry = new THREE.BoxGeometry(200, 200, 200)
// for (let i = 0; i < geometry.faces.length; i += 2) {
//   const hex = Math.random() * 0xffffff
//   // const hex = 0xffffff
//   geometry.faces[ i ].color.setHex(hex)
//   geometry.faces[ i + 1 ].color.setHex(hex)
// }
// var material = new THREE.MeshBasicMaterial({color: 0xFFFFFF})

const geometry = new THREE.CubeGeometry(200, 200, 200, 4, 4)
// const material = new THREE.MeshLambertMaterial({color: 0xFFFFFF})
var texture = new THREE.TextureLoader().load(crateTexture)
var material = new THREE.MeshBasicMaterial({ map: texture })
const mesh = new THREE.Mesh(geometry, material)
mesh.position.set(0, 0, 0)

const cube = new THREE.Mesh(geometry, material)
cube.rotation.y = Math.PI / 4
cube.rotation.x = Math.PI / 8

export default cube
