const inputPrice = document.querySelector('#price');
const inputCoupon = document.querySelector('#coupon');

const btn = document.querySelector('#calcular');

const result = document.querySelector('#result');

const discounts = {
    Navideño: 15,
    Estudiantil: 35,
    IVA: 19,
    Especial: 10,
};

btn.addEventListener('click', calcularPrecioConDescuento);

function calcularPrecioConDescuento() {

    const price = parseInt(inputPrice.value);
    const coupon = inputCoupon.value;
    let discount;
    
    if(!price || !coupon) {
        result.innerText = 'por favor llena el formulario';
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
    }

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
        price: price,
        discount: discount,
        newPrice: newPrice,
    }) 


    result.innerText =`el nuevo precio con descuento es: $${newPrice}`;
}
