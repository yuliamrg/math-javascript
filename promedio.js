const arr = [1, 5, 7, 2, 4];
const arr2 = [4, 3, 2, 1,];
const once = [1,2,3,4,5,6,7,8,9,10,11];

//Elementos del HTML

const lengthButton = document.querySelector('#buttonConfirm');
const clearButton = document.querySelector('#buttonClear');
const formNumbers = document.querySelector('#promNumbers');
const lengthNumbers = document.querySelector('#lenght');
const label = document.querySelector('#numberLabel');
const pResult = document.querySelector('#result');


// Elementos creados

const promWarn = document.createElement('span'); 
promWarn.classList.add('warn');

const promButton = document.createElement('button');
promButton.innerText = 'Calcular';
promButton.setAttribute('id', 'promButton');
promButton.setAttribute('type', 'submit');


//addeventslisteners

lengthButton.addEventListener('click', createInputs);
clearButton.addEventListener('click', clearInputs);
// promButton.addEventListener('click', onClickCalculateProm);
formNumbers.addEventListener('submit', onClickCalculateProm);

//funciones addeventlistened

function clearInputs() {
    const large = formNumbers.length;

    if(large) {
        for (let i = 0; i < large; i++){
            formNumbers.removeChild(formNumbers[0]);
        }
    }
    formNumbers.classList.add('inactive');
    promWarn.innerText = "";
    label.innerText = "";
    pResult.innerText = "";
}

function createInputs() {
    const numbers = parseInt(lengthNumbers.value);
    
    clearInputs();

    if (numbers > 1 && numbers < 11) {

        for (let i=0; i < numbers; i++ ) { 
            const input = document.createElement('input');
            input.classList.add('inputNumbers');
            input.setAttribute('type','number');
            input.setAttribute('required','');
            formNumbers.appendChild(input);
        }
        formNumbers.appendChild(promButton);
        label.innerText = 'Ingrese los numeros:';
    } else {
        promWarn.innerText = 'Sólo puedo promediar de 2 a 10 numeros, gracias por tu comprensión';
        formNumbers.appendChild(promWarn);
    }
    formNumbers.classList.remove('inactive');

}

function onClickCalculateProm(event) {
    event.preventDefault();
    const countArray = formNumbers.length - 1;

    let arrayNumbers = [];
    for(let i = 0; i < countArray; i++) {
        let number = formNumbers.elements[i].value;
        number = parseInt(number);
        arrayNumbers.push(number);
    }

    const prom = calculateAverageReduce(arrayNumbers);
    const median = calculateMedian(arrayNumbers);
    const mode = calculateMode(arrayNumbers);
    console.log({arrayNumbers, prom, median, mode});
}

//Funciones calculoPromedios

/* function calculateAverage(array) {
    let acumulado = 0;
    const longitud = array.length;

    for (let i = 0; i < longitud; i++) {
        acumulado = acumulado + array[i];
    }

    return acumulado / longitud;
} */

function calculateAverageReduce(array) {
    const acumulado = array.reduce((valorAcumulado, nuevoValor) => valorAcumulado + nuevoValor);
    return acumulado / array.length;
}

function calculateMedian(array) {
    array = sortList(array);

    const arrayPAr = itsEven(array);
    const long = array.length;
    let mediana;
    if (arrayPAr) {
        const mitad1 = array[long / 2];
        const mitad2 = array[(long / 2) - 1];
        mediana = calculateAverageReduce([mitad1, mitad2]);
        return mediana;
    } else {
        mediana = Math.floor(long / 2);
        return array[mediana];
    }
}

function calculateMode(array) {
    const listaCount = {};

    for (let i = 0; i < array.length; i++) {
        const element = array[i];

        if(listaCount[element]) {
            listaCount[element] += 1;
        } else {
            listaCount[element] = 1;
        }
    }

    const arrayList = Object.entries(listaCount);
    const position = arrayList[0].length - 1;
    const orderArrayList = sortListBidimensional(arrayList, position);
    const maxNumber = orderArrayList[orderArrayList.length - 1];
    const nextMaxNumber = orderArrayList[orderArrayList.length - 2];

    if(arrayList.length > 1) {
        if (maxNumber[1] == nextMaxNumber[1]) {
            return 'no hay moda';
        } else {
            const result = parseInt(maxNumber[0]);
            return result;
        }
    } else {
        return 'pos todos son iguales wey';
    }
}



//Funciones complementarias

function itsEven(array) {
    return !(array.length % 2);
}

function sortList(unorderedlist) {
    const list = unorderedlist.sort((a, b) => a - b );

    return list;
}

function sortListBidimensional(unorderedlist, i) {
    const list = unorderedlist.sort((a, b) => a[i] - b[i] );
    return list;

}