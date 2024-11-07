//Use query Selectors to get the class of all the button shapes
const redLight = document.querySelector('.red-light');
const yellowLight = document.querySelector('.yellow-light');
const greenLight = document.querySelector('.green-light');

//Use getElementById which allows us to get the ID so that we can add an event listener to the buttons, listen for a click and then set the color via css properties.
const redSwitch = document.getElementById('red-switch');
const yellowSwitch = document.getElementById('yellow-switch');
const greenSwitch = document.getElementById('green-switch');
const allLights = document.getElementById('all-lights');
const cycleSwitch = document.getElementById('cycle-switch');

//Add event listeners that listen for a button click
redSwitch.addEventListener('click', () =>{
    redLight.style.backgroundColor = 'red';
});
yellowSwitch.addEventListener('click', () =>{
    yellowLight.style.backgroundColor = 'yellow';
});
greenSwitch.addEventListener('click', () =>{
    greenLight.style.backgroundColor = 'green';
});

allLights.addEventListener('click', () => {
        redLight.style.backgroundColor = 'red';
        yellowLight.style.backgroundColor = 'yellow';
        greenLight.style.backgroundColor = 'green';
});

//Turn all lights on and off with their specific buttons


//Party Mode Button

//Turn all lights on and off at once with a single button

// Cycle lights
let currentLight = 'red';      // Init current light state
let intervalId = null;         // Blank variables
function cycleLight(){
    redLight.style.backgroundColor = '#444';
    yellowLight.style.backgroundColor = '#444';
    greenLight.style.backgroundColor = '#444';
    if(currentLight === 'red'){
        redLight.style.backgroundColor = 'red';
        currentLight = 'yellow';
    } else if(currentLight === 'yellow'){
        yellowLight.style.backgroundColor = 'yellow';
        currentLight = 'green';
    } else{
        greenLight.style.backgroundColor = 'green';
        currentLight = 'red';
    }
}

cycleSwitch.addEventListener('click', () => {
    if(!intervalId){                     // Get rid of curently running cycles
        intervalId = setInterval(cycleLight, 1000);
    }
});