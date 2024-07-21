// Tests for equality and inequality with strings
let fruit = 'apple';
console.log("Is fruit == 'apple'? I predict True:", fruit == 'apple');   // True
console.log("Is fruit != 'banana'? I predict True:", fruit != 'banana'); // True
console.log("Is fruit == 'orange'? I predict False:", fruit == 'orange'); // False
console.log("Is fruit != 'apple'? I predict False:", fruit != 'apple'); // False

// Tests using the lower case function
let city = 'New York';
console.log("Is city.toLowerCase() == 'new york'? I predict True:", city.toLowerCase() == 'new york'); // True

// Numerical tests
let x = 10, y = 20;
console.log("Is x < y? I predict True:", x < y);       // True
console.log("Is x > y? I predict False:", x > y);      // False
console.log("Is x >= 10? I predict True:", x >= 10);   // True
console.log("Is y <= 20? I predict True:", y <= 20);    // True

// Tests using "and" and "or" operators
let temperature = 25;
console.log("Is temperature > 20 and temperature < 30? I predict True:", temperature > 20 && temperature < 30); // True
console.log("Is temperature > 30 or temperature < 20? I predict False:", temperature > 30 || temperature < 20); // False

// Test whether an item is in an array
let colors = ['red', 'green', 'blue'];
console.log("Is 'red' in colors? I predict True:", colors.includes('red')); // True

// Test whether an item is not in an array
console.log("Is 'yellow' not in colors? I predict True:", !colors.includes('yellow')); // True

// Alien Colors #1
let alien_color = 'green';
if (alien_color === 'green') {
    console.log("The player just earned 5 points!");
} else {
    console.log("The player didn't earn any points.");
}

alien_color = 'yellow';
if (alien_color === 'green') {
    console.log("The player just earned 5 points!");
} else {
    console.log("The player didn't earn any points.");
}
