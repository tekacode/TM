const taskName = document.getElementById("taskName");
const taskDesc = document.getElementById("taskDesc");
const assignedTo = document.getElementById("assignedTo");
const duedate = document.getElementById("duedate");

const taskListElement = document.getElementById("task_list_element");

const taskManager = new TaskManager();
taskManager.load()
taskManager.render()

// Process inputs
function processInput() {
    if (taskName.value === "" || taskName.value === null) {
      document.querySelector('#tspan').innerHTML = `<div class="alert alert-danger" role="alert">
    Enter Task Name
  </div>`
    }else if (taskDesc.value === "" || taskDesc.value === null) {
      document.querySelector('#dspan').innerHTML = `<div class="alert alert-danger" role="alert">
    Enter Task Description
  </div>` 
    }else if (assignedTo.value === "" || assignedTo.value === null) {
      document.querySelector('#aspan').innerHTML = `<div class="alert alert-danger" role="alert">
    Enter Assign To
  </div>` 
    }else if (duedate.value === "" || duedate.value === null) {
      document.querySelector('#dtspan').innerHTML = `<div class="alert alert-danger" role="alert">
    Enter Due Date
  </div>`
    }else{
      //const taskHtml = createTaskHtml(taskName.value, taskDesc.value, assignedTo.value,duedate.value)
      taskManager.addTask(taskName,taskDesc,assignedTo,duedate)
      taskManager.save()
    }
}

const taskList = document.querySelector("#task_list_element");

taskList.addEventListener('click', (event) => { 
    if(event.target.classList == "done-button"){
    let parentTask = event.target.parentElement.nodeName
    console.log(parentTask)
    let taskId = document.querySelector(parentTask).getAttribute('data-task-id')
    taskId = Number(taskId);

    let task = taskManager.getTaskById(taskId)

    task.status = '<strong style="color:green;">DONE</strong>'
    taskManager.render()
  }

  if(event.target.classList == 'delete-button'){
    let parentTask = event.target.parentElement.nodeName
      let taskId = document.querySelector(parentTask).getAttribute('data-task-id')
      taskId = Number(taskId);
      taskManager.deleteTask(taskId)
      taskManager.save()
      taskManager.render()
  }
  

});