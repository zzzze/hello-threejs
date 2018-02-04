export default function addLights (scene, lights) {
  lights.forEach(light => {
    if (light.isLight) {
      scene.add(light)
    }
  })
}
