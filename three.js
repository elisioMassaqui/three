
import * as THREE from 'three'

const canvas = document.querySelector('.webgl')

const cena = new THREE.Scene()

const tamanho = {with:800, height: 600}

const camera = new THREE.PerspectiveCamera(
    75,
    tamanho.with,
    tamanho.height
)
cena.add(camera)

const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})

renderer.setSize(tamanho.with, tamanho.height)

renderer.render(cena, camera)