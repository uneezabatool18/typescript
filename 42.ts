// Define the show_magicians function
function show_magians(magicians){
    magicians.forEach(magician => console.log(magician));
}

// Define the make_great function
function make_grt(magicians) {
    return magicians.map(magician => `the Great ${magician}`);
}

// Define an array of magician's names
const magician_nas= ['Merlin', 'David Copperfield', 'Houdini', 'Penn', 'Teller'];

// Call make_great with a copy of the magician_names array to create a separate array with the Great added
const grt_magicians = make_grt([...magician_nas]);

// Call show_magicians to show the original array of magician's names
console.log("Original Magicians:");
show_magians(magician_nas);

// Call show_magicians to show the array with the Great added to each magician's name
console.log("\nGreat Magicians:");
show_magians(grt_magicians);
