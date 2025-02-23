// Minch Image Spin Logic
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

// Code for [REDACTED] access gate
function checkCode() {
    let userInput = prompt("Enter the 4-digit access code:");
    
    if (userInput === "1968") {
        window.location.href = "redacted.html"; // Redirect if correct
    } else {
        alert("The bowl rejects your offering."); // Cryptic rejection message
    }
}

// Ban France and send them to the Duck Zone
fetch("https://ipapi.co/json")
    .then(response => response.json())
    .then(data => {
        if (data.country_code === "FR") {
            window.location.href = "https://commons.m.wikimedia.org/w/index.php?search=French+Duck&title=Special:MediaSearch&type=image";
        }
    })
    .catch(error => console.error("Error detecting country:", error));
