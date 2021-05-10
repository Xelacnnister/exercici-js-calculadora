



function calcula(operacion){
var valor1 = document.calc.valor1.value;
var valor2 = document.calc.valor2.value;

var result = eval(valor1 + operacion + valor2);
document.calc.resultado.value = result;

}

