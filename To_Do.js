let inputTask = document.getElementById("taskName")
let addButton = document.getElementById("addButton")
let searchTask = document.getElementById("searchTask")
let searchButton = document.getElementById("searchButton")
let taskContainer = document.getElementById("taskContainer")


addButton.addEventListener("click", (event) => {

    if (event.target.id == "addButton") {

        if (inputTask.value == "") {
            alert("Oops ! Please Enter Some Task Name :")
        }

        else {

            let newDiv = document.createElement("div")
            newDiv.style.backgroundColor = "#EA2027"
            newDiv.style.width = "95%"
            newDiv.style.minHeight = "50px"
            newDiv.style.margin = "1em auto"
            newDiv.style.borderRadius = "20px"
            newDiv.style.display = "flex"
            newDiv.style.justifyContent = "space-around"
            newDiv.style.alignItems = "center"


            let checkBoxContainer = document.createElement("div")
            checkBoxContainer.style.width = "25px"
            checkBoxContainer.style.height = "25px"



            let checkBox = document.createElement("input")
            checkBox.type = "checkbox"
            checkBox.style.width = "100%"
            checkBox.style.height = "100%"
            checkBox.style.cursor = "pointer"


            let liContainer = document.createElement("div")
            liContainer.style.width = "230px"
            liContainer.style.height = "30px"
            liContainer.style.display = "flex"
            liContainer.style.justifyContent = "center"
            liContainer.style.alignItems = "center"



            let newLi = document.createElement("li")
            newLi.style.width = "100%"
            newLi.style.height = "100%"
            newLi.style.listStyleType = "none"
            newLi.style.marginLeft = "0.3em"
            newLi.style.color = "#ffffff"
            newLi.style.fontWeight = "900"
            newLi.style.fontSize = "1.5em"
            newLi.style.textAlign = "center"
            newLi.style.textShadow = '2px 2px 4px rgba(0, 0, 0, 0.5)'
            newLi.style.whiteSpace = "wrap"
            newLi.style.overflowY = "auto"

            let addText = document.createTextNode(inputTask.value)

            newLi.appendChild(addText)
            liContainer.appendChild(newLi)

            let iconContainer = document.createElement("div")
            iconContainer.style.width = "35px"
            iconContainer.style.height = "35px"



            let newSpan = document.createElement("span")
            newSpan.style.display = "inline-block"
            newSpan.innerHTML = "&#10006;";
            newSpan.style.color = "#ffffff"
            newSpan.style.fontSize = "1.5em"
            newSpan.style.fontWeight = "900"
            newSpan.style.textShadow = '2px 2px 4px rgba(0, 0, 0, 0.5)'
            newSpan.style.width = "100%"
            newSpan.style.height = "100%"
            newSpan.style.textAlign = "center"
            newSpan.style.cursor = "pointer"

            iconContainer.appendChild(newSpan)
            checkBoxContainer.appendChild(checkBox)
            newDiv.appendChild(checkBoxContainer)
            newDiv.appendChild(liContainer)
            newDiv.appendChild(iconContainer)
            taskContainer.appendChild(newDiv)

            inputTask.value = ""

            checkBox.addEventListener("change", (e) => {

                if (checkBox.checked) {
                    newLi.style.textDecoration = "line-through";
                    newLi.style.textDecorationColor = "#000000";
                }

                else {
                    newLi.style.textDecoration = "none";
                }

            });

            newSpan.addEventListener("click", (e) => {
                newDiv.remove()
            })
        }
    }

})


searchButton.addEventListener("click", () => {

    let searchQuery = searchTask.value.trim().toLowerCase();
    let tasks = taskContainer.querySelectorAll("div");
    let found = false;

    if (searchQuery === "") {
        alert("Oops! Search Box is empty");
        return;
    }

    tasks.forEach(task => {
        let liElement = task.querySelector("li");

        if (liElement) {
            let taskText = liElement.textContent.trim().toLowerCase();

            if (taskText.includes(searchQuery)) {
                task.style.display = "flex";
                found = true;
            }

            else {
                task.style.display = "none";
            }

        }
    });

    if (!found) {

        let notFoundDiv = document.createElement("div");
        notFoundDiv.style.backgroundColor = "#EA2027";
        notFoundDiv.style.width = "95%";
        notFoundDiv.style.minHeight = "50px";
        notFoundDiv.style.margin = "1em auto";
        notFoundDiv.style.borderRadius = "20px";
        notFoundDiv.style.display = "flex";
        notFoundDiv.style.justifyContent = "center";
        notFoundDiv.style.alignItems = "center";
        notFoundDiv.style.color = "#ffffff";
        notFoundDiv.style.fontWeight = "900";
        notFoundDiv.style.fontSize = "1.5em";
        notFoundDiv.style.textShadow = '2px 2px 4px rgba(0, 0, 0, 0.5)';
        notFoundDiv.textContent = "Task not found";

        taskContainer.innerHTML = "";
        taskContainer.appendChild(notFoundDiv);

    }
});