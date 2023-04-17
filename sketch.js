var sprite, sprite_running, edges;
var groundImage;

function preload(){
  sprite_running = loadAnimation("dodo.png");
  groundImage = loadImage("chao.png")
}

function setup(){
  createCanvas(600,200);
  
  //criando o sprite e adicionando animacao
  sprite = createSprite(50,160,20,50);
  sprite.addAnimation("running", sprite_running);
  edges = createEdgeSprites();
  chao = createSprite (200,180,400,20)
  chao.addImage ('chao', groundImage)
  //adicione dimensão e posição 
  sprite.scale = 0.5;
  sprite.x = 50
}


function draw(){
  //definir a cor do plano de fundo 
  background("white");
  
  //pular quando tecla de espaço for pressionada
  if(keyDown("space")){
    sprite.velocityY = -10;
  }
  //gravidade 
  sprite.velocityY = sprite.velocityY + 0.5;
  
 //impedir que o sprite caia
  sprite.collide(chao)
  drawSprites();
}