const arr = [1, 4, 7, 2, 4];
const arr2 = [1, 2, 3, 4,];
const once = [1,2,3,4,5,6,7,8,9,10,11];

//Elementos del HTML

const lengthButton = document.querySelector('#butttonConfirm');
const clearButton = document.querySelector('#buttonClear');
const formNumbers = document.querySelector('#promNumbers');
const lengthNumbers = document.querySelector('#lenght');


// Elementos creados

const promWarn = document.createElement('span'); 
promWarn.classList.add('warn');
const promButton = document.createElement('button');
    promButton.innerText = 'Promedio';


//addeventslisteners

lengthButton.addEventListener('click', createInputs);
clearButton.addEventListener('click', clearInputs);
promButton.addEventListener('click', calculateProm);


//funciones

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

        for (let i=0; i < numbers; i++ ) { 
            const input = document.createElement('input');
            input.classList.add('inputNumbers');
            input.setAttribute('required','');
            formNumbers.appendChild(input);
        }
        formNumbers.appendChild(promButton);
    } else {
        promWarn.innerText = 'Sólo puedo promediar de 2 a 10 numeros, gracias por tu comprensión';
        formNumbers.appendChild(promWarn);
    }
    formNumbers.classList.remove('inactive');
}

function calculateProm() {

}

function calcularPromedio(array) {
    let acumulado = 0;
    const longitud = array.length;

    for (let i = 0; i < longitud; i++) {
        acumulado = acumulado + array[i];
    }

    return acumulado / longitud;
}

function calcularPromedioReduce(array) {
    const acumulado = array.reduce((valorAcumulado, nuevoValor) => valorAcumulado + nuevoValor);
    return acumulado / array.length;
}

function esPar(array) {
    const long = array.length;
    if (long % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

function calcularMediana(array) {
    const arrayPAr = esPar(array);
    const long = array.length;
    let mediana;
    if (arrayPAr) {
        const mitad1 = array[long / 2];
        const mitad2 = array[(long / 2) - 1];
        mediana = calcularPromedioReduce([mitad1, mitad2]);
        return mediana;
    } else {
        mediana = long / 2;
        console.log(mediana);
        return array[mediana];
    }
}