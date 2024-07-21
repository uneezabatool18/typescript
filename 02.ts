function toTitleCase(str) {
    return str.replace(/\b\w/g, function(char) {
        return char.toTitleCase();
    });
}

let Name = "Eric";

// Lowercase
console.log("Lowercase:", Name.toLowerCase());

// Uppercase
console.log("Uppercase:", Name.toUpperCase());

// Titlecase
console.log("Titlecase:", toTitleCase(Name));
