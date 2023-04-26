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
