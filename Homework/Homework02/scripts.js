var data;
async function fetchTests() {
    var response = await fetch("https://64486933e7eb3378ca2e0f51.mockapi.io/api/users");
    data = await response.json();
    newTest()
}

fetchTests();

function newTest() {
    var thisTest = data[Math.floor(Math.random() * data.length)];
    document.getElementById("testimonial-text").innerHTML = thisTest.message.replaceAll(".", "!!!<br>");
    document.getElementById("testimonial-name").innerText = thisTest.name;
    document.getElementById("testimonial-location").innerText = thisTest.location;
    document.getElementById("testimonial-image").src = thisTest.avatar;
}