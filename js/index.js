const taskName = document.getElementById("taskName");
const taskDesc = document.getElementById("taskDesc");
const assignedTo = document.getElementById("assignedTo");
const duedate = document.getElementById("duedate");
const taskForm = document.getElementById("taskForm");

const card_place = document.getElementById("card_place");
const errorMessage = document.getElementById("error_message");

const taskListElement = document.getElementById("task_list_element");

const taskManager = new TaskManager();
//taskManager.load()
//taskManager.render()

// Process inputs
function processInput() {
taskManager.render()
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
    const taskHtml = createTaskHtml(taskName.value, taskDesc.value, assignedTo.value,duedate.value)
    taskManager.addTask(taskName,taskDesc,assignedTo,duedate)
    taskManager.save()
    taskManager.render()
  }
}

const taskList = document.querySelector("#task_list_element");

taskList.addEventListener('click', (event) => { // "event" here is the event parameter
  if(event.target.classList == "done-button"){
    //alert("yes")
   let parentTask = event.target.parentElement.nodeName
 
   let taskId = document.querySelector(parentTask).getAttribute('data-task-id')
   taskId = parseInt(taskId);

   let task = taskManager.getTaskById(taskId)

   task.status = 'DONE'

   taskManager.render()
     // alert(taskId);
  }

  if(event.target.classList == 'delete-button'){
    let parentTask = event.target.parentElement.nodeName
      let taskId = document.querySelector(parentTask).getAttribute('data-task-id')
      taskId = parseInt(taskId);
      taskManager.deleteTask(taskId)
      taskManager.save()
      taskManager.render()
  }
  

});