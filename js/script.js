//Declaración de variables

var jugadores=prompt("¿Cuántos jugadores son?");
jugadores=ingresoJugadores(jugadores);
var dadoA=document.getElementById('dadoA');
var dadoB=document.getElementById('dadoB');
var dadoC=document.getElementById('dadoC');
var dadoD=document.getElementById('dadoD');
var dadoE=document.getElementById('dadoE');
var checkA=document.getElementById('checkA');
var checkB=document.getElementById('checkB');
var checkC=document.getElementById('checkC');
var checkD=document.getElementById('checkD');
var checkE=document.getElementById('checkE');
var jugador=document.getElementById('jugador');


//Funciones

// Validación cantidad de jugadores

function ingresoJugadores(jugadores){
    while (jugadores > 5 || jugadores < 2){
        jugadores=prompt("Poner entre 2 y 5 jugadores. Ingrese nuevamente la cantidad de jugadores.");
    }
    return jugadores
}

// Crear tabla

// function crearTabla(jugadores){
//    i=0;
//    j=0;
//    filas= 14;
//    columnas=jugadores+1;
//    document.write("<table border=1>");
//    for (i=0;i<filas>i++){
//        document.write("<tr>");
//        for (j=0;j<columnas;j++){
//            document.write("<td>&nbsp;</td>");
//        }
//        document.write("</tr>");
//    }
//    document.write("</table>");
//}

// Boton Tirar todos los dados

function tirarDado(){
    var numeroAleatorio = Math.random();
    var numeroMultiplicado = (numeroAleatorio*5)+1;
    var numero = Math.round(numeroMultiplicado);
    dadoA.src = '../dados/dado'+numero+'.png';

    var numeroAleatorio = Math.random();
    var numeroMultiplicado = (numeroAleatorio*5)+1;
    var numero = Math.round(numeroMultiplicado);
    dadoB.src = '../dados/dado'+numero+'.png';

    var numeroAleatorio = Math.random();
    var numeroMultiplicado = (numeroAleatorio*5)+1;
    var numero = Math.round(numeroMultiplicado);
    dadoC.src = '../dados/dado'+numero+'.png';

    var numeroAleatorio = Math.random();
    var numeroMultiplicado = (numeroAleatorio*5)+1;
    var numero = Math.round(numeroMultiplicado);
    dadoD.src = '../dados/dado'+numero+'.png';

    var numeroAleatorio = Math.random();
    var numeroMultiplicado = (numeroAleatorio*5)+1;
    var numero = Math.round(numeroMultiplicado);
    dadoE.src = '../dados/dado'+numero+'.png';
}

// Boton Tirar dados seleccionados

function dadosSelect(){
    if (checkA.checked){
        var numeroAleatorio = Math.random();
        var numeroMultiplicado = (numeroAleatorio*5)+1;
        var numero = Math.round(numeroMultiplicado);
        dadoA.src = '../dados/dado'+numero+'.png';
    }
    if (checkB.checked){
        var numeroAleatorio = Math.random();
        var numeroMultiplicado = (numeroAleatorio*5)+1;
        var numero = Math.round(numeroMultiplicado);
        dadoB.src = '../dados/dado'+numero+'.png';
    }
    if (checkC.checked){
        var numeroAleatorio = Math.random();
        var numeroMultiplicado = (numeroAleatorio*5)+1;
        var numero = Math.round(numeroMultiplicado);
        dadoC.src = '../dados/dado'+numero+'.png';
    }
    if (checkD.checked){
        var numeroAleatorio = Math.random();
        var numeroMultiplicado = (numeroAleatorio*5)+1;
        var numero = Math.round(numeroMultiplicado);
        dadoD.src = '../dados/dado'+numero+'.png';
    }
    if (checkE.checked){
        var numeroAleatorio = Math.random();
        var numeroMultiplicado = (numeroAleatorio*5)+1;
        var numero = Math.round(numeroMultiplicado);
        dadoE.src = '../dados/dado'+numero+'.png';
    }
}

// Boton anotar jugada

function anotarJugada(){

}


// Main

tirarDado();
dadosSelect();
anotarJugada();