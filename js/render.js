const containerId = "threeD-container";
const modelPath = "models/macintosh/scene.gltf";


const container = document.getElementById(containerId);

// Dimensions
const WIDTH = 500;
const HEIGHT = 500;

// Renderer
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(WIDTH, HEIGHT);
container.appendChild(renderer.domElement);

// Scene
const scene = new THREE.Scene();

// Camera
const camera = new THREE.PerspectiveCamera(20, WIDTH / HEIGHT, 0.1, 10000);
camera.position.set(2, 0, 5.5);

// Lights
const addSpotLight = (x, y, z) => {
    const light = new THREE.SpotLight(0xffffff,2.0);
    light.position.set(x, y, z);
    scene.add(light);
};

addSpotLight(0, 0, 5);
addSpotLight(0, 0, -5);
addSpotLight(0, 5, 0);
addSpotLight(0, -5, 0);

// Loader
const loader = new THREE.GLTFLoader();
loader.load(modelPath, (model) => {
    const mesh = model.scene;
    mesh.position.set(0.8, -0.45, 1.3);
    mesh.scale.set(0.03, 0.03, 0.03);
    mesh.rotation.x = 0.15;
    mesh.rotation.y = 0.2;
    mesh.rotation.z = 0;
    scene.add(mesh);
});


// Controls
const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableZoom = false;
controls.enablePan = false;

//show axis
const axesHelper = new THREE.AxesHelper(5);

// Animation loop
const animate = () => {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
};

animate();