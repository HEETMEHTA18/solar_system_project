async function loadData() {
    const response = await fetch("../backend/positions.json");
    return await response.json();
}

const canvas = document.getElementById("solar-system");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function drawPlanets(planets, step) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the Sun
    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2, 20, 0, 2 * Math.PI);
    ctx.fillStyle = "yellow";
    ctx.fill();

    // Draw the Earth
    const earth = planets[step];
    const x = canvas.width / 2 + earth.x * 10; // Scale position for visualization
    const y = canvas.height / 2 + earth.y * 10;
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, 2 * Math.PI);
    ctx.fillStyle = "blue";
    ctx.fill();
}

loadData().then(planets => {
    let step = 0;
    setInterval(() => {
        drawPlanets(planets, step);
        step = (step + 1) % planets.length;
    }, 50);
});