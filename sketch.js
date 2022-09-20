let settings = {

  breathingLoop: 4,
  red : 255,
  green : 255,
  blue : 255,
}


// Create a new canvas to the browser size
function setup () {
  createCanvas(windowWidth, windowHeight);

  gui = new dat.GUI();

 gui.add(settings, 'breathingLoop', 0, 10, step=1).name('Breathing Loop Length');
gui.add(settings, 'red', 0, 255, step=1).name('RED');
gui.add(settings, 'green', 0, 255, step=1).name('GREEN');
gui.add(settings, 'blue', 0, 255, step=1).name('BLUE');
 gui.remember(settings);
 gui.width = 300;
 gui.close();
}

// On window resize, update the canvas size
function windowResized () {
  resizeCanvas(windowWidth, windowHeight);
}

// Render loop that draws shapes with p5
function draw(){


  fill(200);
  textSize(15);
	noStroke();
	text(
		` Contemplation of the Body (Ānāpānasati)
      Breathing in long, the practitioner knows  ‘I am breathing in long.’
      Breathing in short, the  practitioner knows ‘I am breathing in short.’
      Breathing out long, practitioner knows ‘I am breathing out long.’
      Breathing out short, practitioner knows ‘I am breathing in short.’
      The practitioner trains with ‘breathing in, I experience the whole body.’
      ‘breathing out, I experience the whole body.’
      The practitioner trains with, ‘breathing in, I calm the bodily formation.’
      ‘breathing out, I calm the bodily formation.’
      Pāli Canon
		`, 
		50, 50);
  // Black background
  background(0, 10);
  
  // Center of screen
  const px = width / 2;
  const py = height / 2;
  
  // We will scale everything to the minimum edge of the canvas
  const minDim = min(width, height);
  
  // Size is a fraction of the screen
  const size = minDim * 0.8;
  
  // Get time in seconds
  const time = millis() / 2000;
  
  // How long we want the loop to be (of one full cycle)
  const duration = settings.breathingLoop;
  
  // Get a 'playhead' from 0..1
  // We use modulo to keep it within 0..1
  const playhead = time / duration % 1;

  // Get an animated value from 0..1
  // We use playhead * 2PI to get a full rotation
  const anim = sin(playhead * PI * 2) * 0.5 + 0.5;
  
  // Create an animated thickness for the stroke that
  const thickness = minDim * 0.1 * anim;
  
  // Turn off fill
fill(settings.red, settings.green, settings.blue, 10)
  
  // Turn on stroke and make it white
  stroke(settings.red, settings.green, settings.blue, 5)
  
  // Apply thickness
  strokeWeight(thickness);

  // Draw a circle centred at (px, py)
  ellipse(px, py, size* anim, size * anim);
}
