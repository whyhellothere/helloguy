
function Bullet(x, y, radius, direction, speed){

	this.x = x;
	this.y = y;
	this.radius = radius;
	this.cos = Math.cos(direction/180 * Math.PI);
	this.sin = Math.sin(direction/180 * Math.PI);
	this.speed = speed;
	this.active = true;

}

function shift(distanceX, distanceY){
	this.x += distanceX;
	this.y += distanceY;
}

function changeSpeed(speed){
	this.speed = speed;
}

function deleteBullet(delay){

	this.active = false;

}