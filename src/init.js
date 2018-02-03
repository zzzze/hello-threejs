import * as THREE from 'three'

export const width = document.getElementById('canvas-frame').clientWidth
export const height = document.getElementById('canvas-frame').clientHeight
export const scene = new THREE.Scene()

function initThree () {
  const renderer = new THREE.WebGLRenderer({
    antialias: true
  })
  renderer.setSize(width, height)
  renderer.setClearColor(0xFFFFFF, 1.0)
  renderer.setPixelRatio(window.devicePixelRatio)
  document.getElementById('canvas-frame').appendChild(renderer.domElement)
  return renderer
}

export const renderer = initThree()
