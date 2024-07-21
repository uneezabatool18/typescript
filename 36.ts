// Define the make_shirt function with default parameters
function mae_shirt(size = 'large', message = 'I love TypeScript') {
    console.log(`The shirt size is ${size.toUpperCase()} and the message printed on it is: "${message}".`);
}

// Make a large shirt with the default message
mae_shirt();

// Make a medium shirt with the default message
mae_shirt('medium');

// Make a shirt of any size with a different message
mae_shirt('small', 'Hello, World!');
