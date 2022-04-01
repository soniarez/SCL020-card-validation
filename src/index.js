import validator from './validator.js';

/*Formula para enmascarar datos tarjeta
$("input[name='expiry-data']").mask("00 / 00"); */

document.getElementById("pay").onclick = payment;

function payment() {
let input = document.getElementById("card-number").value;
validator.stringLenght(input); //esta es la estructura para objetos
validator.isANumber(input);
validator.luhnValidation(input);
validator.maskify(input);
}


//Para únicamente permitir ingresar valores numéricos:
/* document.getElementById("card-number").addEventListener("keypress", isANumber(evt));
function isANumber(evt) {
    let ch = String.fromCharCode (evt.which);
    if (!/[0,9]/.test(ch)) {
        evt.preventDefault();
    }
} */ 




