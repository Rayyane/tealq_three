import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const scene = new THREE.Scene();
var canvas = document.getElementById("mycanvas");
var canvaswidth = canvas.clientWidth;
var canvasheight = canvas.clientHeight;
const color = new THREE.Color("rgb(16, 30, 39)");
const renderer = new THREE.WebGLRenderer({canvas:canvas, antialias:true});
renderer.setSize( canvaswidth, canvasheight );

const light1 = new THREE.PointLight(color, 5, 100, 2);
light1.position.set(10, 10, 10);
scene.add(light1);

const light2 = new THREE.PointLight(0xffffff, 2, 100, 5);
light2.position.set(-10, -10, -10);
scene.add(light2);

const camera = new THREE.PerspectiveCamera( 45, canvaswidth / canvasheight, 0.1, 100 );
camera.position.z = 9;

const texture = new THREE.TextureLoader().load('./assets/images/moon_texture_2.jpg');

const geometry = new THREE.SphereGeometry(3, 64, 64 );
const material = new THREE.MeshPhongMaterial( {
 color: 0x008080,
 map: texture
} );
const sphere = new THREE.Mesh( geometry, material );
scene.add( sphere );

renderer.render( scene, camera );
renderer.setClearColor("#ffffff", 0.0);

const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.enablePan = false;
controls.enableZoom = false;
controls.autoRotate = true;
controls.autoRotateSpeed = 2;

window.addEventListener("resize", () => {
	const canvas = document.getElementById("mycanvas");
	const canvaswidth = canvas.clientWidth;
    const canvasheight = canvas.clientHeight;

    camera.aspect = canvaswidth / canvasheight;
    camera.updateProjectionMatrix();
    console.log(canvaswidth, canvasheight, camera.aspect)
	renderer.setSize( canvaswidth, canvasheight );
});


const loop = () => {
	controls.update();
	renderer.render(scene, camera);
	window.requestAnimationFrame(loop);
}
loop();
