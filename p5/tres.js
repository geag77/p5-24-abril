var movies = [
  "Bud Light",
  "Coors Light",
  "Miller Strong",
  "Budweiser",
  "Michelob",
  "Busch",
]

var cervezas = [6,6,7,5,6,8]

//movies.push("Matrix");
//oscars.push(4);

function setup() {
  var canvas = createCanvas(windowWidth, windowHeight/2);
  canvas.parent('beers');
  noLoop();
}

function windowResized() {
  //este ajuste es cuma: no estoy ajustando el ancho en relación al canvas, sino a la ventana
  //fíjense que también estoy utilizando el CSS para ajustar un ancho máximo de 100%
  resizeCanvas(windowWidth, windowHeight/2);
}

function draw() {
  background(13,13,13,200);
  noStroke ();
  for(var x = 0; x <= movies.length; x++){
    //defino el blanco con 100/255 de transparencia
    fill(255,214,12);
    // el tamaño del texto es igual a la cantidad de oscars ganados * 3
    textSize((cervezas[x]*3));
    // aquí dame el nro. de oscar ganado y ubícalo en una parte del ancho del canvas
    rect((height/1.5),  ((height/(movies.length+1.5))*(x+1)), cervezas[x]*30, 26);
    //re-defino el blanco
    fill(255);
    // ahora cambia el tamaño de texto a 12 px, como valor fijo para todo lo que sigue
    textSize(12);
    // dame el nombre de la película correspondiente y ubícala en una parte del ancho
    text(movies[x],((height/7)+12) , ((height/(movies.length+1.2))*(x+1)),((windowWidth/2)-50),100);
  }
}
