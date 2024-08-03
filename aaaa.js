import * as THREE from 'three'
import gsap from 'gsap';

const canvas = document.querySelector('canvas.webgl')
const cena = new THREE.Scene();

const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({color: 0xFF4405})
const cubo = new THREE.Mesh(geometry, material)
cena.add(cubo)
cubo.position.y = .5

const tamanho = {width: 650, height: 450}

const camera = new THREE.PerspectiveCamera(75, tamanho.width / tamanho.height)
cena.add(camera)
camera.position.z = 4
camera.position.y = Math.PI / 1
camera.rotation.x = -.5

const GridHelper = new THREE.GridHelper(4.5)
cena.add(GridHelper)
GridHelper.rotation.y = 10

const axesHelper = new THREE.AxesHelper(2)
cubo.add(axesHelper)

const helper = new THREE.ArrowHelper()
cubo.add(helper)


const renderizar = new THREE.WebGLRenderer({canvas: canvas});
renderizar.setSize(tamanho.width, tamanho.height);

const date = Date.now()

function animar(params) {

    cubo.rotation.y -= 1 * .030
    cubo.rotation.z += 20 * 0.002

    renderizar.render(cena, camera);
    requestAnimationFrame(animar)
}
animar()