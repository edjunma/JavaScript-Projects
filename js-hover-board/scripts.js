const container = document.getElementById('container');
const SQUARES_NR = 500;

for (let i = 0; i < SQUARES_NR; i++) {
	const square = document.createElement('div');
	square.classList.add('square');

	square.addEventListener('mouseover', () => {
		setColorToEl(square);
	});

	square.addEventListener('mouseout', () => {
		removeColorFromEl(square);
	});

	container.appendChild(square);
}

function setColorToEl(element) {
	const color = getRandomColor();
	element.style.background = color;
}

function getRandomColor() {
	return colors[Math.floor(Math.random() * colors.length)];
}
