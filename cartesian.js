import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'; 
import * as dat from 'dat.gui';


//pegar canvas do html
const canvas = document.querySelector('canvas.webgl')

  //Size tela e canvas
  const sizes = {
    with : 800,
    height : 600
  }
  

// Criação do renderizador
const renderer = new THREE.WebGLRenderer({
  canvas : canvas
})

//Setar tamanho da tela renderizada nesse caso pra tela
renderer.setSize(sizes.with, sizes.height);

// Criação da cena
const scene = new THREE.Scene();

//Camera, usamos a perspectiva, igual ao do ser humano
const camera = new THREE.PerspectiveCamera(75, sizes.with / sizes.height)


// Adiciona o elemento do renderizador ao documento
document.body.appendChild(renderer.domElement);

//Nova orbita
const orbit = new OrbitControls(camera, renderer.domElement);

// Posicionamento da câmera
camera.position.set(0, 2, 5);
orbit.update();

//Componentes pra um objecto
const boxGeometry = new THREE.BoxGeometry();
const boxMaterial = new THREE.MeshBasicMaterial({color: 0x00FF00})

//O tal objecto
const box = new THREE.Mesh(boxGeometry, boxMaterial)
scene.add(box);

box.position.y = .5;

 
//Plano anulado, nao é grid isso, atenção
// const planeGeometry = new THREE.PlaneGeometry(30, 30);
// const planeMaterial = new THREE.MeshBasicMaterial({color: 0xFFFFFF});
//const plane = new THREE.Mesh(planeGeometry, planeMaterial);
//scene.add(plane);

  /*
  O GridHelper é um objeto para definir grades. 
  Grades são arrays bidimensionais de linhas.
  Instancia do plano cartesiano
  */
  const gridHelper = new THREE.GridHelper(15, 15);
  scene.add(gridHelper);

  /*
Auxiliar de Eixos
Um objeto de eixo para visualizar os 3 eixos de forma simples.
O eixo X é vermelho. O eixo Y é verde. O eixo Z é azul.
*/
const axesHelper = new THREE.AxesHelper(4);
scene.add(axesHelper);

  //Nossa cena animada com requestAnimationFrame, também pode ser usado o setAnimationLoop
  //O primeiro é compatível apenas com projetos padrão, não VR. O segundo é compatível com projetos VR e não VR.
  //Sabemos que temos duas opções para criar um loop de renderização:
  function cena(time) {
    // Renderização da cena e da câmera
    requestAnimationFrame(cena);
    renderer.render(scene, camera);
  }

//Rodar cena()-
cena();
