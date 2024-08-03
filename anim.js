import * as THREE from 'three';
import { color } from 'three/examples/jsm/nodes/Nodes.js'; // Não está sendo utilizado no código
import gsap from 'gsap';

console.log(gsap);

// Configurações básicas
const canvas = document.querySelector('canvas.webgl');
const scene = new THREE.Scene();
const sizes = { width: 450, height: 350 };

// Configuração da câmera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 5;
scene.add(camera);

// Configuração do objeto
const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
const boxMaterial = new THREE.MeshBasicMaterial({ color: 0xFF80 });
const cubo = new THREE.Mesh(boxGeometry, boxMaterial);
scene.add(cubo);

// Configuração do renderizador
const renderer = new THREE.WebGLRenderer({ canvas: canvas });
renderer.setSize(sizes.width, sizes.height);

// Função de animação com GSAP
const gsapAnim = () => {
  renderer.render(scene, camera);
  requestAnimationFrame(gsapAnim);
};
gsapAnim();

// Animação utilizando deltaTime
let time = Date.now();
const DeltaTime = () => {
  const currentTime = Date.now();
  const deltaTime = currentTime - time;
  time = currentTime;

  console.log(deltaTime);
  
  cubo.rotation.y += 0.01 * deltaTime;

  renderer.render(scene, camera);
  requestAnimationFrame(DeltaTime);
};
// DeltaTime(); // Descomente para ativar a animação com deltaTime

// Animação utilizando THREE.Clock
const clock = new THREE.Clock();
const CLOCK = () => {
  const elapsedTime = clock.getElapsedTime();

  cubo.position.y = Math.sin(-elapsedTime);
  cubo.position.x = Math.cos(-elapsedTime);

  renderer.render(scene, camera);
  requestAnimationFrame(CLOCK);
};
CLOCK(); // Descomente para ativar a animação com THREE.Clock
