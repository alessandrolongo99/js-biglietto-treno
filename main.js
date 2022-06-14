const km = prompt('Quanti chilometri vuoi percorrere?');
const age = prompt('Quanti anni hai?');
const tax = 0.21;

if (isNaN(km) || isNaN(age)) {
    console.log('Non hai inserito un numero ricarica la pagina');
} else {
    let price = km * tax;
    if (age < 18) {
        price = price - ((price / 100) * 20);
    } else if (age > 65) {
        price = price - ((price / 100) * 40);
    }
    console.log(`il prezzo e' di ${price.toFixed(2)} euro`);
}