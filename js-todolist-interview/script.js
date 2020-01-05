const inputTodo = document.getElementById('input-todo');
const todoList = document.getElementById('todo-list');

function addListItem(event) {
	if (event.key === 'Enter') {
		event.preventDefault();
		const todoText = inputTodo.value;
		const listItem = document.createElement('li');
		listItem.innerText = todoText;
		todoList.appendChild(listItem);
	}
}

document.getElementById('input-todo');
document.addEventListener('keydown', addListItem);
