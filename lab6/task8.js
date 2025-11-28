// ----------------- Завдання 8 -----------------
document.querySelector(".login-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const { email, password } = this.elements;

    if (email.value.trim() === "" || password.value.trim() === "") {
        alert("All form fields must be filled in");
        return;
    }

    const data = {
        email: email.value.trim(),
        password: password.value.trim(),
    };

    console.log(data);
    this.reset();
});