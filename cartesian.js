import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'; 

// Criação do renderizador
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

// Adiciona o elemento do renderizador ao documento
document.body.appendChild(renderer.domElement);

// Criação da cena
const scene = new THREE.Scene();

// Criação da câmera
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

const orbit = new OrbitControls(camera, renderer.domElement);

// Posicionamento da câmera
camera.position.set(0, 2, 5);
orbit.update();

const boxGeometry = new THREE.BoxGeometry();
const boxMaterial = new THREE.MeshBasicMaterial({color: 0x00FF00})
  const box = new THREE.Mesh(boxGeometry, boxMaterial)
  scene.add(box);

  const planeGeometry = new THREE.PlaneGeometry(30, 30);
  const planeMaterial = new THREE.MeshBasicMaterial({color: 0xFFFFFF});
  const plane = new THREE.Mesh(planeGeometry, planeMaterial);
  scene.add(plane);

  const gridHelper = new THREE.GridHelper(30, 20);
  scene.add(gridHelper);

  function animate(time) {
    box.rotation.x = time / 1000;
    box.rotation.y = time / 1000;
    // Renderização da cena e da câmera
    renderer.render(scene, camera);
  }


const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);

renderer.setAnimationLoop(animate);
