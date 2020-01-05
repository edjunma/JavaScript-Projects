function addListItem(event) {
	console.log(event.keyCode);
	if (event.keyCode == 13) {
		const value = document.getElementById('input-todo').value;
		const listContain = document.getElementById('todo-list');
		const listItem = document.createElement('li');
		listItem.value = value;
		listContain.appendChild(listItem);
	}
}

document.getElementById('input-todo');
document.addEventListener('keydown', addListItem);
