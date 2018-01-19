"use strict"
var turno= 1;
var element;
var a = 1;
var t;
var done;
var tremble;
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
			done= false;
	 		t = document.getElementById("texto");
			juego=[];
			for(var x=0;x<9;x++){
			let elemid = document.getElementById("cell"+x);
			juego.push(new Cell(true,"n"));
			elemid.innerHTML = "";
			let cl = elemid.className;
			elemid.className="";
			setTimeout(function(){elemid.className=cl;},100);
					}
					turno = 1;
					tremble.innerHTML= deftext;
					tremble.className="";
					t.style.backgroundColor="#e34a06";
}
function clickerino(n){
	tremble = document.getElementById("trem");
	t = document.getElementById("texto");

	element = document.getElementById("cell"+n);
	if(juego[n].e==true && !done){
		switch(turno){
			case 1:
				juego[n].e=false;
				juego[n].v="x";
				element.style.color = "#e34a06";
				element.innerHTML = "X";
				t.style.backgroundColor="#407026";
				turno = 2;
				break;
			case 2:
				juego[n].e=false;
				juego[n].v="o";
				element.style.color = "#407026";
				t.style.backgroundColor="#e34a06";
				element.innerHTML = "O";
				turno = 1;
				break;
	 }
	 /*Cycle through all the values of the keys and if all are false, it sets
	 "true" as the value of the variable, for it to be used in the last "else if".*/
	 var falserino = juego.every(valor => valor.e==false);
 }
 if(!done){
	  	if(juego[0].v== "x" && juego[1].v=="x" && juego[2].v=="x" ||
			 juego[0].v== "x" && juego[3].v=="x" && juego[6].v=="x" ||
		 	 juego[0].v== "x" && juego[4].v=="x" && juego[8].v=="x" ||
	 	 	 juego[2].v== "x" && juego[5].v=="x" && juego[8].v=="x" ||
			 juego[2].v== "x" && juego[4].v=="x" && juego[6].v=="x" ||
		 	 juego[1].v== "x" && juego[4].v=="x" && juego[7].v=="x" ||
			 juego[6].v== "x" && juego[7].v=="x" && juego[8].v=="x" ||
			 juego[3].v== "x" && juego[4].v=="x" && juego[5].v=="x"){
				 tremble.innerHTML= xtext; done=true; tremble.className="animated tada"; t.style.backgroundColor="#e34a06";
				 setTimeout(function(){resetear();}, 5000);
		}else if(juego[0].v== "o" && juego[1].v=="o" && juego[2].v=="o" ||
						 juego[0].v== "o" && juego[3].v=="o" && juego[6].v=="o" ||
					 	 juego[0].v== "o" && juego[4].v=="o" && juego[8].v=="o" ||
				 	 	 juego[2].v== "o" && juego[5].v=="o" && juego[8].v=="o" ||
						 juego[2].v== "o" && juego[4].v=="o" && juego[6].v=="o" ||
					 	 juego[1].v== "o" && juego[4].v=="o" && juego[7].v=="o" ||
						 juego[6].v== "o" && juego[7].v=="o" && juego[8].v=="o" ||
						 juego[3].v== "o" && juego[4].v=="o" && juego[5].v=="o") {
					tremble.innerHTML= otext; done=true; tremble.className="animated rubberBand"; t.style.backgroundColor="#407026";
					setTimeout(function(){resetear();}, 5000);
		}else if (falserino){
			tremble.innerHTML= dtext; done=true;
			t.style.backgroundColor="#f9bd03";
			tremble.className="animated flash";
			setTimeout(function(){resetear();}, 5000);
		}
	}
}

var deftext = `Play!`;
var xtext = `Player 1 wins!`;
var otext = `Player 2 wins!`;
var dtext = `Draw`;
var descript = `
	CSS grid, Javascript and <a href="https://cdnjs.com/libraries/animate.css/" target="_blank">animate.css</a><br>
	Code on <a href="https://github.com/Flamerinus/3enraya" target="_blank">GitHub</a>.
	`;
