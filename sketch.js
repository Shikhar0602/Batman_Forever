const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var bgImg;

var bat, light;
var l1, l2, l3;
var batImg;

var f;
var r;


function preload(){
 
    bgImg = loadImage("night.jpg");
    batImg = loadImage("bat.png");
    l1 = loadImage("light1.png");
    l2 = loadImage("light2.png");
    l3 = loadImage("light3.png"); 
    

    
}

function setup(){

   

    light = createSprite(200, 100, 100, 100);
    light.addImage("l1", l1);

    bat = createSprite(100, 200, 0, 0);
    bat.velocityX = random(5, 15);
    bat.addImage("bat", batImg);
    bat.scale = 0.45;





    engine = Engine.create();
    world = engine.world;
    var canvas = createCanvas(1200,800);


    rain1 = new Rain(random(0,width));
    rain2 = new Rain(random(0,width));
    rain3 = new Rain(random(0,width));
    rain4 = new Rain(random(0,width));
    rain5 = new Rain(random(0,width));

    rain6 = new Rain(random(0,width));
    rain7 = new Rain(random(0,width));
    rain8 = new Rain(random(0,width));
    rain9 = new Rain(random(0,width));
    rain10 = new Rain(random(0,width));

    rain11 = new Rain(random(0,width));
    rain12 = new Rain(random(0,width));
    rain13 = new Rain(random(0,width));
    rain14 = new Rain(random(0,width));
    rain15 = new Rain(random(0,width));

    rain16 = new Rain(random(0,width));
    rain17 = new Rain(random(0,width));
    rain18 = new Rain(random(0,width));
    rain19 = new Rain(random(0,width));
    rain20 = new Rain(random(0,width));

    rain21 = new Rain(random(0,width));
    rain22 = new Rain(random(0,width));
    rain23 = new Rain(random(0,width));
    rain24 = new Rain(random(0,width));
    rain25 = new Rain(random(0,width));
    rain26 = new Rain(random(0,width));
    rain27 = new Rain(random(0,width));
    rain28 = new Rain(random(0,width));
    rain29 = new Rain(random(0,width));
    rain30 = new Rain(random(0,width));
    rain31 = new Rain(random(0,width));
    rain32 = new Rain(random(0,width));
    rain33 = new Rain(random(0,width));
    rain34 = new Rain(random(0,width));
    rain35 = new Rain(random(0,width));
    rain36 = new Rain(random(0,width));
    rain37 = new Rain(random(0,width));
    rain38 = new Rain(random(0,width));
    rain39 = new Rain(random(0,width));
    rain40 = new Rain(random(0,width));

    rain41 = new Rain(random(0,width));
    rain42 = new Rain(random(0,width));
    rain43 = new Rain(random(0,width));
    rain44 = new Rain(random(0,width));
    rain45 = new Rain(random(0,width));
    rain46 = new Rain(random(0,width));
    rain47 = new Rain(random(0,width));
    rain48 = new Rain(random(0,width));
    rain49 = new Rain(random(0,width));
    rain50 = new Rain(random(0,width));
    rain51 = new Rain(random(0,width));
    rain52 = new Rain(random(0,width));
    rain53 = new Rain(random(0,width));
    rain54 = new Rain(random(0,width));
    rain55 = new Rain(random(0,width));
    rain56 = new Rain(random(0,width));
    rain57 = new Rain(random(0,width));
    rain58 = new Rain(random(0,width));
    rain59 = new Rain(random(0,width));
    rain60 = new Rain(random(0,width));

    rain61 = new Rain(random(0,width));
    rain62 = new Rain(random(0,width));
    rain63 = new Rain(random(0,width));
    rain64 = new Rain(random(0,width));
    rain65 = new Rain(random(0,width));
    rain66 = new Rain(random(0,width));
    rain67 = new Rain(random(0,width));
    rain68 = new Rain(random(0,width));
    rain69 = new Rain(random(0,width));
    rain70 = new Rain(random(0,width));
    rain71 = new Rain(random(0,width));
    rain72 = new Rain(random(0,width));
    rain73 = new Rain(random(0,width));
    rain74 = new Rain(random(0,width));
    rain75 = new Rain(random(0,width));
    rain76 = new Rain(random(0,width));
    rain77 = new Rain(random(0,width));
    rain78 = new Rain(random(0,width));
    rain79 = new Rain(random(0,width));
    rain80 = new Rain(random(0,width));

    rain81 = new Rain(random(0,width));
    rain82 = new Rain(random(0,width));
    rain83 = new Rain(random(0,width));
    rain84 = new Rain(random(0,width));
    rain85 = new Rain(random(0,width));
    rain86 = new Rain(random(0,width));
    rain87 = new Rain(random(0,width));
    rain88 = new Rain(random(0,width));
    rain89 = new Rain(random(0,width));
    rain90 = new Rain(random(0,width));
    rain91 = new Rain(random(0,width));
    rain92 = new Rain(random(0,width));
    rain93 = new Rain(random(0,width));
    rain94 = new Rain(random(0,width));
    rain95 = new Rain(random(0,width));
    rain96 = new Rain(random(0,width));
    rain97 = new Rain(random(0,width));
    rain98 = new Rain(random(0,width));
    rain99 = new Rain(random(0,width));
    rain100 = new Rain(random(0,width));

    person = new Person(width/2,height - 150, 150, 300);
    
}

