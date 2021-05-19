const createTaskHtml= (name, description, assignedTo,dueDate, status="TODO") => {
    const html = `
    <li class="list-group-item">
    <button>Mark As Done</button>
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
        this.tasks.push({taskName:name.value, taskDesc:description.value,assignedTo:assignedTo.value,dueDate:due_date.value,status:'TODO',id:this.currentId})
    }

    render(){
        let tasksHtmlList = [];
        const date = new Date()
        //const formatedDate = date.toString()
        for(let i =0; i< this.tasks.length; i++){
           let currentTask = this.tasks[i]; 
           let currentTime = new Date(currentTask.dueDate).toString();
           let taskHtml = createTaskHtml(currentTask.taskName, currentTask.taskDesc, currentTask.assignedTo,currentTime,currentTask.status,currentTask.id)
           tasksHtmlList.push(taskHtml)
        }
        
        let tasksHtml = ""
        for(let i = 0; i < tasksHtmlList.length; i++){
            tasksHtml += tasksHtmlList[i] + "\n"
        }
        taskListElement.innerHTML = tasksHtml

        
        
    }
}