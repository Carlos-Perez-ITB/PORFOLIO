import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const radius = 1;
const rings = 15;

// --- A. CONFIGURACIÓN BÁSICA ---
//Escene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x202020); // Color de fondo gris oscuro

//1. Camara
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 2, 5); // Movemos la cámara un poco atrás y arriba

//2. Rende
const renderer = new THREE.WebGLRenderer({ antialias: true }); // Antialias para que se vea suave
renderer.setSize(window.innerWidth, window.innerHeight);
//añadimos este nuevo elemento al DOM
document.body.appendChild(renderer.domElement);

// --- B. LUCES  ---
// Luz ambiental (ilumina todo suavemente)
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

// Luz direccional (como el sol)
const dirLight = new THREE.DirectionalLight(0xffffff, 1);
dirLight.position.set(5, 5, 5);
scene.add(dirLight); 

// --- C. OBJETOS ---
// Vamos a crear un cubo pero con material que reaccione a la luz
const geometry = new THREE.BoxGeometry(2, 3, 1);
const geometry2 = new THREE.SphereGeometry(radius, rings, rings);
const geometry3 = new THREE.BoxGeometry(0.5, 4, 0.5);
const geometry4 = new THREE.BoxGeometry(0.5, 4, 0.5);
const geometry5= new THREE.CylinderGeometry( 0.5, 0.2, 5, 32 );
const geometry6= new THREE.CylinderGeometry( 0.5, 0.2, 5, 32 );
const geometry7= new THREE.BoxGeometry(0.5, 0.2, 1);
const geometry8= new THREE.BoxGeometry(0.5, 0.2, 1);
const geomatry9 = new THREE.BoxGeometry(1.8, 0.2, 2.5);
const geometry10= new THREE.CylinderGeometry( 1, 1, 2, 32 );
const material = new THREE.MeshStandardMaterial({
    color: 0xff0000,
    roughness: 0.2, // Qué tan áspero es
    metalness: 0.5  // Qué tan metálico es
});

const material2 = new THREE.MeshStandardMaterial({
    color: 0x000000,
    roughness: 0.2, // Qué tan áspero es
    metalness: 0.5  // Qué tan metálico es
});

const material3 = new THREE.MeshStandardMaterial({
    color: 0xfdddca,
    roughness: 0.2, // Qué tan áspero es
    metalness: 0.5  // Qué tan metálico es
});


const cube = new THREE.Mesh(geometry, material);
scene.add(cube);
const sphere = new THREE.Mesh(geometry2, material3);
sphere.position.y = 2.5;
scene.add(sphere);
const armL = new THREE.Mesh(geometry3, material);
armL.position.x = 1.3;
armL.position.y = -0.5;
scene.add(armL);
const armR = new THREE.Mesh(geometry4, material);
armR.position.x = -1.3;
armR.position.y=-0.5;
scene.add(armR);
const legL = new THREE.Mesh(geometry5, material2);
legL.position.x = 0.5;
legL.position.y = -2.5;
scene.add(legL);
const legR = new THREE.Mesh(geometry6, material2);
legR.position.x = -0.5;
legR.position.y = -2.5;
scene.add(legR);
const feetL = new THREE.Mesh(geometry7, material2);
feetL.position.x = 0.5;
feetL.position.y = -5;
feetL.position.z = 0.25;
scene.add(feetL);
const feetR = new THREE.Mesh(geometry8, material2);
feetR.position.x = -0.5;
feetR.position.y = -5;
feetR.position.z = 0.25;
scene.add(feetR);
const baseCap = new THREE.Mesh (geomatry9, material2);
baseCap.position.y = 3;
baseCap.position.z = 0.4;
scene.add(baseCap);
const cap = new THREE.Mesh(geometry10, material2);
cap.position.y = 4;
scene.add(cap);



// --- D. CONTROLES (La navegación) ---
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true; // Añade inercia al movimiento (más suave)

// --- E. ANIMACIÓN (Game Loop) ---
function animate() {
    requestAnimationFrame(animate);

    // Pequeña rotación automática
    cube.rotation.y += 0;
    cube.rotation.x += 0;

    controls.update(); // Necesario por el damping
    renderer.render(scene, camera);
}

animate();

// Ajustar si cambian el tamaño de la ventana
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
