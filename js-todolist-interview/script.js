function addListItem(event) {
	if (event.key === 'Enter') {
		const value = document.getElementById('input-todo').value;
		const listContain = document.getElementById('todo-list');
		const listItem = document.createElement('li');
		listItem.innerText = value;
		listContain.appendChild(listItem);
	}
}

document.getElementById('input-todo');
document.addEventListener('keydown', addListItem);
