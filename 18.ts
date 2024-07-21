let inviteList = ["Albert Einstein", "Marie Curie", "Leonardo da Vinci", "Isaac Newton", "Nikola Tesla", "Galileo Galilei", "Ada Lovelace"];

// Printing the number of people being invited to dinner
console.log("Number of people invited to dinner:", inviteList.length);

// Printing invitations to each person on the guest list
for (let i = 0; i < inviteList.length; i++) {
    console.log("Dear " + inviteList[i] + ",\nI would like to invite you to dinner. It would be an honor to have you join us.\nSincerely, [Your Name]");
}
