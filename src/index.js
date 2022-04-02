import validator from './validator.js';

/*Formula para enmascarar datos tarjeta
$("input[name='expiry-data']").mask("00 / 00"); */




document.getElementById("pay").onclick = payment;

function payment() {
/*const inputFields = document.querySelectorAll("input");
const validInputs = Array.from(inputFields).filter(input => input.value === "");
alert("Debes completar todos los campos"); */ 

let input = document.getElementById("card-number").value;
validator.stringLenght(input); //esta es la estructura para objetos
validator.isANumber(input);
validator.luhnValidation(input);
validator.isValid(input);
document.getElementById("card-number").value = validator.maskify(input);



}








