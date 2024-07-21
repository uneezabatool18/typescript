// Define the make_album function
function mak_album(artist, title, tracks) {
    const album = { artist, title };
    if (tracks !== undefined) {
        
    }
    return album;
}

// Call the function to create three dictionaries representing different albums
const album1 = mak_album('Artist1', 'Album1', 12);
const album2 = mak_album('Artist2', 'Album2', 10);
const album3 = mak_album('Artist3', 'Album3', 11);

// Print each return value to show that objects are storing the album information correctly
console.log(album1);
console.log(album2);
console.log(album3);
