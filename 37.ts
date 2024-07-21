// Define the describe_city function with a default parameter for country
function describe_city(city, country = 'Country') {
    console.log(`${city} is in ${country}.`);
}

// Call the function for three different cities
describe_city('Karachi', 'Pakistan');  // City in the default country
describe_city('New York', 'USA');      // City not in the default country
describe_city('London');               // City in the default country
