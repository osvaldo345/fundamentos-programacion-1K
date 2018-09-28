var btnCalcular = document.querySelector("#sumar");
btnCalcular.addEventListener("click",sumar);

function sumar() {
    var inputNumero1 = document.querySelector("#numero1");
    var inputNumero2 = document.querySelector("#numero2");

    var resultado = number(inputNumero1.value) + number(inputNumero2.value);
    var inputResultado = document.querySelector("#resultado");
    inputResultado.value = resultado;
}