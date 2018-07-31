
function Player(){
	
	this.x;
	this.y;
	this.speed = 2;
	var radius = 5;
	var health = 50;

}

function move(direction){
	if(direction == left){
		this.x += speed;
	}
	else if(direction == right){

	}
	else if(direction == up){

	}
	else{

	}
}

function fastmove(){
	this.speed = 5;
}

function slowmove(){
	this.speed = 2;
}

//keylistener reads x and up to 2 directions
function leap(direction1, direction2){
	if(direction2 == null){

	}
	else{

	}
}