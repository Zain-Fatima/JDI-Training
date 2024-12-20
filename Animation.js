import * as THREE from "three"  
const canvas = document.querySelector('canvas.webgl');
//scene
const scene = new THREE.Scene();
//object
const geometry = new THREE.BoxGeometry(1,1,1);
const material = new THREE.MeshBasicMaterial({ color: 'blueviolet'});
const mesh = new THREE.Mesh(geometry, material);
mesh.rotation.y = 0.5
scene.add(mesh);
//camera
const sizes = {
    width: 600,
    height: 500
}
const camera = new THREE.PerspectiveCamera(75, sizes.width/sizes.height)
camera.position.z = 3;
scene.add(camera);

//renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height);
renderer.setAnimationLoop(animate);

//Animation
function animate() {
    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.01;

    renderer.render(scene, camera);
};