import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import * as dat from 'dat.gui';

// Pegar canvas do HTML
const canvas = document.querySelector('canvas.webgl');

// Tamanho da tela e canvas
const sizes = {
  width: 800,
  height: 600
};

// Criação do renderizador
const renderer = new THREE.WebGLRenderer({
  canvas: canvas
});

// Setar tamanho da tela renderizada
renderer.setSize(sizes.width, sizes.height);

// Criação da cena
const scene = new THREE.Scene();

// Camera, usamos a perspectiva, igual ao do ser humano
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);

// Adiciona o elemento do renderizador ao documento
document.body.appendChild(renderer.domElement);

// Nova órbita
const orbit = new OrbitControls(camera, renderer.domElement);

// Posicionamento da câmera
camera.position.set(0, 2, 5);
orbit.update();

// Componentes pra um objeto
const boxGeometry = new THREE.BoxGeometry();
const boxMaterial = new THREE.MeshBasicMaterial({ color: 0x00FF00 });

// O tal objeto
const box = new THREE.Mesh(boxGeometry, boxMaterial);
scene.add(box);

box.position.y = 0.5;

// GridHelper
const gridHelper = new THREE.GridHelper(15, 15);
scene.add(gridHelper);

// AxesHelper
const axesHelper = new THREE.AxesHelper(4);
scene.add(axesHelper);

// Configuração do dat.GUI
const gui = new dat.GUI();

const boxFolder = gui.addFolder('Box');
boxFolder.add(box.position, 'x', -5, 5, 0.1).name('Posição X');
boxFolder.add(box.position, 'y', 0, 5, 0.1).name('Posição Y');
boxFolder.add(box.position, 'z', -5, 5, 0.1).name('Posição Z');
boxFolder.add(box.rotation, 'x', 0, Math.PI * 2, 0.1).name('Rotação X');
boxFolder.add(box.rotation, 'y', 0, Math.PI * 2, 0.1).name('Rotação Y');
boxFolder.add(box.rotation, 'z', 0, Math.PI * 2, 0.1).name('Rotação Z');
boxFolder.addColor(boxMaterial, 'color').name('Cor');
boxFolder.open();

// Nossa cena animada com requestAnimationFrame
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

// Rodar animação
animate();
