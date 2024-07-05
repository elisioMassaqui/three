import * as THREE from 'three'
import { color } from 'three/examples/jsm/nodes/Nodes.js'

//camvas
const canvas = document.querySelector('canvas.webgl')

const scene = new THREE.Scene()
const myGeometry = new THREE.SphereGeometry(1.5, 32, 32)

//Geometry
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({color: 0xff0000, wireframe: true})
const mesh = new THREE.Mesh(geometry, material)

//Cena
scene.add(mesh)

//Size
const sizes = {
    with : 800,
    height : 600
}

//Camera
const camera = new THREE.PerspectiveCamera(75, sizes.with / sizes.height)
camera.position.z = (2)
scene.add(camera)

//Renderer
const renderer = new THREE.WebGLRenderer({
    canvas : canvas
})

//tamanho canvas
renderer.setSize(sizes.with, sizes.height)
//Renderiza cena e camera
renderer.render(scene, camera)

