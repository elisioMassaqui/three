import * as THREE from 'three';

// Canvas
const canvas = document.querySelector('canvas.webgl');

// Scene
const scene = new THREE.Scene();

/**
 * Object - Single Box
 */
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Descomente para ajustar a posição do mesh
// mesh.position.x = 10;
// mesh.position.y = 1;

/**
 * Group of Cubes
 */
const grupo = new THREE.Group();
scene.add(grupo);
grupo.position.y = -2;

// Cube 1
const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0xff3322 })
);
grupo.add(cube1);

// Cube 2
const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0xff5329 })
);
grupo.add(cube2);
cube2.position.x = -2;

// Cube 3
const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0xff5502 })
);
grupo.add(cube3);
cube3.position.x = 2;

/**
 * Axes Helper
 */
const axesHelper = new THREE.AxesHelper();
scene.add(axesHelper);

/**
 * Sizes
 */
const sizes = { width: 500, height: 300 };

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(
    75,
    sizes.width / sizes.height
);
scene.add(camera);
camera.position.z = 4;
// Descomente para ajustar a posição da câmera
// camera.position.y = 5;
// camera.position.x = 1;

console.log("Distância entre objeto e câmera:", mesh.position.distanceTo(camera.position));

/**
 * Mesh Scaling and Rotation
 */
mesh.scale.set(2, 0.5, 0.5);

// Descomente para ajustar a rotação do mesh
// mesh.rotation.reorder('XYZ');
// mesh.rotation.x;
// mesh.rotation.z = Math.PI;
// mesh.rotation.y;

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({ canvas: canvas });
renderer.setSize(sizes.width, sizes.height);

// Render initial scene
renderer.render(scene, camera);

/**
 * Animations
 */
const tick = () => {
    // Update objects
    mesh.rotation.z += 0.05;
    grupo.rotation.z -= 0.05;

    // Render scene
    renderer.render(scene, camera);

    // Make camera look at the mesh
    camera.lookAt(mesh.position);

    // Request next frame
    window.requestAnimationFrame(tick);
};

tick();
