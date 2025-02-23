document.addEventListener("DOMContentLoaded", function () {
    const heart = document.getElementById("heart");

    // Get initial position
    let posX = heart.offsetLeft;
    let posY = heart.offsetTop;

    document.addEventListener("mousemove", function (event) {
        const rect = heart.getBoundingClientRect();

        // Get mouse position
        const mouseX = event.clientX;
        const mouseY = event.clientY;

        // Calculate direction away from the mouse
        const deltaX = rect.left + rect.width / 2 - mouseX;
        const deltaY = rect.top + rect.height / 2 - mouseY;
        const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2) || 1; // Avoid division by zero

        // Set speed relative to distance
        const moveSpeed = Math.min(100, 1000 / distance); // Adjust speed scaling
        const moveX = (deltaX / distance) * moveSpeed;
        const moveY = (deltaY / distance) * moveSpeed;

        // Update position
        posX += moveX;
        posY += moveY;
        heart.style.position = "absolute";
        heart.style.left = `${posX}px`;
        heart.style.top = `${posY}px`;
    });
});
