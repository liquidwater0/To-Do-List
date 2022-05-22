document.addEventListener("click", ({ target }) => {
    if (target.matches("[data-task]")) {
        const checkbox = target.querySelector("[type='checkbox']");
        checkbox.checked = !checkbox.checked;
        target.classList.toggle("completed", checkbox.checked)
    }

    if (target.matches("[data-delete]")) {
        const task = target.closest("[data-task]");
        task.remove();
    }
});

document.addEventListener("keydown", ({ key }) => {
    if (document.activeElement.tagName !== "INPUT") return;
    if (key === "Enter") addItem();
});

const addInput = document.getElementById("addInput");
const addButton = document.getElementById("addButton");

addButton.addEventListener("click", addItem);

function addItem() {
    if (addInput.value.trim() === "") return;

    const taskList = document.getElementById("tasksList");
    const item = `
        <li class="task" data-task>
            <input type="checkbox" class="task-checkbox">
            ${addInput.value}
            <button class="icon-button delete-button" title="Delete Item" data-delete><i class="material-icons">close</i></button>
        </li>
    `;

    taskList.insertAdjacentHTML("beforeend", item);
    addInput.value = "";
}