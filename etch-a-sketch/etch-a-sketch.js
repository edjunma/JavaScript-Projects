// Select the elements on the page - canvas, shake button
const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakebutton = document.querySelector('.shake');
const MOVE_AMOUNT = 10;

// Setup our canvas for drawing
// Make a variable called height and width from the same properties as the canvas
const { width, height } = canvas;

let x = Math.floor(Math.random() * width);
let x = Math.floor(Math.random() * height);
// Create random x and y starting points on the canvas

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = MOVE_AMOUNT;

let hue = 0;
ctx.strokeStyle = `hsl(${Math.random() * 360}, 100%, 50%)`;

ctx.beginPath(); // This starts the drawing
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

// Write a draw function
function draw({ key }) {
	// increment the hue
	hue += 1;
	ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
	console.log(key);

	// This starts the path
	ctx.beginPath();
	ctx.moveTo(x, y);

	// Moves our x and y values depending on what the user did
	switch (key) {
		case 'ArrowUp':
			y -= MOVE_AMOUNT;
			break;
		case 'ArrowRight':
			x += MOVE_AMOUNT;
			break;
		case 'ArrowDown':
			y += MOVE_AMOUNT;
			break;
		case 'ArrowLeft':
			x -= MOVE_AMOUNT;
			break;
		default:
			break;
	}
	ctx.lineTo(x, y);
	ctx.stroke();
}

// Write a handler for the keys
function handleKey(e) {
	if (e.key.includes('Arrow')) {
		e.preventDefault();
		draw({ key: e.key });
	}
}

// Clear/Shake function
function clearCanvas() {
	canvas.classList.add('shake');
	canvas.addEventListener(
		'animationend',
		function() {
			console.log('Done the shake!');
			canvas.classList.remove('shake');
		},
		{ once: true }
	);
}

// Listen for the arrow keys
window.addEventListener('keydown', handleKey);
shakebutton.addEventListener('click', clearCanvas);
