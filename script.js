const images = document.querySelectorAll('.carousel-image');
const audio = document.getElementById('minch-audio');

images.forEach(image => {
    image.addEventListener('click', () => {
        // Start spinning animation
        image.classList.add('spin');

        // Play the audio
        audio.currentTime = 0; // Reset to the beginning in case it was played before
        audio.play();

        // Remove the spin class after the animation finishes
        setTimeout(() => {
            image.classList.remove('spin');
        }, 1000); // Same duration as the CSS animation
    });
});
