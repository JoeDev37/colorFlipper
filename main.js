// creating a colour flipper for the first time 
// dear Joe if you can update this please do it. Actually it is working perfectly but if you have any idea to add don't hesitate.

// const body = document.getElementsByTagName('body')[0];
const screen = document.getElementsByClassName('screen')[0];
const button = document.getElementById('random');

function setColor(name) {
    // body.style.backgroundColor = name;
    screen.style.backgroundColor = name;
    colorName.style.color = name;
    console.log(`Background color set to: ${name}`);
    document.getElementById('colorName').innerHTML = name;
}

function randomColor() {
    const red = Math.round(Math.random() * 255);
    const green = Math.round(Math.random() * 255);
    const blue = Math.round(Math.random() * 255);

    const colour = `RGB(${red}, ${green}, ${blue})`;
    // body.style.backgroundColor = colour;
    screen.style.backgroundColor = colour;
    colorName.style.color = colour;
    button.style.backgroundColor = colour;
    console.log(`Generated RGB color: ${colour}`);
    document.getElementById('colorName').innerHTML = colour;
}

