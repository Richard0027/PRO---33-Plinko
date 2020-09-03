var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles;
var plinkos = [];
var divisions = [];


var divisionHeight = 300;

var gameState = 1;
var score = 0;
var turn = 0;
var count = 0;


function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
  text("Score : "+ score, 20, 30);

  Engine.update(engine);

  var posx = particles.body.position.x;
  var posy = particles.body.position.y;

  if(gameState === 0){
    textSize(100);
    text("Game Over", 400, 400);
  }

  if(particles != null){
    particles.display();
    if(posy > 600){

      if(posx < 400){
         score += 500;
         particles = null;
         if(count >= 5) gameState = 0;
      }

      console.log(pos);

      if(posx < 600 && posx > 340){
        score += 100;
        particles = null;
        if(count >= 5) gameState = 0;
     }

      if(posx < 600 && posx > 580){
         score += 200;
         particles = null;
         if(count >= 5) gameState = 0;
      }
    }
  }

 

  text("500", 20, 650);
  text("500", 100, 650);
  text("500", 180, 650);
  text("500", 260, 650);
  text("100", 340, 650);
  text("100", 420, 650);
  text("100", 500, 650);
  text("200", 580, 650);
  text("200", 660, 650);
  text("200", 740, 650);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
  //  if(frameCount%60===0){
  //    particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
  //    score++;
  //  }
 
  // for (var j = 0; j < particles.length; j++) {
   
  //    particles[j].display();
  //  }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
}

function mousePressed() {
  if(gameState !== 0){
    count++;
    particles = new Particle(mouseX, 10, 10, 10);
  }
}
