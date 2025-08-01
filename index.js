alert("This is calculator")
let asking = prompt("How can i help you?")
const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.buttons button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;
        if (value === 'C') {
            display.value = '';
        } else if (value === '=') {
            try {
                display.value = eval(display.value);
            } catch (error) {
                display.value = 'Error';
            }
        } else {
            display.value += value;
        }
    });
});

