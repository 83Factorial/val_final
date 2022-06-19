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



//function next(){
//  location.replace("./ind_cap.html");
//};



//variables para las decisiones
var dec_1 = window.sessionStorage.setItem("dec1", );
var dec_2 = window.sessionStorage.setItem("dec2", );
var dec_3 = window.sessionStorage.setItem("dec3", );
var dec_4 = window.sessionStorage.setItem("dec4", );
var dec_5 = window.sessionStorage.setItem("dec5", );
var dec_6 = window.sessionStorage.setItem("dec6", );
var dec_7 = window.sessionStorage.setItem("dec7", );

//funciones para asignar las decisiones

//decision 1
function decision_1_t (){
  dec_1 = window.sessionStorage.setItem("dec1", 1);
  location.replace("./4.html");
};
function decision_1_f (){
  dec_1 = window.sessionStorage.setItem("dec1", 0);
  location.replace("./4.html");
};

//decision 2
function decision_2_t (){
  dec_2 = window.sessionStorage.setItem("dec2", 1);
  location.replace("./dec_3.html");
};
function decision_2_f (){
  dec_2 = window.sessionStorage.setItem("dec2", 0);
  location.replace("./dec_3.html");
};

//decision 3
function decision_3_t (){
  dec_3 = window.sessionStorage.setItem("dec3", 1);
  location.replace("./dec_4.html");
};
function decision_3_f (){
  dec_3 = window.sessionStorage.setItem("dec3", 0);
  location.replace("./dec_4.html");
};

//decision 4
function decision_4_t (){
  dec_4 = window.sessionStorage.setItem("dec4", 1);
  location.replace("./5.html  ");
};
function decision_4_f (){
  dec_4 = window.sessionStorage.setItem("dec4", 0);
  location.replace("./final_pequeno.html");
};

//decision 5 NO HAY DECISION
function decision_5_t (){
  dec_5 = 1;
  location.replace("./insertar");
};
function decision_5_f (){
  dec_5 = 0;
  location.replace("./insertar");
};

//decision 6
function decision_6_1 (){
  dec_6 = window.sessionStorage.setItem("dec6", 1);
  location.replace("./6_3.html");
};
function decision_6_2 (){
  dec_6 = window.sessionStorage.setItem("dec6", 2);
  location.replace("./6_3.html");
};
function decision_6_3 (){
  dec_6 = window.sessionStorage.setItem("dec6", 3);
  location.replace("./6_3.html");
};

//decision 7
function decision_7_t (){
  let data1 = sessionStorage.getItem('dec1');
  if (data1 == 1){
    location.replace("./final_a.html");
  };
  if (data1 == 0){
    location.replace("./final_b.html");
  };
};

function decision_7_f (){
  dec_6 = false;
  location.replace("./final1.html");
};

//funcion para mostrar el final

function final_elec (){
  data2 = sessionStorage.getItem('dec2')
  data6 = sessionStorage.getItem('dec6')
  if (data2 == 1) {
    if (data6 == 1) {
      location.replace("./a2_a6.html");
    };
    if (data6 == 2) {
      location.replace("./a2_b6.html");
    };
    if (data6 == 3) {
      location.replace("./a2_c6.html");
    };
  };
  if (data2 == 0) {
    if (data6 == 1) {
      location.replace("./b2_a6.html");
    };
    if (data6 == 2) {
      location.replace("./b2_b6.html");
    };
    if (data6 == 3) {
      location.replace("./b2_c6.html");
    };
  };
}