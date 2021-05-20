const createTaskHtml= (id,name, description, assignedTo,dueDate, status="TODO") => {
    const html = `
    <li class="list-group-item" id="${id}" data-task-id="${id}">
    <button class='done-button'>Mark As Done</button>
    <button class="delete-button btn btn-danger">Delete</button>
        <div class="d-flex w-100 mt-2 justify-content-between align-items-center">
            <h5>Task Name: ${name}</h5> <br>
            
        </div>
        <div class="d-flex w-100 mt-2 justify-content-between align-items-center">
        <small>Assigned To: ${description}</small>
        </div>
        <div class="d-flex w-100 mt-2 justify-content-between align-items-center">
        <small>Assigned To: ${assignedTo}</small>
        </div>
        <div class="d-flex w-100 mt-2 justify-content-between align-items-center">
        <small>Due date: ${dueDate}</small>
        </div>
        <div class="d-flex w-100 mt-2 justify-content-between align-items-center">
        <small>Due date: ${status}</small>
        </div>
    </li>
`
return html;
}
class TaskManager{
    constructor(id=0){
        this.tasks = [];
        this.currentId = id;
    }

    addTask(name, description, assignedTo, due_date){
        this.currentId++;
        this.tasks.push({id:this.currentId,taskName:name.value, taskDesc:description.value,assignedTo:assignedTo.value,dueDate:due_date.value,status:'TODO'})
    }

    render(){
        let tasksHtmlList = [];
        const date = new Date()
        //const formatedDate = date.toString()
        for(let i =0; i< this.tasks.length; i++){
           let currentTask = this.tasks[i]; 
           let currentTime = new Date(currentTask.dueDate).toString();
           let taskHtml = createTaskHtml(currentTask.id,currentTask.taskName, currentTask.taskDesc, currentTask.assignedTo,currentTime,currentTask.status,currentTask.id)
           tasksHtmlList.push(taskHtml)
        }
        
        let tasksHtml = ""
        for(let i = 0; i < tasksHtmlList.length; i++){
            tasksHtml += tasksHtmlList[i] + "\n"
        }
        taskListElement.innerHTML = tasksHtml
    }

    getTaskById(taskId){
        let foundTask;
        for(let i = 0; i < this.tasks.length; i++){
            if(this.tasks[i].id == taskId){
                foundTask = this.tasks[i];
            }
        }
    }

    save(){
        let tasksJson = localStorage.setItem('tasks',  JSON.stringify(''));
        let currentId = this.currentId;
        localStorage.setItem('currentId',  JSON.stringify(currentId));
    }

    load(){
          if (localStorage.getItem("tasks") !== null){
            let tasksJson = JSON.parse(localStorage.getItem("tasks"))
            this.tasks = tasksJson;
          }

          if(localStorage.getItem("currentId") !== null){
            let currentId = JSON.parse(localStorage.getItem("currentId"))
            currentId = parseInt(currentId);
          }
    }

}