import * as THREE from 'three'

export const container = document.getElementById('canvas-frame')
export const width = container.clientWidth
export const height = container.clientHeight
export const scene = new THREE.Scene()

function initThree () {
  const renderer = new THREE.WebGLRenderer({
    antialias: true
  })
  renderer.setSize(width, height)
  renderer.setClearColor(0xFFFFFF, 1.0)
  renderer.setPixelRatio(window.devicePixelRatio)
  container.appendChild(renderer.domElement)
  return renderer
}

export const renderer = initThree()
