const display = document.querySelector('.display');
        const buttons = document.querySelectorAll('button');

        buttons.forEach(button => {
            button.addEventListener('click', () => {
                if (button.textContent === '=') {
                    display.value = eval(display.value);
                } else if (button.textContent === 'C') {
                    display.value = '';
                } else if (button.textContent === '←') {
                    display.value = display.value.slice(0, -1);
                } else {
                    display.value += button.textContent;
                }
            });
        });