function draw(){

    Engine.update(engine);
    background(bgImg);

 
    r = random(1,3);
    f = frameCount;
  
  

   if(f % 180 === 0)
   {
       light.x = random(100,1100);
       light.visible = true;
       
   } else {
       light.visible = false;
   }

   switch(r)
   {
       case 1:
       light.addImage("l1", l1);
       break;

       case 2:
       light.addImage("l2", l2);
       break;
       
       case 3:
       light.addImage("l3", l3);
       break;
   }



   if(bat.x > 4000)
   {
      bat.x = -100;
      bat.y = random(200,500);
      bat.scale = random(0.3,0.6);
   }
 

   person.display();
   rain1.display();
   rain2.display();
   rain3.display();
   rain4.display();
   rain5.display();
   rain6.display();
   rain7.display();
   rain8.display();
   rain9.display();
   rain10.display();
   rain11.display();
   rain12.display();
   rain13.display();
   rain14.display();
   rain15.display();
   rain16.display();
   rain17.display();
   rain18.display();
   rain19.display();
   rain20.display();

   rain21.display();
   rain22.display();
   rain23.display();
   rain24.display();
   rain25.display();
   rain26.display();
   rain27.display();
   rain28.display();
   rain29.display();
   rain30.display();
   rain31.display();
   rain32.display();
   rain33.display();
   rain34.display();
   rain35.display();
   rain36.display();
   rain37.display();
   rain38.display();
   rain39.display();
   rain40.display();

   rain41.display();
   rain42.display();
   rain43.display();
   rain44.display();
   rain45.display();
   rain46.display();
   rain47.display();
   rain48.display();
   rain49.display();
   rain50.display();
   rain51.display();
   rain52.display();
   rain53.display();
   rain54.display();
   rain55.display();
   rain56.display();
   rain57.display();
   rain58.display();
   rain59.display();
   rain60.display();

   rain61.display();
   rain62.display();
   rain63.display();
   rain64.display();
   rain65.display();
   rain66.display();
   rain67.display();
   rain68.display();
   rain69.display();
   rain70.display();
   rain71.display();
   rain72.display();
   rain73.display();
   rain74.display();
   rain75.display();
   rain76.display();
   rain77.display();
   rain78.display();
   rain79.display();
   rain80.display();

   rain81.display();
   rain82.display();
   rain83.display();
   rain84.display();
   rain85.display();
   rain86.display();
   rain87.display();
   rain88.display();
   rain89.display();
   rain90.display();
   rain91.display();
   rain92.display();
   rain93.display();
   rain94.display();
   rain95.display();
   rain96.display();
   rain97.display();
   rain98.display();
   rain99.display();
   rain100.display();
   
   drawSprites();
}   



