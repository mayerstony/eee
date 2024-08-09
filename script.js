// script.js
document.addEventListener("DOMContentLoaded", function() {
    const leftOverlay = document.getElementById("leftOverlay");
    const rightOverlay = document.getElementById("rightOverlay");
    const content = document.getElementById("content");
    const floatingGeometryContainer = document.getElementById("floatingGeometryContainer");

    // Trigger the opening animation after a short delay
    setTimeout(() => {
        leftOverlay.classList.add("open");
        rightOverlay.classList.add("open");
    }, 500); // Delay before the animation starts

    // Remove the overlays after the animation is complete
    leftOverlay.addEventListener("transitionend", () => {
        leftOverlay.style.display = "none";
        rightOverlay.style.display = "none";
        content.classList.add("visible");
    });

    // Generate floating geometries
    const createGeometry = () => {
        const geometry = document.createElement('div');
        const size = Math.random() * 50 + 10; // 10px to 60px
        geometry.style.width = `${size}px`;
        geometry.style.height = `${size}px`;
        geometry.style.left = `${Math.random() * 100}vw`; // Random horizontal position
        geometry.classList.add('floating-geometry');
        floatingGeometryContainer.appendChild(geometry);

        // Remove the geometry after animation ends
        geometry.addEventListener('animationend', () => {
            geometry.remove();
        });
    };

    // Create multiple geometries at different intervals
    setInterval(createGeometry, 500); // Every 0.5 seconds
});
