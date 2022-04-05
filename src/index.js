import validator from "./validator.js";

document.getElementById("pay").onclick = payment;

function payment() {
  //NO PERMITE CAMPOS VACÍOS
  let errorCount = 0;

  let errorOne = document.getElementById("error1");
  if (document.getElementById("name").value == "") {
    document.getElementById("name").style.borderColor = "red";
    errorOne.textContent = "Ingresa tu nombre";
    errorCount++;
  } else {
    errorOne.textContent = "";
    document.getElementById("name").style.borderColor = "";
  }

  let errorTwo = document.getElementById("error2");
  if (document.getElementById("lastname").value == "") {
    document.getElementById("lastname").style.borderColor = "red";
    errorTwo.textContent = "Ingresa tu apellido";
    errorCount++;
  } else {
    errorTwo.textContent = "";
    document.getElementById("lastname").style.borderColor = "";
  }

  let errorThree = document.getElementById("error3");
  if (document.getElementById("card-number").value == "") {
    document.getElementById("card-number").style.borderColor = "red";
    errorThree.textContent = "Ingresa tu número de tarjeta";
    errorCount++;
  } else {
    errorThree.textContent = "";
    document.getElementById("card-number").style.borderColor = "";
  }

  let errorFour = document.getElementById("error4");
  if (document.getElementById("expiration-date").value == "") {
    document.getElementById("expiration-date").style.borderColor = "red";
    errorFour.textContent = "Campo requerido";
    errorCount++;
  } else {
    errorFour.textContent = "";
    document.getElementById("expiration-date").style.borderColor = "";
  }

  let errorFive = document.getElementById("error5");
  if (document.getElementById("cvv").value == "") {
    document.getElementById("cvv").style.borderColor = "red";
    errorFive.textContent = "Campo requerido";
    errorCount++;
  } else {
    errorFive.textContent = "";
    document.getElementById("cvv").style.borderColor = "";
  }

  if (errorCount > 0) {
    return false;
  }

  //FUNCIONES DESDE VALIDATOR

  let input = document.getElementById("card-number").value;
  let userInput = input.replace(/\s/g, ""); //Removiendo en input los espacios vacíos que quedan al crear espacio cada 4 dígitos

  document.getElementById("card-number").value = validator.maskify(userInput);
  validator.stringLenght(userInput);
  validator.isANumber(userInput);
  validator.luhnValidation(userInput);
  validator.isValid(userInput);

  let verification = validator.isValid(userInput);
  if (verification === true) {
    document.getElementById("modal-yes").style.display = "block";
    document.getElementById("close_btn-yes").onclick = function(){
    document.getElementById("modal-yes").style.display = 'none'; 
  } 
  } else {
    document.getElementById("modal-no").style.display = "block";
    document.getElementById("close_btn-no").onclick = function(){
    document.getElementById("modal-no").style.display = 'none';
  };
  }

}

//ESPACIO CADA 4 DÍGITOS
document.getElementById("card-number").addEventListener("keyup", (e) => {
  let valorInput = e.target.value;
  document.getElementById("card-number").value = valorInput
    .replace(/\s/g, "")
    .replace(/\D/g, "")
    .replace(/([0-9]{4})/g, "$1 ")
    .trim();
});
