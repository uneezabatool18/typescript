let guesist = ["Albert Einstein", "Marie Curie", "Leonardo da Vinci"];

// Printing invitations to each person on the guest list
for (let i = 0; i < guesist.length; i++) {
    console.log("Dear " + guesist[i] + ",\nI would like to invite you to dinner. It would be an honor to have you join us.\nSincerely, [Your Name]");
}

// Print the name of the guest who can't make it
console.log(guesist[1] + " can't make it to dinner.");

// Replace the guest who can't make it with a new person
guesist[1] = "Isaac Newton";

console.log("\n"); // Empty line for separation

// Printing invitations to each person on the updated guest list
for (let i = 0; i < guesist.length; i++) {
    console.log("Dear " + guesist[i] + ",\nI would like to invite you to dinner. It would be an honor to have you join us.\nSincerely, [Your Name]");
}

console.log("\n"); // Empty line for separation

// Informing people about the bigger dinner table
console.log("We just found a bigger dinner table!");

// Adding one new guest to the beginning of the array
guesist.unshift("Nikola Tesla");

// Adding one new guest to the middle of the array
guesist.splice(2, 0, "Galileo Galilei");

// Adding one new guest to the end of the array using push()
guesist.push("Ada Lovelace");

// Printing invitations to each person on the updated guest list
for (let i = 0; i < guesist.length; i++) {
    console.log("Dear " + guesist[i] + ",\nI would like to invite you to dinner. It would be an honor to have you join us.\nSincerely, [Your Name]");
}
