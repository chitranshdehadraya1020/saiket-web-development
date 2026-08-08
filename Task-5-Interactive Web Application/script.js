let completed = 0;

function addTask() {

    let input = document.getElementById("taskInput");
    let task = input.value.trim();

    if (task === "") {
        alert("Please enter a task.");
        return;
    }

    let li = document.createElement("li");

    li.innerHTML = `
        <span>${task}</span>
        <button class="delete">Delete</button>
    `;

    li.querySelector("span").addEventListener("click", function() {

        if (!li.classList.contains("completed")) {
            completed++;
        } else {
            completed--;
        }

        li.classList.toggle("completed");

        document.getElementById("completed").textContent = completed;
    });

    li.querySelector(".delete").addEventListener("click", function() {

        if (li.classList.contains("completed")) {
            completed--;
            document.getElementById("completed").textContent = completed;
        }

        li.remove();
    });

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}
