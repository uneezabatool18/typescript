// Define the show_magicians function
function show_gicians(magicians) {
    magicians.forEach(magician => console.log(magician));
}

// Define the make_great function
function make_great(magicians) {
    return magicians.map(magician => `the Great ${magician}`);
}

// Define an array of magician's names
const magician_nes = ['Merlin', 'David Copperfield', 'Houdini', 'Penn', 'Teller'];

// Call make_great to modify the magician_names array
const great_magicians = make_great(magician_nes);

// Call show_magicians to see the modified list
show_gicians(great_magicians);
