function addNewTodo() {
  event.preventDefault();
	var input = document.getElementById('todoInput').value;
	var text = document.createTextNode(input);
	var newToDoItem = document.createElement('li');
	newToDoItem.appendChild(text);
	document.getElementById('todoList').appendChild(newToDoItem);
  document.getElementById('todoInput').value = '';
}
