var frame;
var x;
var y;
var moving;
var facing;
var bug = [];
var bugg = [];
var spritesheet;
var count = 1;
var speed = 5;
var speedUP = 0;
var score = 0;
var time = 30;

function setup(){
createCanvas(640,480);
background(155);
imageMode(CENTER);
var j = 0;

for(var i = 0; i < 16; i++){
bug[i] = new Roach("roach.png", random(15,600), random(15,420), 1);
}
}


function Roach(ImageName, x, y, moving){
	this.frame = 0;
	this.spritesheet = loadImage(ImageName);
	this.x = x;
	this.y = y;
	this.moving = moving;
	this.facing = 0;
	
	
	
	this.draw = function(){
	if(frameCount % 450 == 0){
	speedUP+= .4;
	}

	
	
	speed = 5 + speedUP;
	
		push();
		imageMode(CENTER);
		
		if(this.moving == 0){
			image(this.spritesheet, this.x, this.y, 80, 80, 0, 0, 80, 80);
			speed = 0;
	
		}else if(this.moving == 2){
			image(this.spritesheet, this.x, this.y, 80, 80, 400, 0, 80, 80);
			speed = 0;
		}
		else{
			image(this.spritesheet, this.x, this.y, 80, 80, (this.frame + 1)*80, 0, 80, 80);

		}

		if(frameCount%4 == 0){
			this.frame = (this.frame + 1) % 4;
			this.x += speed;
			if(this.x >= 670){
			this.x = 0;
			}
		}
		pop();
	}
	
	this.clicked = function(){
		var dis = dist(mouseX, mouseY, this.x, this.y);
		if(dis<23){
		this.moving = 2;
		score+= 10;
	}


}
}


function draw(){
background(155);



for(var i = 0; i < bug.length; i++){
bug[i].draw();
}
for(var i = 0; i < bugg.length; i++){
if(bugg[i] != null)
bugg[i].draw();
}

textSize(30);
text("Score: " +score,10, 30);


if(frameCount%60 == 0)
time-=1;

textSize(28);
text("Time left: " +time, 10, 470);

if(time <= 0){
fill(0,191,255);
textSize(50);
text("OUT OF TIME", 170, 230);
textSize(30);
text("Final Score: " +score, 235, 270);
noLoop();
}

}



function mousePressed(){
count++;
if(count % 2 == 0)
bugg[count]= new Roach("roach.png", random(15,600), random(15,420), 1);


for(var i = 0; i < bug.length; i++){
bug[i].clicked();
}

for(var i = 0; i < bugg.length; i++){
if(bugg[i] != null)
bugg[i].clicked();
}

}







