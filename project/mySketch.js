
let data;
let flowers = ["sunflower", "rose", "tulip"]
let y = 50

function preload() {
  data = loadJSON("flower.json");
}

function setup() {
  createCanvas(400, 400);
  background(200);
  
  let flowers = data.flowers;
 
  fill(flowers[1].r,flowers[1].g,flowers[1].b);
  ellipse(150,150,150,150);
  stroke(0);
  textSize(22);
  text(flowers[1].name, 100, 150);

  for(let n = 0; n<5; n++){
    text(flowers[f],150,y);
    y += 50;
  }
}