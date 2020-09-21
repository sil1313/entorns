//////// Variables ///////////

//---- Escenes ---- //
var escena_actual = 0;
let temps=0;

//---- Arrays dels cercles vermells i altres ---- //
let cercles_principiA = [];
let cercles_principiB = [];
let bola=0;
let worA="R";
let worB="É";
let worC="S";
let worD="O";
let worE="N";
let worF="A";
let worG="N";
let worH="C";
let worI="E";
let worJ="S";

//---- Lletres, transparencia i posició ---- //
let ran;
let lastran;
let transparencia=0;
let posiciox=0;
let posicioy=0;
let posicioBx=200;
let posicioBy=0;
///////
let transparenciaLletres=0;
//---- Lletres ---- //
//var word = 'RÉSONANCES';

let s = 'Electronic Music Festival    #7';
let z = 'Dijon Du 07 AU IO NOVEMBRE 2013';
var clicked=0;

///////////////// Clases ////////////////

//---- Esferes dreta ---- //
class circle{
  
  constructor(x,y,diameter,z,transparencia) {
  noStroke()
  this.x = x;
  this.y = y;
  this.diameter = diameter;
  this.diameter = diameter;
  this.transparencia= transparencia;
  }
  
  display(){
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
  
  restablirbola(){
  if(bola==1){
   if (this.y> 500) {this.y=-30; this.x=400; bola=2;}
  }
    
  if (bola==2){
    if (this.y> 800) {this.y=120; this.x=400; bola=3;}
  }
    
  if (bola==3){
    if (this.y> 500) {this.y=260; this.x=400; bola=4;}
  }
    
  if (bola==4){
    if (this.y> 500) {this.y=400; this.x=400; bola=5;}
  }
    
  if (bola==5){
    if (this.y> 500) {this.y=600; this.x=400; bola=1;}
  }
    
}
  velocitat(){
    this.y = this.y + 1.90;
    this.x=this.x-5;
  }
  
}


//---- Esferes Esquerra ---- //
class circleB{
  
constructor(x,y,diameter,z,transparencia) {
  noStroke()
  this.x = x;
  this.y = y;
  this.diameter = diameter;
  this.diameter = diameter;
  this.transparencia= transparencia;

  }
  display(){
  ellipse(this.x, this.y, this.diameter, this.diameter);
  
  }
  
