console.log("script loaded...");

function paint(color) {
    console.log(color);
    document.getElementById('circleID').style.backgroundColor = color;
}

function handleCustomColor(e) {
    paint(e.target.value);
}