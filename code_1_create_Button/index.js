const createButton = document.getElementById("createButton");

// Add functionality to create a new button
createButton.addEventListener("click", function () {

    // Create a new <br> element
    const lineBreak = document.createElement("br");
    
    // Create a new button element
    const newButton = document.createElement("button");
    newButton.textContent = "Delete Button";        // Writing on Button
    newButton.id = "newButton";                     // Giving ID to Button

    // Append the <br> and button to the body
    document.body.appendChild(lineBreak);           // Adding <br> tag
    document.body.appendChild(newButton);           // Adding Button

    // Add functionality to delete the button
    newButton.addEventListener("click", function () {
        // Remove the button and the <br> tag
        lineBreak.remove();
        newButton.remove();
    });
});