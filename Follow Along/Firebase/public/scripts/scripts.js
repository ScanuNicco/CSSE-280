window.onresize = screen;
window.onload = screen;

function screen() {
    var width = window.innerWidth;
    document.getElementById('size').innerText = `Width : ${width} px`;
}

