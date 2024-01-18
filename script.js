// Example JavaScript to add interactivity (replace with your logic)

document.addEventListener('DOMContentLoaded', function () {
    // Example: Change background color on button click
    const button = document.getElementById('changeColorButton');

    button.addEventListener('click', function () {
        document.body.style.backgroundColor = getRandomColor();
    });
});

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
