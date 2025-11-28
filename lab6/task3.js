// ----------------- Завдання 3 -----------------
const passInput = document.getElementById("passwordInput");
const toggleBtn = document.getElementById("togglePassword");

toggleBtn.addEventListener("click", () => {
    if (passInput.type === "text") {
        passInput.type = "password";
        toggleBtn.textContent = "Розкрити";
    } else {
        passInput.type = "text";
        toggleBtn.textContent = "Приховати";
    }
});
