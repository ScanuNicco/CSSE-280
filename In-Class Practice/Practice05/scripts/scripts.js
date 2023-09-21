function showClock() {
    var today = new Date();
    document.getElementById("timeBox").innerText = `${today.toLocaleString()}`;
}



const DEFAULT_NOTES = "\tI thought building a simple app was the best way to practice js, therefore...\n\nThis is a simple notepad. \n\nNotes are stored in localStorage when you click save.\n\n(Yes I know I can use the placeholder attribute, but I wanted to use a nullish operator and a const because JavaScript)";

function loadNotes() {
    console.log("Saved notes!");
    document.getElementById("notePad").value = localStorage.getItem("notes") ?? DEFAULT_NOTES;
}

function saveNotes() {
    localStorage.setItem("notes", document.getElementById("notePad").value);
}

function clearNotes() {
    document.getElementById("notePad").value = DEFAULT_NOTES;
    localStorage.clear("notes");
}

window.onload = function () {
    setInterval(showClock, 1000);
    loadNotes();
}