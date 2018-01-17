"use strict"
//Internet Explorer 9, Firefox, Opera, Chrome, Safari
var color="red";
var turno= 1;


//funcion constructora de celdas
function Celda(e,v){
	this.e=e;
	this.v=v;
	}
var juego=[];//array vacio donde meto las 9 celdas
for(var i=0;i<9;i++){
	juego.push(new Celda(true,"n"));
}

function resetear() { //funcion que pone los valores de vacio a verdadero en todas las celdas, los colores, turnos etc, borra todo el canvas y vuelve a dibujar las lineas y los nuymeros.
juego=[];
for(var i=0;i<9;i++){
	juego.push(new Celda(true,"n"));
	document.getElementById("cell"+i).innerHTML = ""
}
//document.getElementById("turnojugador").style="color:darkgreen;";
//document.getElementById("turnojugador").innerHTML="Turno del jugador 1";
}

function clickerino(n){
	if(juego[n].e==true){
		switch(turno){
			case 1:
				juego[n].e=false;
				juego[n].v="x";
				document.getElementById("cell"+n).innerHTML = "X";
				turno = 2;
				break;
			case 2:
				juego[n].e=false;
				juego[n].v="o";
				document.getElementById("cell"+n).innerHTML = "O";
				turno = 1;
				break;
	 }
 }
  console.log(juego);
	if(juego[0].v== "x" && juego[1].v=="x" && juego[2].v=="x" ||
		 juego[0].v== "x" && juego[3].v=="x" && juego[6].v=="x" ||
	 	 juego[0].v== "x" && juego[4].v=="x" && juego[8].v=="x" ||
 	 	 juego[2].v== "x" && juego[5].v=="x" && juego[8].v=="x" ||
		 juego[2].v== "x" && juego[4].v=="x" && juego[6].v=="x" ||
	 	 juego[1].v== "x" && juego[4].v=="x" && juego[7].v=="x" ||
		 juego[6].v== "x" && juego[7].v=="x" && juego[8].v=="x" ||
		 juego[3].v== "x" && juego[4].v=="x" && juego[5].v=="x"){
		setTimeout(function(){ alert("Ganador X");resetear(); }, 100);
	}else if(juego[0].v== "o" && juego[1].v=="o" && juego[2].v=="o" ||
					 juego[0].v== "o" && juego[3].v=="o" && juego[6].v=="o" ||
				 	 juego[0].v== "o" && juego[4].v=="o" && juego[8].v=="o" ||
			 	 	 juego[2].v== "o" && juego[5].v=="o" && juego[8].v=="o" ||
					 juego[2].v== "o" && juego[4].v=="o" && juego[6].v=="o" ||
				 	 juego[1].v== "o" && juego[4].v=="o" && juego[7].v=="o" ||
					 juego[6].v== "o" && juego[7].v=="o" && juego[8].v=="o" ||
					 juego[3].v== "o" && juego[4].v=="o" && juego[5].v=="o") {
		setTimeout(function(){ alert("Ganador O");resetear();}, 100);
	}
}
