var noOfSquares = 6;

//pallet
var arr = [];

//color picked
var picked;

//to get all the squares div
var squares = document.getElementsByClassName("square");

//to get RGB display
var targetColor = document.getElementsByClassName("targetColor");

//message that can be empty, try again or correct
var message = document.getElementsByClassName("message");

//heading
var head = document.querySelector("h1");

//reset button
var reset = document.getElementsByClassName("NewColor");

init();

function init(){
	//generate random color paletta 

	arr = generateRandomColor(noOfSquares);

	//get target color randomly from the array size
	picked = arr[randomPickedColorIndex()];

	//updating target RGB display
	targetColor.textContent = picked;
}

for(var i=0;i<squares.length;i++){
	//detting square's color one by one to palette color
	squares[i].style.backgroundColor = arr[i];

	//adding eventListener to all squares
	squares[i].addEventListener("click", function(){
		if(picked === this.style.backgroundColor){
			message.textContent = "correct";
			message.style.color = "green";

			//when correct , set everything to the target color and set new color to play again
			changeColor(this.style.backgroundColor);
			reset.textContent = "Play Again?"
		}
		else{
			message.textContent = "Try Again";
			message.style.color = "red";

			//to hide the wrong square we will set it to background color
			this.style.backgroundColor = "#232323";
		}

	})
}

//event listener for the reset button
reset.addEventListener("click", resetIn);

//to get the random color from existing palette
function randomPickedColorIndex(){
	return Math.floor(Math.random()*arr.length);
}

//to get the random palette of colors
function generateRandomColor(limit){
	var color = [];
	for(var i=0;i<limit;i++){
		color.push(rgbGenerator());
		return color;
	}
}
function rgbGenerator(){
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	return "rgb("+r+", "+g+", "+b+")";
}

function changeColor(color){
	for (var i = 0; i<squares.length; i++) {
		squares[i].style.backgroundColor = color;

	head.style.backgroundColor = color;
}

function restln(){
	arr = generateRandomColor(noOfSquares);
	picked = arr[randomPickedColorIndex()];
	targetColor.textContent = picked;
	message.textContent = "";
	head.style.backgroundColor = "steelblue";

	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor = arr[i];
	}
}