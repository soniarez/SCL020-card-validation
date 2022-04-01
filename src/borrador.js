//Entendiendo los objetos: 


const misMatematicas = {
    numeroUno : 5,
    NumeroDos : 2,
  
    
  
    sumaDosNumeros: function(numero1, numero2) {
    misMatematicas.numeroUno + this.restaDosNumeros(10,5);
    let newValue = misMatematicas.numeroUno + this.restaDosNumeros(10,5);
    return newValue;
    },
  
    restaDosNumeros: function(digit1, digit2) {
      return digit1 - digit2;
    }
    
  }; 
  
  


  //console.log(misMatematicas.numeroUno)
  
  //misMatematicas.sumaDosNumeros(2,5);
  //misMatematicas.sumaDosNumeros(7,8);