// Define the function to store information about a car in an object
function createCar(manufacturer, modelName, ...options) {
    return {
        manufacturer,
        modelName,
        ...options
    };
}

// Call the function with required information and additional name-value pairs
const carInfo = createCar('Toyota', 'Corolla', { color: 'blue' }, { features: ['automatic transmission'] });

// Print the object to make sure all the information was stored correctly
console.log(carInfo);
