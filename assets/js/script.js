const planetData = {
    sun: {
        name: "The Sun",
        type: "Star",
        diameter: "1,392,684 km",
        mass: "1.989 × 10^30 kg",
        temperature: "5,500°C (surface)",
        info: "The Sun is the star at the center of our Solar System. It provides light and heat that sustains life on Earth.",
        color: "#FFD700"
    },
    mercury: {
        name: "Mercury",
        type: "Terrestrial Planet",
        diameter: "4,879 km",
        orbit: "88 Earth days",
        temperature: "-180°C to 430°C",
        info: "Mercury is the smallest planet and closest to the Sun. It has no moons and no substantial atmosphere.",
        color: "#A0522D",
        size: 10,
        orbitRadius: 100,
        speed: 8
    },
    venus: {
        name: "Venus",
        type: "Terrestrial Planet",
        diameter: "12,104 km",
        orbit: "225 Earth days",
        temperature: "462°C",
        info: "Venus is often called Earth's twin due to similar size, but its thick atmosphere makes it the hottest planet.",
        color: "#DEB887",
        size: 15,
        orbitRadius: 140,
        speed: 12
    },
    earth: {
        name: "Earth",
        type: "Terrestrial Planet",
        diameter: "12,742 km",
        orbit: "365.25 days",
        temperature: "-88°C to 58°C",
        info: "Earth is the only known planet to support life. It's the only planet known to have liquid water on its surface.",
        color: "#4169E1",
        size: 16,
        orbitRadius: 180,
        speed: 15
    },
    mars: {
        name: "Mars",
        type: "Terrestrial Planet",
        diameter: "6,779 km",
        orbit: "687 Earth days",
        temperature: "-140°C to 20°C",
        info: "Mars is known as the Red Planet. It has the largest volcano in the solar system, Olympus Mons.",
        color: "#CD853F",
        size: 12,
        orbitRadius: 220,
        speed: 18
    },
    jupiter: {
        name: "Jupiter",
        type: "Gas Giant",
        diameter: "139,820 km",
        orbit: "11.9 Earth years",
        temperature: "-110°C",
        info: "Jupiter is the largest planet. Its Great Red Spot is a giant storm that has lasted for hundreds of years.",
        color: "#DAA520",
        size: 40,
        orbitRadius: 300,
        speed: 22
    },
    saturn: {
        name: "Saturn",
        type: "Gas Giant",
        diameter: "116,460 km",
        orbit: "29.5 Earth years",
        temperature: "-140°C",
        info: "Saturn is famous for its spectacular ring system, made mostly of ice particles and rock.",
        color: "#F4A460",
        size: 35,
        orbitRadius: 380,
        speed: 25
    },
    uranus: {
        name: "Uranus",
        type: "Ice Giant",
        diameter: "50,724 km",
        orbit: "84 Earth years",
        temperature: "-195°C",
        info: "Uranus is unique as it rotates on its side. It appears to roll along its orbital path.",
        color: "#87CEEB",
        size: 25,
        orbitRadius: 440,
        speed: 28
    },
    neptune: {
        name: "Neptune",
        type: "Ice Giant",
        diameter: "49,244 km",
        orbit: "165 Earth years",
        temperature: "-200°C",
        info: "Neptune is the windiest planet, with speeds reaching 2,100 km/h. It has a Great Dark Spot similar to Jupiter's.",
        color: "#1E90FF",
        size: 24,
        orbitRadius: 500,
        speed: 30
    }
};

function createPlanet(name, data) {
    if (name === 'sun') return;

    const orbit = document.createElement('div');
    orbit.className = 'orbit';
    orbit.style.width = `${data.orbitRadius * 2}px`;
    orbit.style.height = `${data.orbitRadius * 2}px`;

    const planet = document.createElement('div');
    planet.className = 'planet';
    planet.style.width = `${data.size}px`;
    planet.style.height = `${data.size}px`;
    planet.style.backgroundColor = data.color;
    planet.onclick = () => showPlanetInfo(name);

    // Add animation
    planet.style.animation = `rotate${name} ${data.speed}s linear infinite`;
    const style = document.createElement('style');
    style.textContent = `
        @keyframes rotate${name} {
            from { transform: rotate(0deg) translateX(${data.orbitRadius}px) rotate(0deg); }
            to { transform: rotate(360deg) translateX(${data.orbitRadius}px) rotate(-360deg); }
        }
    `;
    document.head.appendChild(style);

    orbit.appendChild(planet);
    document.querySelector('.solar-system').appendChild(orbit);
}

function showPlanetInfo(planetName) {
    const planet = planetData[planetName];
    const info = document.getElementById('planetInfo');
    info.innerHTML = `
        <h2>${planet.name}</h2>
        <table>
            <tr><td>Type:</td><td>${planet.type}</td></tr>
            <tr><td>Diameter:</td><td>${planet.diameter}</td></tr>
            ${planet.orbit ? `<tr><td>Orbit Period:</td><td>${planet.orbit}</td></tr>` : ''}
            <tr><td>Temperature:</td><td>${planet.temperature}</td></tr>
        </table>
        <p>${planet.info}</p>
    `;
    info.style.display = 'block';
}

// Create planets
for (let planetName in planetData) {
    createPlanet(planetName, planetData[planetName]);
}

// Create background stars
function createStars() {
    const stars = document.createElement('div');
    stars.className = 'stars';
    for (let i = 0; i < 200; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.opacity = Math.random();
        stars.appendChild(star);
    }
    document.body.appendChild(stars);
}

// Wait for the DOM to be fully loaded before creating stars
document.addEventListener('DOMContentLoaded', function() {
    createStars();
});