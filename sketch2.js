"use strict"
var turno= 1;
var element;
//funcion constructora de celdas
function Cell(empty,value){
	this.e=empty;
	this.v=value;
	}
var juego=[];//array vacio donde meto las 9 celdas
for(var i=0;i<9;i++){
	juego.push(new Cell(true,"n"));
}
/*funcion que pone los valores de vacio a	verdadero en todas las celdas, los
colores, turnos etc, */
function resetear() {
		juego=[];
		for(i=0;i<9;i++){
			juego.push(new Cell(true,"n"));
			document.getElementById("cell"+i).innerHTML = "";
					}
}
function clickerino(n){
	if(juego[n].e==true){
		switch(turno){
			case 1:
				juego[n].e=false;
				juego[n].v="x";
				element = document.getElementById("cell"+n);
				element.style.color = "#e34a06";
				element.innerHTML = "X";
				turno = 2;
				break;
			case 2:
				juego[n].e=false;
				juego[n].v="o";
				element = document.getElementById("cell"+n);
				element.style.color = "#407026";
				element.innerHTML = "O";
				turno = 1;
				break;
	 }
	 /*Cycle through all the values of the keys and if all are false, it sets
	 "true" as the value of the variable, for it to be used in the last "else if".*/
	 var falserino = juego.every(valor => valor.e==false);
 }
  	if(juego[0].v== "x" && juego[1].v=="x" && juego[2].v=="x" ||
		 juego[0].v== "x" && juego[3].v=="x" && juego[6].v=="x" ||
	 	 juego[0].v== "x" && juego[4].v=="x" && juego[8].v=="x" ||
 	 	 juego[2].v== "x" && juego[5].v=="x" && juego[8].v=="x" ||
		 juego[2].v== "x" && juego[4].v=="x" && juego[6].v=="x" ||
	 	 juego[1].v== "x" && juego[4].v=="x" && juego[7].v=="x" ||
		 juego[6].v== "x" && juego[7].v=="x" && juego[8].v=="x" ||
		 juego[3].v== "x" && juego[4].v=="x" && juego[5].v=="x"){
		setTimeout(function(){ alert("Player 1 wins");resetear();}, 100);
	}else if(juego[0].v== "o" && juego[1].v=="o" && juego[2].v=="o" ||
					 juego[0].v== "o" && juego[3].v=="o" && juego[6].v=="o" ||
				 	 juego[0].v== "o" && juego[4].v=="o" && juego[8].v=="o" ||
			 	 	 juego[2].v== "o" && juego[5].v=="o" && juego[8].v=="o" ||
					 juego[2].v== "o" && juego[4].v=="o" && juego[6].v=="o" ||
				 	 juego[1].v== "o" && juego[4].v=="o" && juego[7].v=="o" ||
					 juego[6].v== "o" && juego[7].v=="o" && juego[8].v=="o" ||
					 juego[3].v== "o" && juego[4].v=="o" && juego[5].v=="o") {
		setTimeout(function(){ alert("Player 2 wins");resetear();}, 100);
	}else if (falserino){
		setTimeout(function(){ alert("Draw");resetear();}, 100);
	}
}
