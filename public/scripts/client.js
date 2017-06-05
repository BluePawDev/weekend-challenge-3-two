$(onReady);

function onReady() {
	$('#newTaskForm').on('submit', newTask);

}

function newTask(e) {
	e.preventDefault();
	var $input = $('#newTaskForm input').val();
	var task = {
		description: $input,
	}
	postTask(task);
}

// Ajax actions
function postTask(task) {
	console.log('Task description:', task.description);
	$.post('/todo/newtask', task)
		.done(getTasks)
		.fail()
}

function getTasks() {
	$.get('/todo')
		.done(updateDOM)
		.fail('GET failed')
}

function updateDOM(tasks) {
	console.log('list from server:', tasks);
}

function postFailed() {

}
