import * as THREE from 'three'

//pegar canvas do html
const canvas = document.querySelector('canvas.webgl')
//Criar cena
const scene = new THREE.Scene()

//Mesh = geometria + material.

//Geometry
const geometry = new THREE.BoxGeometry(1, 1, 1)
const myGeometry = new THREE.SphereGeometry(1.5, 32, 32)

// +

//Material
const material = new THREE.MeshBasicMaterial({color: 0x3f3485, wireframe: true})

// =

//Mesh
const mesh = new THREE.Mesh(geometry, material)
const mesh2 = new THREE.Mesh(geometry, material)
const mesh3 = new THREE.Mesh(geometry, material)

//Transform dos meshs: position, scale, rotation, quaternion (x, y, z, w)

//Mesh 01

//position
mesh.position.y = (0.3)
mesh.position.x = (-0.5)
mesh.position.z = (-0.5)
//escala
mesh.scale.y = (-2)
//rotation

//Mesh 02
//position
mesh2.position.z = (-3)
mesh2.position.x = (0.70)
//rotation
//escala
mesh2.scale.x = (1.2)

//Mesh3

//position
mesh3.position.z = (-2)
mesh3.position.x = (-2.5)
//rotation
mesh3.rotation.z = (1)
//escala

//Add mesh na Cena
scene.add(mesh)
scene.add(mesh2)
scene.add(mesh3)

//Ver propriedades no console.
console.log("mesh2 position: ", mesh2.position)
console.log("mesh3 rotation", mesh3.scale)
console.log("mesh escala: ", mesh.scale)

//Posição
console.log('mesh totalPosition: ', mesh.position.length())
/*
Quando você normaliza um vetor, 
o comprimento do vetor normalizado deve ser exatamente 1.
No entanto, devido às limitações de precisão
dos cálculos de ponto flutuante,
você pode obter um valor muito próximo,
mas não exatamente igual a 1.
Isso é esperado e geralmente aceitável na prática.
Normalize significa arredondar qualquer valor maiior que 3.
*/
mesh.position.normalize()
console.log("normalize mesh totalPosition: ", mesh.position.length())


//Escala total
console.log('mesh2 totalEscala: ', mesh2.scale.length())
//Rotação total, not is a
//console.log(mesh3.rotation.length())

//colocar os tres vectores ao mesmo tempo com set
mesh.position.set(-.5, 0, -.7)
console.log('mesh setar xyz ao mesmo tempo', mesh.position)




//Size tela e canvas
const sizes = {
    with : 800,
    height : 600
}

//Camera, usamos a perspectiva, igual ao do ser humano
const camera = new THREE.PerspectiveCamera(75, sizes.with / sizes.height)
camera.position.z = (2)
scene.add(camera)

//Deve ser declarado apos a inicializaçao da camera isso.
console.log("distancia de um objecto referente a camera: ", mesh.position.distanceTo(camera.position))

//Renderer, receba o canvas do html
const renderer = new THREE.WebGLRenderer({
    canvas : canvas
})

//tamanho canvas
renderer.setSize(sizes.with, sizes.height)

//Renderiza cena no html, e camera
renderer.render(scene, camera)

