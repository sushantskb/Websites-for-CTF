document.addEventListener("DOMContentLoaded", function () {
    const circle = document.getElementById("circle");
    const button = document.getElementById("scoobyButton");

    button.addEventListener("mouseover", function () {
        const circleRect = circle.getBoundingClientRect();
        const maxX = window.innerWidth - circleRect.width;
        const maxY = window.innerHeight - circleRect.height;

        const newX = Math.floor(Math.random() * maxX);
        const newY = Math.floor(Math.random() * maxY);

        circle.style.left = `${newX}px`;
        circle.style.top = `${newY}px`;
    });
});
