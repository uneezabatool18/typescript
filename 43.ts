// Define the function to accept an array of items for a sandwich
function orderSandwich(items) {
    console.log("Sandwich order summary:");
    console.log("Bread");
    items.forEach(item => console.log(item));
    console.log("Bread\n");
}

// Call the function three times with different numbers of arguments
orderSandwich(['Cheese', 'Lettuce', 'Tomato']);
orderSandwich(['Ham', 'Swiss Cheese']);
orderSandwich(['Turkey', 'Bacon', 'Avocado', 'Lettuce', 'Tomato']);