  restablirbola(){
    
  if(bola==1){
   if (this.y> 500) {this.y=-30; this.x=400; bola=2;}
  }
  if (bola==2){
    if (this.y> 800) {this.y=120; this.x=400; bola=3;}
  }
  if (bola==3){
    if (this.y> 500) {this.y=260; this.x=400; bola=4;}
  }
  if (bola==4){
    if (this.y> 500) {this.y=400; this.x=400; bola=5;}
  }
  if (bola==5){
    if(this.y> 500) {this.y=600; this.x=400; bola=1;}
  }        
}
  velocitat(){
    this.y = this.y - 1.90;
    this.x=this.x+5;
    
  }
}



////////// Setup ////////////

function setup(){

  createCanvas(400, 550);
  background('#000000');

//---- Crear Cercles ---- //
  
////////// Crear bola 1:

  for (let i = 0; i < 1; i++) {
    e3 = new circle(400,-30,60,60,transparencia);
    cercles_principiA.push(e3);
  }

    // Crear bola 2:
  for (let i = 0; i <1; i++) {
    e3 = new circle(400,118,60,transparencia);
    cercles_principiA.push(e3);
  } 
    //crea bola 3
  for (let i = 0; i < 1; i++) {
    e3 = new circle(400,260,60,transparencia);
    cercles_principiA.push(e3);
  }
  
  for (let i = 0; i < 1; i++) {
    e3 = new circle(400,400,60,transparencia);
    cercles_principiA.push(e3);
  }
  for (let i = 0; i < 1; i++) {
    e3 = new circle(400,600,60,transparencia);
    cercles_principiA.push(e3);
  }
  for (let i = 0; i < 1; i++) {
    e4 = new circleB(0,197,60,60);
    cercles_principiB.push(e4);
  }
    
  for (let i = 0; i < 1; i++) {
    e4 = new circleB(0,341,60,60);
    cercles_principiB.push(e4);
  }
    
  for (let i = 0; i < 1; i++) {
    e4 = new circleB(0,482,60,60);
    cercles_principiB.push(e4);
  }
}

////// Iniciar programa amb un clic ///////

function mouseClicked(){

  if (escena_actual == 0) {

    if(clicked==0){
 
      temps=0;

      escena_actual = 1;
      clicked=clicked+1;
      ran=int(random(3));

    }
  } 

}
// Quan el movil es mou:
function deviceShaken() {

    if(clicked==0){
      temps=0;
     
      escena_actual = 1;
      clicked=clicked+1;
      ran=int(random(3));
      //Restart animació:
    }
  if(clicked==1 && temps>=215 ){
    background('#000000');
    clicked=0;
    escena_actual = 0; 
    setup();
    temps=0;
    transparencia=0;
    bola=1;
    lastran=5;
    posiciox=0;
    posicioy=0;
    posicioBx=200;
    posicioBy=0;
    transparenciaLletres=0;
    clicked=0;
  }
  
     

}


function draw(){

  temps=temps+0.50;
  
///// Restart program ////////
  if(clicked==1 && mouseIsPressed && temps>=215 ){
    background('#000000');
    clicked=0;
    escena_actual = 0; // Saber com s'ha de reiniciar  
    setup();
    let temps=0;
    transparencia=0;
    bola=1;
    lastran=5;
    posiciox=0;
    posicioy=0;
    posicioBx=200;
    posicioBy=0;
    transparenciaLletres=0;
    clicked=0;

    } 

  
  ////// Aixó fa que les boles vermelles es creein i moguin: ///////
  if (escena_actual == 1) {
    if(ran==1){
    textSize(40);
    textFont('Arial Black');
    fill(225,225,225,bola);
    
    let r=int(random(11));

    if(r==1){text(worA,170,10,60);}
    if(r==2){text(worC,170,160);}
    if(r==3){text(worE,170,260);}
    if(r==4){text(worG,170,360);}
    if(r==5){text(worI,170,460);}

    if(r==6){text(worB,210,115);}
    if(r==7){text(worD,210,215);}
    if(r==8){text(worF,210,315);}
    if(r==9){text(worH,210,415);} 
    if(r==10){text(worJ,210,515);}
    
    if(bola!=100){
      bola=bola+0.1

    }
    if(bola>=25){
      ran=int(random(3));
       
      if(ran==1&&lastran==ran){
        ran=random(3);
        lastran=1;
      }
    }
  }
 
  if(ran==2){
    transparencia=transparencia+1;
    for (let i = 0; i < cercles_principiA.length; i++) {
      fill(218,62,64,transparencia);
      cercles_principiA[i].display();
      cercles_principiA[i].velocitat();
    }
    for (let i = 0; i < cercles_principiB.length; i++) {

      cercles_principiB[i].display();
      cercles_principiB[i].velocitat();

    }

    if(transparencia>=100){
      ran=int(random(3));
      if(ran==2&&lastran==ran){
        ran=random(3);
        lastran=2;
      }
    }
  }
} 

    
    
    
/////// Lletres vermelles ////////


  if(ran==0){
    fill('#000000');
    rect(10,5,80,50);
    rect(320,490,80,50);
    transparenciaLletres=transparenciaLletres+10;
    fill(218,62,64,transparenciaLletres);
    textSize(10);
    text(s, 10,5,70, transparenciaLletres);
    textAlign(RIGHT);
    text(z, 320,490,70, transparenciaLletres);
    textAlign(LEFT);


    if(transparenciaLletres>=100){
      
        ran=int(random(3));

      if(ran==0&&lastran==ran){
          ran=random(3);
          lastran=0;
      }
    }}

  
}

