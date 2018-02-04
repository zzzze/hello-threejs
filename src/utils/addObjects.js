export default function addObjects (scene, objArray) {
  objArray.forEach(obj => {
    if (obj.isObject3D) {
      scene.add(obj)
    } else if (typeof obj.then === 'function') {
      obj.then(mesh => scene.add(mesh))
    }
  })
}
