var hxd;

function preload() {
  hxd = loadTable("https://raw.githubusercontent.com/geag77/Beer/master/drinks.csv", "csv", "header");
}

function setup() {
  var miCanvas = createCanvas(windowWidth, 400);
  miCanvas.parent('miContenedor');
  print(hxd.getRowCount() + " filas en la tabla");
  print(hxd.getColumnCount() + " columnas en la tabla");
  noLoop();
}

function windowResized() {
  resizeCanvas(windowWidth, 400);
}

function draw(){
  background(230);
  var Guatemala = 8;
  textAlign(LEFT);
  textSize(20);
  text(hxd.get(Guatemala,0),((width/30)-10),50);
  for (var i = 0; i < (hxd.getRowCount()+0); i++){
    textSize(11);
    textAlign(CENTER);
    fill(100);
    text(hxd.get(Guatemala,(2+i)), ((width/30)*(i+1)), (height-30)-hxd.get(Guatemala,(3+i)));
    fill(0);
    text("Country",((width/30)*(i+0)),height-20);
  }
}
