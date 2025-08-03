document.addEventListener("DOMContentLoaded", loadTasks);

function addTask(taskText = null, isDone = false) {
  const taskInput = document.getElementById("taskInput");
  const text = taskText || taskInput.value.trim();
  if (text === "") return;

  const taskList = document.getElementById("taskList");
  const li = document.createElement("li");

  li.innerHTML = `
    <input type="checkbox" class="task-checkbox" ${
      isDone ? "checked" : ""
    } onchange="toggleDone(this)">
    <span>${text}</span>
    <button class="delete-btn" onclick="removeTask(this)">&times;</button>
  `;

  if (isDone) li.classList.add("done");

  taskList.appendChild(li);
  if (!taskText) taskInput.value = "";

  saveTasks();
}

function handleKey(event) {
  if (event.key === "Enter") {
    addTask();
  }
}

function removeTask(button) {
  const li = button.parentElement;
  li.remove();
  saveTasks();
}

function toggleDone(checkbox) {
  const li = checkbox.parentElement;
  li.classList.toggle("done", checkbox.checked);
  saveTasks();
}

function saveTasks() {
  const tasks = [];
  document.querySelectorAll("#taskList li").forEach((li) => {
    tasks.push({
      text: li.querySelector("span").innerText,
      done: li.querySelector(".task-checkbox").checked,
    });
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach((task) => addTask(task.text, task.done));
}
