// Get the elements by their IDs
const lightOnButton = document.getElementById('lightOn');
const lightOffButton = document.getElementById('lightOff');
const myImage = document.getElementById('myImage');

// Add event listeners for the buttons
lightOnButton.onclick = function() {
    myImage.src = 'assets/pic_bulbon.gif'; // Corrected to switch to "light on" image
};

lightOffButton.onclick = function() {
    myImage.src = 'assets/pic_bulboff.gif'; // Corrected to switch back to "light off" image
};
