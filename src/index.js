import validator from './validator.js';

document.getElementById("pay").onclick = payment;

function payment()  {

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
document.getElementById("card-number").value = validator.maskify(input);
validator.stringLenght(input); //esta es la estructura para objetos
validator.isANumber(input);
validator.luhnValidation(input);
validator.isValid(input);

let verification = validator.isValid(input);
if (verification === true) {
    /* swal(
        text: "¡Pago exitoso!",
        icon: "success",
      }); */
      alert("¡Bien, Pago exitoso!");
      //return true;
} else {
   /* swal({
        text: "Tarjeta no válida, revisa tus datos.",
        icon: "error",
      }); */
    alert("Tarjeta no válida, revisa tus datos.");
    //return false;
} 

//WINDOW RELOAD
setTimeout(() => {
    window.location.reload(true);
}, 10000);
242  

//........

}
