let todos = ["Buy New Turtle"];
window.setTimeout(function () {
    let input = prompt("What would you like to do? ");

    while (input !== "quit") {
        //handle input
        if (input === 'list'){
            console.log(todos);
        }
        else if (input === "new") {
            // ask for new todo
            let newTodos = prompt("Enter New Todos");
            // add to todos array
            todos.push(newTodos);
        }
        // ask again for new input
        input = prompt("What would you like to do? ");
    }
    console.log("OK, You Quit the app.");
}, 500)