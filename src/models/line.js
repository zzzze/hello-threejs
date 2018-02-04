import * as THREE from 'three'

function initObject () {
  const geometry = new THREE.Geometry()
  const material = new THREE.LineBasicMaterial({ vertexColors: true })
  const color1 = new THREE.Color(0x00FF00)
  const color2 = new THREE.Color(0xFF0000)

  // 线的材质可以由2点的颜色决定
  geometry.vertices.push(new THREE.Vector3(-500, 0, 0))
  geometry.vertices.push(new THREE.Vector3(500, 0, 0))
  geometry.colors.push(color1, color2)

  return new THREE.Line(geometry, material, THREE.LineSegments)
}

export default initObject()
