// ----------------- Завдання 5 -----------------
const placeDiv = document.getElementById("place");

window.addEventListener("click", (event) => {
    console.log(placeDiv.contains(event.target));
});