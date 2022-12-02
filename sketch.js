/*
author: Joanne Amarisa
description: callout poster for Data Garden Project
instruction: click anywhere on the poster to add a flower!

references:
• gradient effect by kazuki umeda - https://youtu.be/-MUOweQ6wac

• noise effect by chradil - https://editor.p5js.org/chradil/sketches/-sdMh_Q0k

*/

let cnv;
let data, imagine,ctx;
let h1, h2, p1, p2;
let flowers = [];
let numFlowers = 18;

function preload() {
  for (let i = 0; i < numFlowers; i++) {
    flowers[i] = loadImage("assets/dgp-partners-" + i + ".png");
  }
}

function setup() {
  cnv = createCanvas(480, 750);
  let newcnvX = (windowWidth - width)/2;
  let newcnvY = (windowHeight - height)/2;
  cnv.position(newcnvX, newcnvY);
  cnv.style('z-index', '-1');
  cnv2 = createCanvas(480, 750);
  rectMode(CENTER);
  
  ctx = cnv.drawingContext
  data = Uint32Array.from( {length: width*height }, () => Math.random() > 0.12 ? 0xFF000000 : 0 );
  noStroke();

  
  /*GRAIN ON BACKGROUND*/
    ctx.globalCompositeOperation = 'source-atop';

  imagine = new ImageData( new Uint8ClampedArray( data.buffer ), width, height );
  ctx.putImageData(imagine,0,0);
  ctx.putImageData(imagine,width,0);
  ctx.putImageData(imagine,0,height);
  ctx.putImageData(imagine,width,height)
  background("#f2f2e6");

    /*GRADIENT BACKGROUND*/
  // linearGradient(0, 0.3, 0.6, 1, "#f2f2e6", "#ec9322", "#f2f2e6", "#e57378");
  cnv.fillStyle = hyperGradient();
  
}

function draw() {
  // ellipse(width/2, height/2, 400, 400);
}

function mousePressed() {
  let flowerSize = 60;
  rand = int(random(0,17));
  flowers[rand].resize(flowerSize, 0);
  image(flowers[rand], mouseX-flowerSize/2, mouseY - flowerSize/2);
}

function touchStarted() {
  let flowerSize = 60;
  rand = int(random(0,17));
  flowers[rand].resize(flowerSize, 0);
  image(flowers[rand], touches.x, touches.y);
}

/* GRADIENT FUNCTIONS */
function linearGradient(s1, s2, s3, s4, c1, c2, c3, c4) {
  
  let gradient=drawingContext.createLinearGradient(0, 0, width, height);
  
  gradient.addColorStop(s1, c1);
  gradient.addColorStop(s2, c2);
  gradient.addColorStop(s3, c3);
  gradient.addColorStop(s4, c4);
  
  drawingContext.fillStyle = gradient;
  
}

function radialGradient(sX, sY, sR, eX, eY, eR, colorS, colorE) {
  
  let Rgradient=drawingContext.createRadialGradient(sX, sY, sR, eX, eY, eR);
  
  Rgradient.addColorStop(0, colorS);
  Rgradient.addColorStop(1, colorE);
  
  drawingContext.fillStyle = Rgradient;
  
}

function hyperGradient() {
  
  radialGradient(width-100, 250, 0, width-100, 250, 200, "#f2f2e6",color(236, 147, 34, 100))
  // rect(width/2, height/2, width-30,height-30, 60);
  
  
  radialGradient(400, 400, 0, 250, 250, 250, color(244, 245, 233, 75),color(230, 115, 120,200));
rect(width/2, height/2, width-30,height-30, 60);
  
  radialGradient(45, height, 0, 0, height-150, 300, color(236, 147, 34),color(230, 115, 120,0));
rect(width/2, height/2, width-30,height-30, 60);
  
}


