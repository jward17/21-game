var player = 0;
var comp = 0;
var total = 0;

alert("The game is simple. Starting at 0, you add either 1, 2, or 3 until either you or I say 21. The person to say 21 loses.");

do{
	var player = 0;
	var comp = 0;
	var total = 0;
	
	do{
		player = prompt("Enter 1, 2, or 3: ");
	
		if(player == 1){ 
			total = total + 1;
			alert("The total is now"+total);
			comp = 3;
			total = total + 3;
			alert("The computer added 3, the total is now"+total);
		}
		else if(player == 2){
			total = total +2;
			alert("The total is now "+total);
			comp = 2;
			total = total + 2;
			alert("The computer added 2, the total is now"+total);
		}
		else if(player == 3){
			total = total + 3;
			alert("The total is now"+total);
			comp = 1;
			total = total + 1;
			alert("The computer added 1, the total is now"+total);
		}
	}
	while(total < 20);
		alert("You lose, sorry! Your only option left is 21, better luck next time.");
		playAgain = prompt("Would you like to play again? y is yes");
}
while(playAgain == "y");