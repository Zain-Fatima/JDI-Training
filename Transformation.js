import * as THREE from "three"  
const canvas = document.querySelector('canvas.webgl');
//scene
const scene = new THREE.Scene();
//object
const geometry = new THREE.BoxGeometry(1,1,1);
const material = new THREE.MeshBasicMaterial({ color: 'violet'});
const mesh = new THREE.Mesh(geometry, material);
/*
mesh.position.x = 2
mesh.position.y = 2
mesh.position.z = -1;
*/
//mesh.position.set(1,1,-2);
console.log(mesh.position.length())
scene.add(mesh);
//camera
const sizes = {
    width: 600,
    height: 500
}
const camera = new THREE.PerspectiveCamera(75, sizes.width/sizes.height)
camera.position.z = 4;
scene.add(camera);
//console.log(camera.position)  default(0,0,0)
console.log(mesh.position.distanceTo(camera.position));
//camera.position.set(1,1,3);
//axis of an object
const axesHelper = new THREE.AxesHelper(1);
//mesh.add(axesHelper);
axesHelper.position.set(-3,2,-2)
scene.add(axesHelper);

//scale default(1,1,1) - order(XYZ)
/*
mesh.scale.y = 4;
mesh.scale.x = 2;
*/
//mesh.scale.set(2,4,0.5)

//rotation - default(Math.PI)
//mesh.rotation.y = Math.PI*0.2;

//group
const group = new THREE.Group();
//group.position.y = 2;
group.scale.y = 2.2;
//group.rotation.y = 2.3;
scene.add(group);
//group.add(axesHelper)
const cube = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color: 'darkcyan'})
)
cube.position.x = -2;
group.add(cube);

const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color: 'cornflowerblue'})
)
cube1.position.x = 2;
group.add(cube1);
group.add(mesh);

camera.lookAt(group.position);
//renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
