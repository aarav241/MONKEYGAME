var play =0
var mid =1
var end =2
var gamestate = play

var score = 0;

var vailtime =0;

var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  monkey = loadAnimation("sprite_0.png");
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
  
  g =loadImage("ju.jpg");
 
   ge =loadImage("tr.jpg");
  
   h =loadImage("gh.jpg");
  
   o =loadImage("bo.jpg");
  
   ho =loadImage("restart.jpg");
  
  m = loadSound("bomm.mp3")
}



function setup() {
  
 createCanvas(600, 500);
  
 
  
  mo = createSprite (300,250,20,20);
  mo.addImage(g);
  mo.scale = 1.4;
  
   b = createSprite (300,380,20,20);    
  b.addImage(o);
  //b.scale=0.2;
  
    k = createSprite (300,150,20,20);    
  k.addImage(h);
  k.scale=1.2;
  
  mon = createSprite (100,395,20,20);
  mon.addAnimation("running",monkey_running);
  mon.addAnimation("sprite_0.png",monkey);
  mon.scale = 0.2;
 // mon.debug =true;
 // mon.setCollider("rectangle",0,0,230,200)
  
   j = createSprite (300,300,20,20);    
  j.addImage(ho);
    j.scale = 0.5
  j.visible = false;
  
  
  ro = createSprite (300,470,600,20);
  
  //o = createSprite (300,490,600,60);
  //ro.debug = true;
ro.visible = false;
  
  foodGroup = createGroup();
   enemyGroup = createGroup();
  
  //gamestate = end
}


function draw() {
  
 

 if (gamestate === play){
     
     b.visible =true;
   k.visible = true;
   
   mon.visible = false;
   
     if (mousePressedOver(b)){
    
       
    gamestate = mid;  
    
      }
     }
  
  

  
  if (gamestate === mid){
    
    mo.velocityX = -2;
  
    if (mo.x < 150){
       mo.x = 300
     }
  
  banana();
  
 bu();
    
     rock();
    
      b.visible =false;
   k.visible = false;
    
    mon.visible = true;
    
    if(mousePressedOver(mo)&& mon.y >= 300){

      mon.velocityY  = -20
      
       }
    
    mon.velocityY  = mon.velocityY+0.8
    
    mon.collide(ro);
    
   if (mon.isTouching(foodGroup)){
     
     foodGroup.destroyEach();
     
     score = score+1
     
   }
      
    
    if (mon.isTouching(enemyGroup)){
      
        m.play();
      
      mon.changeAnimation("sprite_0.png",monkey);
      
      mon.collide(enemyGroup);
      
      mon.velocityX =0;
      
    foodGroup.setLifetimeEach(-1);
   enemyGroup.setLifetimeEach(-1);
      
   foodGroup.setVelocityXEach(0);
    enemyGroup.setVelocityXEach(0);
      
      gamestate = end;
      
        }
    
    
    
  }
  
  if (gamestate === end){
      
         j.visible = true;
    
    mon.collide(ro);
    
  
    Mo.velocityX = 0;
      }
   if(mousePressedOver(j)){
      
     
       
      
       b.visible =true;
   k.visible = true;
       j.visible = false;
      
      gamestate = play;
                
      foodGroup.destroyEach();
      enemyGroup.destroyEach();
      
      score = 0;
      
     vailtime =0;
      
      
      
       mon.changeAnimation("running",monkey_running);
       
       }
    
 //console.log(frameCount)
  
  drawSprites();
  
  if (gamestate === mid || gamestate ===end){
      
   stroke("blue");
    textFont("Georgia");
    textSize(19);    
    text("SCORE :"+score,500,50)
    
    
      }
  if (gamestate === mid){
     stroke("black");
    textFont("Georgia");
    textSize(25);    
    vailtime = Math.ceil(frameCount/frameRate())
    text("SURVIVAL TIME :"+vailtime,200,100)
    
  }
  
  if (gamestate === end){
    stroke("black");
    textFont("Georgia");
    textSize(25);    
     text("SURVIVAL TIME :"+vailtime,200,100)
    
  }
}

function rock(){
  if (frameCount%300 === 0){
    
    ob = createSprite (500,420,20,20);    
    ob.addImage(obstaceImage);
    ob.scale=0.2;
    ob.lifetime =280;
    ob.velocityX =-2;
   // ob.collide(ro);
    ob.setCollider("rectangle",0,0,230,200)
   //ob.debug = true;
     enemyGroup.add(ob)
  }
  
 
}

function banana(){
  if (frameCount%200 === 0){
    
or = createSprite (500,Math.round(random(20, 370)),20,20);
or.addImage(bananaImage);
or.velocityX =-2;    
or.scale=0.2;
or.lifetime =280;   
    foodGroup.add(or)
  }
  }

function bu (){
  
    if (frameCount%500 === 0){
    
o = createSprite (500,400,20,20);
o.addImage(ge);
o.velocityX =-2;    
o.scale=0.6;
o.lifetime =280;    
       enemyGroup.add(o)
  }
  
}