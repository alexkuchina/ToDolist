

function todo() {
	//variable stores info thar user inputs
	var input = document.getElementById('enterTask').value

	//variale that takes info that user input and stores it in a textNode
	var newTask = document.createTextNode(input);
	var deleteIcon = document.createElement('i');
	deleteIcon.setAttribute('class', 'fa fa-trash-o');
	deleteIcon.setAttribute('aria-hidden', 'true');
	var deleteButton = document.createElement('button');
	deleteButton.setAttribute('class', 'button-style');
	deleteButton.appendChild(deleteIcon);


	//variable created new li item and append new textNode
	var newLi = document.createElement('li');
	newLi.setAttribute('class', 'list-item');
	newLi.appendChild(newTask);
	newLi.appendChild(deleteButton);

	//variable that selects an ordered list by id and append new Li item
	var orderedList = document.getElementById('listTodo');
	orderedList.appendChild(newLi);

	deleteButton.addEventListener('click', function(){
	newLi.style.display = 'none';
	deleteButton.style.display = 'none';

	});
	return;
};








































