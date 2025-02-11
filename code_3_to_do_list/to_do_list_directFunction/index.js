function createList() 
{
    var input = document.getElementById("task");
    var ul = document.getElementById("list");

    if (input.value.trim() !== "")  //checking if the input (string) is not empty by trimming the white spaces
    { 
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value = ""; // Clears input after adding task
    }
}
