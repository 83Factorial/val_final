//funcion para cambiar de opcidad el video (aun no funciona)

//document.getElementById("boton_video").style.opacity = "1";
//var i = setInterval(function() {
//    if(ana.currentTime > 2){ 
//      document.getElementById("boton_video").style.opacity = "0.5";
//  	  // (Put the minutes and seconds in the display)
//  	  clearInterval(i);
//  }; });

//function next(){
//  location.replace("./lien2.html")
//}
//
//setTimeout( function() { next(); }, 2000);
function next(){
  location.replace("./lien2.html");
};

setTimeout( function() { next(); }, 6000);



//variables para las decisiones
var dec_1;
var dec_2;
var dec_3;
var dec_4 = null;
var dec_5;
var dec_6;
var dec_7;

//funciones para asignar las decisiones

//decision 1
function decision_1_t (){
  dec_1 = true;
  location.replace("./4.html");
};
function decision_1_f (){
  dec_1 = false;
  location.replace("./4.html");
};

//decision 2
function decision_2_t (){
  dec_2 = true;
  location.replace("./dec_3.html");
};
function decision_2_f (){
  dec_2 = false;
  location.replace("./dec_3.html");
};

//decision 3
function decision_3_t (){
  dec_3 = true;
  location.replace("./dec_4.html");
};
function decision_3_f (){
  dec_3 = false;
  location.replace("./dec_4.html");
};

//decision 4
function decision_4_t (){
  dec_4 = true;
  location.replace("./final_pequeño.html  ");
};
function decision_4_f (){
  dec_4 = false;
  location.replace("./5.html");
};

//decision 5 NO HAY DECISION
function decision_5_t (){
  dec_5 = true;
  location.replace("./insertar");
};
function decision_5_f (){
  dec_5 = false;
  location.replace("./insertar");
};

//decision 6
function decision_6_1 (){
  dec_6 = 1;
  location.replace("./6_3.html");
};
function decision_6_2 (){
  dec_6 = 2;
  location.replace("./6_3.html");
};
function decision_6_3 (){
  dec_6 = 3;
  location.replace("./6_3.html");
};

//decision 7
function decision_7_t (){
  dec_6 = true;
  location.replace("./final1.html");
};
function decision_7_f (){
  dec_6 = false;
  location.replace("./final.html");
};

//funcion para mostrar el final