var darkTheme = true;
function toggleTheme() {
    var outerMostElem = document.body.parentElement;
    var button = document.getElementById("themeSwitch");
    if (darkTheme){
        outerMostElem.classList.remove("dark");
        outerMostElem.classList.add("light");
        themeSwitch.innerText = "Dark";
        darkTheme = false;
    } else {
        outerMostElem.classList.remove("light");
        outerMostElem.classList.add("dark");
        themeSwitch.innerText = "Light";
        darkTheme = true;
    }
}