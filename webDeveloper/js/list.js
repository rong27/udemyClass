let todos = ["Buy New Turtle"];
window.setTimeout(function () {
    let input = prompt("What would you like to do? ");

    while (input !== "quit") {
        //handle input
        if (input === 'list') {
            showTodos();
        } else if (input === "new") {
            addTodo();
        } else if (input === "delete") {
            deleteTodo();
        }
        // ask again for new input
        input = prompt("What would you like to do? ");
    }
    console.log("OK, You Quit the app.");
}, 500)

function showTodos() {
        todos.forEach(function (todo, item) {
            console.log("**********");
            console.log(item + ": " + todo);
    })
    console.log("**********");
}

function addTodo() {
    // ask for new todo
    let newTodos = prompt("Enter New Todos");
    // add to todos array
    todos.push(newTodos);
    console.log("Added it done")
}

function deleteTodo() {
    let index = prompt("which index of todos do your want to delete?");
    todos.splice(index, 1);
    console.log("Removed it done!");
} 