document.getElementById("salmon").addEventListener("click", function() {
    document.body.style.backgroundColor = "salmon";
});

document.getElementById("cyan").addEventListener("click", function() {
    document.body.style.backgroundColor = "cyan";
});

document.getElementById("lightGreen").addEventListener("click", function() {
    document.body.style.backgroundColor = "lightgreen";
});

document.getElementById("black").addEventListener("click", function() {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
});

document.getElementById("reset").addEventListener("click", function() {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
});
