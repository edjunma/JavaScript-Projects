// Select the elements on the page - canvas, shake button
const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakebutton = document.querySelector('.shake');
const MOVE_AMOUNT = 50;

// Setup our canvas for drawing
// Make a variable called height and width from the same properties as the canvas
const { width, height } = canvas;

const x = Math.floor(Math.random() * width);
const x = Math.floor(Math.random() * height);
// Create random x and y starting points on the canvas

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;

ctx.beginPath(); // This starts the drawing
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

// Write a draw function

// Write a handler for the keys
function handleKey() {
	console.log('HANDLING KEY');
}

// Listen for the arrow keys
window.addEventListener('keydown', handleKey);
