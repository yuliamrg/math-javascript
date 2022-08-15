const inputPrice = document.querySelector('#price');
const inputCoupon = document.querySelector('#coupon');

const btn = document.querySelector('#calcular');

const result = document.querySelector('#result');


//Forma 2 de ahcer las cosas por medio de un objeto:

/* const couponsObj = {
    'Navideño': 15,
    'Estudiantil': 35,
    'IVA': 19,
    'Especial': 10,
}; */


//Forma 3 de hacer las cosas y probablemente la mejor, con un array de objetos:

const couponsArr = [];

couponsArr.push({
    name: 'Navideño',
    discount: 15,
})
couponsArr.push({
    name: 'Estudiantil',
    discount: 35,
})
couponsArr.push({
    name: 'IVA',
    discount: 19,
})
couponsArr.push({
    name: 'Especial',
    discount: 10,
})

btn.addEventListener('click', calcularPrecioConDescuento);

function calcularPrecioConDescuento() {

    const price = parseInt(inputPrice.value);
    const coupon = inputCoupon.value;
    let discount;
    
    if(!price || !coupon) {
        result.innerText = 'por favor llena el formulario';
        return;
    }

    

function isCouponInArray (cuoponElement) { //objeto {name, discoun}
   return cuoponElement.name == coupon;
}
    
    const couponINArray = couponsArr.filter(isCouponInArray); //devuelve un array con el objeto que tiene las caracteristicas buscadas
    const couponButObj = couponsArr.find(isCouponInArray); //devuelve el objeto que tiene las caracteristicas buscadas

    if (couponButObj) {
        discount = couponButObj.discount;
    } else {
        result.innerText = 'El cupon no es valido';
        return;
    }



    //Forma 2 de hacer las cosas, por medio de un objeto:
    
    
   /*if (couponsObj[coupon]) {
        discount = couponsObj[coupon];
    } else {
        result.innerText = 'El cupon no es valido';
            return;
    }


        switch (coupon) {
        case 'Navideño':
            discount = 15;
            break;
        case 'Estudiantil':
            discount = 35;
            break;
        case 'IVA':
            discount =19;
            break;
        case 'Especial':
            discount =10;
                break;
        default:
            result.innerText = 'El cupon no es valido';
            return;
    } */


    
    //Forma 1 de hacer las cosas:

    /* if(coupon == 'cupon1') {
        discount = 15;
    } else if(coupon == 'cupon2') {
        discount = 20;
    } else {
        result.innerText = 'El cupon no es valido';
        return;
    } */

    const newPrice = price * (100 - discount) / 100;
    
    console.log({
        couponsArr,
        couponINArray,
        couponButObj,
        coupon,
        discount,
    }) 


    result.innerText =`el nuevo precio con descuento es: $${newPrice}`;
}
