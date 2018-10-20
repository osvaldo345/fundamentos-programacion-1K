var btnUno = document.querySelector('#btnUno');
var btnDos = document.querySelector('#btnDos');
var btnTres = document.querySelector('#btnTres');
var btnCuatro = document.querySelector('#btnCuatro');
var btnCinco = document.querySelector('#btnCinco');


var numero = document.querySelector('#numero');
var resultado = document.querySelector('#resultado');
var opciones = document.querySelector('#opciones');
var lienzo = document.querySelector('#lienzo');

btnUno.addEventListener('click',ejemplo1);
btnDos.addEventListener('click',ejemplo2);
btnTres.addEventListener('click',ejemplo3);
btnCuatro.addEventListener('click',ejemplo4);
btnCinco.addEventListener('click',ejemplo5);

function ejemplo5 () {
    var c = lienzo.getContext('2d');
    var valor = Number(numero.value);

    do {
        var r = Math.trunc(Math.random()*256);
        var g = Math.trunc(Math.random()*256);
        var b = Math.trunc(Math.random()*256);

    c.beginPath();
    c.fillStyle = 'rgba(' + r +',' + g + ',' + b + ',0.5)';
    c.arc(Math.random()*500+1, Math.random()*500+1, Math.random()*80+1, 0, 2*Math.PI)
    c.fill();

    valor--;
    } while(valor >= 0);
}

function ejemplo4 () {
    var valor = Number(numero.value);
    
    var i = valor;
    while (1>0) {
        var opc = document.createElement('option');
        opc.tex = i;
        opciones.add(opc);
        i--;
        
    }
}

function ejemplo3 () {
    var valor = Number(numero.value);

    for(var i = 1; i<= valor; i++) {
        var x = prompt('ingresa un numero: ');
        var row = resultado.insertRow(-1);
        var cell = row.insertCell(0);

        cell.innerHTML = x;
    }
}

function ejemplo2 () {
     var valor = Number(numero.value);

    for(var i = 1; i <=valor; i++) {
        var row = resultado.insertRow(-1);
        var cell = row.insertCell(0);

        cell.innerHTML = i;
    }
}


function ejemplo1() {
    var valor = Number(numero.value);

    for(var i = 0; i  <=valor; i++) {
        console.log(i);
        
    }
    
}