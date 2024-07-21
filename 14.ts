let guetList = ["Albert Einstein", "Marie Curie", "Leonardo da Vinci"];

// Printing invitations to each person on the guest list
for (let i = 0; i < guetList.length; i++) {
    console.log("Dear " + guetList[i] + ",\nI would like to invite you to dinner. It would be an honor to have you join us.\nSincerely, [hannan]");
}

// Print the name of the guest who can't make it
console.log(guetList[1] + " can't make it to dinner.");

// Replace the guest who can't make it with a new person
guetList[1] = "Isaac Newton";

console.log("\n"); // Empty line for separation

// Printing invitations to each person on the updated guest list
for (let i = 0; i < guetList.length; i++) {
    console.log("Dear " + guetList[i] + ",\nI would like to invite you to dinner. It would be an honor to have you join us.\nSincerely, [hannan]");
}
