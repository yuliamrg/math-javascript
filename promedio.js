const arr = [1, 4, 7, 2, 4];
const lengthButton = document.querySelector('#butttonConfirm');
const clearButton = document.querySelector('#buttonClear');
const formNumbers = document.querySelector('#promNumbers');
const lengthNumbers = document.querySelector('#lenght');

const promWarn = document.createElement('p'); 
promWarn.classList.add('warn');

lengthButton.addEventListener('click', createInputs);
clearButton.addEventListener('click', clearInputs);

function clearInputs() {
    const large = formNumbers.length;
    console.log(large);

    if(large) {
        for (let i = 0; i < large; i++){
            formNumbers.removeChild(formNumbers[0]);
            console.log('remove');
        }
    }
    formNumbers.classList.add('inactive');
    promWarn.innerText = "";
}

function createInputs() {
    const numbers = parseInt(lengthNumbers.value);
    
    clearInputs();

    if (numbers > 1 && numbers < 11) {
        const promButton = document.createElement('button');
    promButton.setAttribute('type', 'button');
    promButton.innerText = 'Calcular';

        for (let i=0; i < numbers; i++ ) { 
            const input = document.createElement('input');
            input.classList.add('inputNumbers');
            formNumbers.appendChild(input);
        }
        formNumbers.appendChild(promButton);
    } else {
        promWarn.innerText = 'Sólo puedo promediar de 2 a 10 numeros, gracias por tu comprensión';
        formNumbers.appendChild(promWarn);
    }
    formNumbers.classList.remove('inactive');
}
    
const promedio = calcularPromedio(arr);

function calcularPromedio(array) {
    let acumulado = 0;
    const longitud = array.length;

    for (let i = 0; i < longitud; i++) {
        acumulado = acumulado + array[i];
    }

    return acumulado / longitud;
}
