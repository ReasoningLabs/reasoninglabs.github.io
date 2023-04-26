// Create a scene
var scene = new THREE.Scene();

// Create a camera
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Create a renderer
var renderer = new THREE.WebGLRenderer({canvas: document.getElementById("background")});
renderer.setSize(window.innerWidth, window.innerHeight);

// Add ambient light to the scene
var ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

// Add directional light to the scene
var directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
directionalLight.position.set(5, 5, 5);
scene.add(directionalLight);

// Create a diamond geometry
var diamondGeometry = new THREE.OctahedronGeometry(0.7, 0);
// Use a blue material for the diamond
var diamondMaterial = new THREE.MeshPhongMaterial({color: 0x0077be, shininess: 50});

// Create multiple diamonds and arrange them in a pattern
for (var i = 0; i < 50; i++) {
  // Create a diamond mesh
  var diamond = new THREE.Mesh(diamondGeometry, diamondMaterial);
  
  // Set a random rotation axis and speed for the diamond
  diamond.rotationAxis = new THREE.Vector3(Math.random(), Math.random(), Math.random()).normalize();
  diamond.rotationSpeed = Math.random() * 0.05;
  
  // Place the diamond in a pattern
  if (i % 4 === 0) {
    diamond.position.x = -4;
    diamond.position.y = 4;
    diamond.position.z = (Math.random() - 0.5) * 10;
  } else if (i % 4 === 1) {
    diamond.position.x = 4;
    diamond.position.y = 4;
    diamond.position.z = (Math.random() - 0.5) * 10;
  } else if (i % 4 === 2) {
    diamond.position.x = -4;
    diamond.position.y = -4;
    diamond.position.z = (Math.random() - 0.5) * 10;
  } else {
    diamond.position.x = 4;
    diamond.position.y = -4;
    diamond.position.z = (Math.random() - 0.5) * 10;
  }
  
  scene.add(diamond);
}

// Create an animation loop
function animate() {
  requestAnimationFrame(animate);

  // Rotate and animate the diamonds
  scene.children.forEach(function(child) {
    if (child instanceof THREE.Mesh) {
      child.rotation.x += child.rotationSpeed;
      child.rotation.y += child.rotationSpeed;
      child.rotation.z += child.rotationSpeed;
      child.rotateOnAxis(child.rotationAxis, child.rotationSpeed);
    }
  });

  // Render the scene
  renderer.render(scene, camera);
}

animate();
