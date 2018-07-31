function LeapList(){

	//dictionary for all leaps on stage, adding 
	this.length = 0;
	this.current = 0;
	var leaps = {};

}

function removeLeap(){
	leaps.remove(current);
	this.current ++;
}

function addLeap(x, y, delay){
	leaps.Add(length, new Leap(x, y, delay));	
	this.length ++;


}

function makeVisible(){
	leaps[current].setVisible(true);
}

function 