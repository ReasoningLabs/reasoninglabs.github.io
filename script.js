const container = document.querySelector('.container');
const eyesContainer = document.querySelector('.eyes-container');

// wait for page to load before running animation
window.addEventListener('load', function() {
    eyesContainer.style.display = 'flex';
});

// remove eyes and show content after animation is finished
// setTimeout(function() {
//     eyesContainer.style.display = 'none';
//     container.classList.remove('hidden');
// }, 5500);

// remove eyes and show content after animation is finished
eyesContainer.addEventListener('animationend', function() {
    eyesContainer.style.display = 'none';
    container.classList.remove('hidden');
    container.classList.add('fade-in');
});


particlesJS('particles-js', {
    particles: {
        number: {
            value: 100, // Adjust the number of particles
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: '#ffffff' // Particle color
        },
        shape: {
            type: 'circle', // Particle shape
            stroke: {
                width: 0,
                color: '#000000'
            },
            polygon: {
                nb_sides: 5
            }
        },
        opacity: {
            value: 0.5, // Particle opacity
            random: false,
            anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 3, // Particle size
            random: true,
            anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 150, // Adjust the distance between particles
            color: '#ffffff',
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 6, // Adjust the speed of particles
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'repulse'
            },
            onclick: {
                enable: true,
                mode: 'push'
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 400,
                line_linked: {
                    opacity: 1
                }
            },
            bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3
            },
            repulse: {
                distance: 200,
                duration: 0.4
            },
            push: {
                particles_nb: 4
            },
            remove: {
                particles_nb: 2
            }
        }
    },
    retina_detect: true
});
