//default radius size
function leap(x, y, delay){
	this.x = x;
	this.y = y;
	this.radius = 5;
	this.delay = delay;
	this.pressed = false;
}

//new radius size
function leap(x, y, radius, delay){

	this.x = x;
	this.y = y;
	this.radius = radius;
	this.delay = delay;
	this.pressed = false;

}

function setPressed(bool){
	pressed = bool;
}

function isPressed(){
	return this.pressed;
}