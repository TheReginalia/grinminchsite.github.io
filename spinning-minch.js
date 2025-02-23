document.addEventListener("DOMContentLoaded", function() {
    const minch = document.querySelector(".spinning-minch");
    const audio = document.getElementById("minch-audio");

    // Play audio immediately with no way to stop it
    audio.volume = 0.7;
    audio.play();

    // Slight distortion effect when mouse moves
    document.body.addEventListener("mousemove", (event) => {
        let x = (event.clientX / window.innerWidth - 0.5) * 20;
        let y = (event.clientY / window.innerHeight - 0.5) * 20;
        minch.style.transform = `rotate(${x}deg) scale(${1 + y * 0.01})`;
    });

    // If they leave the tab, audio stops. When they return, it plays at FULL VOLUME.
    document.addEventListener("visibilitychange", () => {
        if (document.hidden) {
            audio.pause();
        } else {
            audio.volume = 1;
            audio.play();
        }
    });
});
