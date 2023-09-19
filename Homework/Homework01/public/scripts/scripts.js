var countNum = 0;
function countUp() {
    countNum++;
    displayCount();
}

function countDown() {
    countNum--;
    displayCount();
}

function countZero() {
    countNum = 0;
    displayCount();
}

function displayCount() {
    document.getElementById("display").innerText = countNum;
}

document.querySelector("#dec").onclick = countDown;
document.querySelector("#zero").onclick = countZero;
document.querySelector("#inc").onclick = countUp;
document.body.addEventListener("keydown", function(e) {
    console.log(e.key);
    if(e.key == "ArrowDown") {
        countDown();
    } else if (e.key == "ArrowUp") {
        countUp();
    } else if (e.key == "0") {
        countZero();
    } else if (e.key == "ArrowLeft") {
        if(countNum % 10 == 0){
            countNum *= .1;
            displayCount();
        }
    } else if (e.key == "ArrowRight") {
        if(("" + countNum).length < 7){
            countNum *= 10;
            displayCount();
        }
    }
})

function paint(color) {
    console.log(color);
    document.getElementById('circleID').style.backgroundColor = color;
}

function handleCustomColor(e) {
    paint(e.target.value);
}