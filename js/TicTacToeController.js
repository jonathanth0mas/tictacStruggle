(function(){

	angular
		.module("TicTacToe")
		.controller("TicTacToeController", TicTacToeController);


		function TicTacToeController(){
			var self = this;
			//var X = "X";
			//var O = "O";

				// just change to firebase as $array when attaching firebase
			self.GameBoard = new Array(9);
			self.turnCounter = 1;
			self.click = click;
			self.clearBoard = clearBoard;
			//self.catsGame = catsGame;



			function clearBoard(){
				self.GameBoard = new Array(9);



			}

			function click($index){

				if (self.GameBoard[$index] === undefined){
					//console.log(document.querySelectorAll("div.squares")[$index].style.backgroundImage);
					//document.querySelectorAll("div.squares")[$index].style.backgroundImage = "url('img/xPiece.jpeg')";
					if (self.turnCounter === 1){
						self.GameBoard[$index] = "X";
						self.turnCounter = 2;
					}

					else{
						self.GameBoard[$index] = "O";
						self.turnCounter = 1;
					}

				}
			else{
					false;
				}

			boxCheck(self.GameBoard[$index]);

			}
		function boxCheck(symbol){
			if( (self.GameBoard[0]== symbol && self.GameBoard[1]==symbol && self.GameBoard[2]==symbol) ||
				(self.GameBoard[3]== symbol && self.GameBoard[4]==symbol && self.GameBoard[5]==symbol) ||
				(self.GameBoard[6]== symbol && self.GameBoard[7]==symbol && self.GameBoard[8]==symbol) ||
				(self.GameBoard[0]== symbol && self.GameBoard[3]==symbol && self.GameBoard[6]==symbol) ||
				(self.GameBoard[1]== symbol && self.GameBoard[4]==symbol && self.GameBoard[7]==symbol) ||
				(self.GameBoard[2]== symbol && self.GameBoard[5]==symbol && self.GameBoard[8]==symbol) ||
				(self.GameBoard[0]== symbol && self.GameBoard[4]==symbol && self.GameBoard[8]==symbol) ||
				(self.GameBoard[2]== symbol && self.GameBoard[4]==symbol && self.GameBoard[6]==symbol) ){
					alert("YOU WiN!!")
			}
		}

		}

})();

