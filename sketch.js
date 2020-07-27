const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var ground;
var engine, world;

var img;
var drops = [];
var umbrella;
var img2, lightning;
var i;
var rand;
function preload(){
    img = loadImage("images/boyandumbrella.png");
    img2 = loadImage("images/lightning.png");
    

    



}

function setup(){
  engine = Engine.create();
    world = engine.world;
createCanvas(500,500);

image(img, 250,100 );

  umbrella = new Umbrella(250 );
 

 for(i = 0; i < 100; i++){

    drops.push( new Drops( 0));
  }
  ground = createSprite(250,490, 500,10);
 
}


function draw(){
  
  ellipseMode(CENTER);
   
  Engine.update(engine);
  background("blue");
    umbrella.draw();

    for(i = 0; i < 100; i++){
      drops[i].update();
      drops[i].draw();
     
  }



     rand = random(10,50);
    if (rand > 48){
        lightning = createSprite(250,50,10,10);
        lightning.addImage(img2);
        lightning.scale = 0.2;
        var o = random(0, 11);
        for( i = 0; i < 12; i++){
        
            switch (o) {
                case 0:
                   lightning.position.x = 30;
                  break;
                case 1:
                  lightning.position.x = 30;
                  break;
                case 2:
                  lightning.position.x = 30;
                case 3:
                  lightning.position.x = 30;
                  break;
                  case 4:
                    lightning.position.x = 30;
                  break;
                case 5:
                  lightning.position.x = 30;
                  break;
                case 6:
                  lightning.position.x = 30;
                  break;
                case 7:
                  lightning.position.x = 30;
                  break;
                  case 8:
                    lightning.position.x = 30;
                  break;
                case 9:
                  lightning.position.x = 30;
                  break;
                case 10:
                  lightning.position.x = 30;
                  break;
                case 11:
                  lightning.position.x = 30;
                  break;
                }
          drawSprites();
        }
        lightning.scale = 0.001;
      }

    
    drawSprites();
}  

