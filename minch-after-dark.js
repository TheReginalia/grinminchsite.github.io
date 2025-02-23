document.addEventListener("DOMContentLoaded", function() {
    const minchContainer = document.getElementById("minch-container");
    const audio = document.getElementById("scream-audio");

    // Function to start audio once user interacts
    function startScreams() {
        audio.play().catch(error => console.log("Autoplay blocked, waiting for interaction."));
        document.removeEventListener("click", startScreams);
        document.removeEventListener("mousemove", startScreams);
    }

    // Waits for the first interaction to start the screams
    document.addEventListener("click", startScreams);
    document.addEventListener("mousemove", startScreams);

    // Generates the floating Minches
    for (let i = 0; i < 50; i++) { 
        let minch = document.createElement("img");
        minch.src = "tiny-minch.png";
        minch.classList.add("tiny-minch");

        // Random positioning
        minch.style.left = Math.random() * 100 + "vw";
        minch.style.top = Math.random() * 100 + "vh";

        // Floating animation
        minch.style.animation = `float ${Math.random() * 5 + 3}s infinite alternate ease-in-out`;

        minchContainer.appendChild(minch);
    }
});
