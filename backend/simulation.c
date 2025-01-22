#include <stdio.h>
#include <math.h>
#include <string.h>

#define PI 3.14159265359

typedef struct {
    char name[20];
    double diameter;        // km
    double mass;           // kg
    double semi_major_axis;// AU
    double orbital_period; // Earth years
    double rotation_period;// Earth days
    double orbital_speed;  // km/s
    double gravity;        // m/s^2
    char atmosphere[100];  // Main atmospheric components
} Planet;

// Function to calculate orbital position
void calculate_orbital_position(Planet planet, double time, double* x, double* y) {
    double angle = (2 * PI * time) / planet.orbital_period;
    *x = planet.semi_major_axis * cos(angle);
    *y = planet.semi_major_axis * sin(angle);
}

// Function to calculate escape velocity
double calculate_escape_velocity(Planet planet) {
    const double G = 6.67430e-11; // Gravitational constant
    return sqrt((2 * G * planet.mass) / (planet.diameter * 500)); // radius = diameter/2, converted to meters
}

int main() {
    // Initialize planets with real data
    Planet planets[] = {
        {"Mercury", 4879, 3.285e23, 0.387, 0.24, 58.6, 47.36, 3.7, "Minimal - Sodium, Potassium"},
        {"Venus", 12104, 4.867e24, 0.723, 0.62, -243.0, 35.02, 8.87, "CO2, Nitrogen"},
        {"Earth", 12742, 5.972e24, 1.000, 1.00, 1.0, 29.78, 9.81, "Nitrogen, Oxygen"},
        {"Mars", 6779, 6.390e23, 1.524, 1.88, 1.03, 24.07, 3.71, "CO2, Nitrogen"},
        {"Jupiter", 139820, 1.898e27, 5.203, 11.86, 0.41, 13.07, 24.79, "Hydrogen, Helium"},
        {"Saturn", 116460, 5.683e26, 9.537, 29.46, 0.44, 9.68, 10.44, "Hydrogen, Helium"},
        {"Uranus", 50724, 8.681e25, 19.191, 84.01, -0.72, 6.80, 8.69, "Hydrogen, Helium, Methane"},
        {"Neptune", 49244, 1.024e26, 30.069, 164.79, 0.67, 5.43, 11.15, "Hydrogen, Helium, Methane"}
    };

    int num_planets = sizeof(planets) / sizeof(planets[0]);

    // Print detailed information for each planet
    printf("Solar System Planetary Data:\n");
    printf("============================\n\n");

    for (int i = 0; i < num_planets; i++) {
        printf("Planet: %s\n", planets[i].name);
        printf("Diameter: %.0f km\n", planets[i].diameter);
        printf("Orbital Period: %.2f Earth years\n", planets[i].orbital_period);
        printf("Rotation Period: %.2f Earth days\n", planets[i].rotation_period);
        printf("Surface Gravity: %.2f m/s²\n", planets[i].gravity);
        printf("Escape Velocity: %.2f km/s\n", calculate_escape_velocity(planets[i]));
        printf("Atmosphere: %s\n", planets[i].atmosphere);
        
        // Calculate current position (example: at t=0)
        double x, y;
        calculate_orbital_position(planets[i], 0, &x, &y);
        printf("Initial Position (AU): (%.2f, %.2f)\n", x, y);
        printf("\n----------------------------\n\n");
    }

    return 0;
}