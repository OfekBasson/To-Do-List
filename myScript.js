let tasksSection = document.getElementById("tasksSection");
let taskDescriptionForm = document.getElementById("taskDescriptionForm");
let taskDescriptionInput = document.getElementById("taskDescriptionInput");
let hideAllDoneTasksButton = document.getElementById("hide");
let showAllButton = document.getElementById("showAll");
let deleteAllDoneTasks = document.getElementById("delete");

taskDescriptionInput.focus();

taskDescriptionForm.onsubmit = function() {
    let taskDescriptionText = taskDescriptionInput.value;
    if (taskDescriptionText != "") {
        addNewTask(taskDescriptionText);
        taskDescriptionInput.value = "";
    }
    taskDescriptionInput.focus();
    return false;
}

tasksSection.onclick = function(event) {
    if (event.target.classList != "removeButton") return;
    let taskToDelete = event.target.closest("div");
    taskToDelete.remove();
}

hideAllDoneTasksButton.onclick = function() {
    let allTasks = document.querySelectorAll("#tasksSection .task");
    for (let task of allTasks) {
        let checkbox = task.lastChild;
        if (checkbox.checked) task.style.display = "none";
    }
}

showAllButton.onclick = function() {
    let allTasks = document.querySelectorAll("#tasksSection .task");
    for (let task of allTasks) task.style.display = "flex";
}

deleteAllDoneTasks.onclick = function() {
    let allTasks = document.querySelectorAll("#tasksSection .task");
    for (let task of allTasks) {
        let checkbox = task.lastChild;
        if (checkbox.checked) task.remove();
    }
}

function addNewTask(taskDescription) {
    let newTask = document.createElement("div");
    newTask.classList = "task";
    addTextInsideTaskDiv(newTask, taskDescription);
    addRemoveButton(newTask);
    addCheckBox(newTask);
    tasksSection.append(newTask);
}

function addTextInsideTaskDiv(divToAddTextTo, taskDescription) {
    let textInsideTaskDiv = document.createElement("h3");
    textInsideTaskDiv.innerText = taskDescription;
    divToAddTextTo.append(textInsideTaskDiv);
}

function addRemoveButton(divToAddButtonTo) {
    let removeButton = document.createElement("button");
    removeButton.innerHTML = "[x]";
    removeButton.classList = "removeButton";
    divToAddButtonTo.append(removeButton);
}

function addCheckBox(divToAddCheckboxTo) {
    let checkBox = document.createElement("input");
    checkBox.classList = "checkBox";
    checkBox.type = "checkbox";
    divToAddCheckboxTo.append(checkBox);
}
