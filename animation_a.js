// Create a scene
var scene = new THREE.Scene();

// Create a camera
var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
camera.position.z = 30;

// Create a renderer
var renderer = new THREE.WebGLRenderer({canvas: document.getElementById("background")});
renderer.setSize(window.innerWidth, window.innerHeight);

// Create a brain geometry
var brainGeometry = new THREE.SphereGeometry(8, 32, 32);

// Create a brain material
var brainMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true });

// Create a brain mesh
var brain = new THREE.Mesh(brainGeometry, brainMaterial);
scene.add(brain);

// Create an array of neurons
var neurons = [];

// Create a neuron geometry
var neuronGeometry = new THREE.SphereGeometry(0.5, 16, 16);

// Create a neuron material
var neuronMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

// Create 100 neurons and add them to the scene
for (var i = 0; i < 100; i++) {
  var neuron = new THREE.Mesh(neuronGeometry, neuronMaterial);
  neuron.position.x = (Math.random() - 0.5) * 20;
  neuron.position.y = (Math.random() - 0.5) * 20;
  neuron.position.z = (Math.random() - 0.5) * 20;
  neurons.push(neuron);
  scene.add(neuron);
}

// Create an animation loop
function animate() {
  requestAnimationFrame(animate);

  // Rotate the brain
  brain.rotation.x += 0.01;
  brain.rotation.y += 0.01;

  // Move the neurons around
  for (var i = 0; i < neurons.length; i++) {
    neurons[i].position.x += (Math.random() - 0.5) * 0.2;
    neurons[i].position.y += (Math.random() - 0.5) * 0.2;
    neurons[i].position.z += (Math.random() - 0.5) * 0.2;
  }

  // Render the scene
  renderer.render(scene, camera);
}

animate();
