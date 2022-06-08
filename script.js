let addMessage = document.querySelector('.message'),
 addButton = document.querySelector('.add');
 todo = document.querySelector('.todo')

let todoList = [];

if(localStorage.getItem('todo')){
	todoList = JSON.parse(localStorage.getItem('todo'));
	displayMessages();
}

 addButton.addEventListener('click', function(){
 	if(!addMessage.value) return;
 	let newTodo = {
 		todo: addMessage.value,
 		checked: false,
 		important: false
 	};

todoList.push(newTodo);
displayMessages();
localStorage.setItem('todo', JSON.stringify(todoList));
addMessage.value = '';
});

function displayMessages(){
let displayMessage = '';
	todoList.forEach(function(item, i){
		displayMessage += `
		<li>
		<input type='checkbox' id='item_${i}' ${item.checked ? 'checked' : ''}>
		<label for='item_${i}'>${item.todo}</label>
		</li>
		`;
		todo.innerHTML = displayMessage;
		console.log('displayMessage: ', displayMessage);
	});
}

todo.addEventListener('change', function(event){
	let idInput = event.target.getAttribute('id');
	let forLabel = todo.querySelector('[for='+ idInput +']');
	let valueLaber = forLabel.innerHTML;

	todoList.forEach(function(item){
		if (item.todo === valueLaber){
			item.checked = !item.checked;
			localStorage.setItem('todo', JSON.stringify(todoList));
		}
	})
})