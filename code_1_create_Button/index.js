const createButton = document.getElementById("createButton");

        createButton.addEventListener("click", function () {
            // Create a new <br> element
            const lineBreak = document.createElement("br");
            
            // Create a new button element
            const newButton = document.createElement("button");
            newButton.textContent = "Delete Button";
            newButton.id = "newButton";

            // Append the <br> and button to the body
            document.body.appendChild(lineBreak);
            document.body.appendChild(newButton);

            // Add functionality to delete the button
            newButton.addEventListener("click", function () {
                // Remove the button and the <br> tag
                lineBreak.remove();
                newButton.remove();
            });
        });