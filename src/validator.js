const validator = {
  //Validando longitud del string entre 13 y 16 caracteres
  stringLenght: function (cardLength) {
    let length = cardLength.length;
    //console.log(length);
    if (length >= 13 && length <= 19) {
      return true;
    } else {
      //alert("No cumple requisito de caracteres.");
      return false;
    }
  },

  //Validando que el string contenga únicamente valores numéricos
  isANumber: function (number) {
    let regex = new RegExp("^[0-9]*$");
    //console.log(regex.test(number));
    if (regex.test(number) === false) {
      //alert("Solo números!");
      return false;
    }
  },

  //Validando Algoritmo de Luhn ahora sí para tarjetas con 13-16 dígitos:
  luhnValidation: function (ccnumber) {
    let colector =0;
    for (let i = ccnumber.length - 1; i >= 0; i--) {
      //console.log(ccnumber[i]); //string invertida
      if (i % 2 !== 0) {
        let byTwo = ccnumber[i] * 2;
        //console.log(byTwo); //recibo la multiplicación de los dígitos
        if (byTwo >= 10) {
          colector + byTwo
          
        }
      }
    }
  },

  //Ouch! esto solo sirve para tarjetas de 16 dígitos
  /*luhnValidation: function (values) {
    for (let i = 0; i < values.length; i++) {
      if (i % 2 === 0) {
       //console.log(i); //tengo los índices pares, pero necesito el dígit(número) que está en esa posición: 
      //console.log(values.charAt(i)); //valido que efectivamente estoy sacando los números que están en las posiciones pares
      let evenNumber = values.charAt(i)*2;
      //console.log(evenNumber);
      }
    }
  }
*/

  /* Mi antigua funcion para validar que el valor ingresado es numérico/digits.
   function (number) {
    console.log(this.stringLenght(number));
    if (isNaN(number) {
      alert("Solo acepta números");
      return true;
    }
  }, */

  // ...
};

export default validator;
