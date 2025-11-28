// ----------------- Завдання 10 -----------------
// ----------------- Генерація випадкового кольору -----------------
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

// ----------------- Елементи DOM -----------------
const controls = document.querySelector('#controls');
const input = controls.querySelector('input');
const btnCreate = controls.querySelector('[data-create]');
const btnDestroy = controls.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');

// ----------------- Логіка кнопки Create -----------------
btnCreate.addEventListener('click', () => {
    const amount = Number(input.value);

    if (amount < 1 || amount > 100) {
        alert('Enter a number from 1 to 100!');
        return;
    }

    createBoxes(amount);
    input.value = ""; // очищаємо поле
});

// ----------------- Логіка кнопки Destroy -----------------
btnDestroy.addEventListener('click', destroyBoxes);

// ----------------- Функція створення елементів -----------------
function createBoxes(amount) {
    destroyBoxes(); // прибираємо старі елементи

    let size = 30;
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < amount; i++) {
        const div = document.createElement('div');
        div.style.width = `${size}px`;
        div.style.height = `${size}px`;
        div.style.backgroundColor = getRandomHexColor();

        fragment.appendChild(div);

        size += 10;
    }

    boxes.appendChild(fragment);
}

// ----------------- Функція очищення -----------------
function destroyBoxes() {
    boxes.innerHTML = "";
}