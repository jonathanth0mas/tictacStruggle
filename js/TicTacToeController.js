(function(){

	angular
		.module("TicTacToe")
		.controller("TicTacToeController", TicTacToeController);


		function TicTacToeController(){
			var self = this;

				// just change to firebase as $array when attaching firebase
			self.GameBoard = new Array(9);
			self.turnCounter = 0;
			self.click = click;



			function click($index){
				self.turnCounter++
				if (self.GameBoard[$index] === undefined){
					self.GameBoard[$index] = "x"; 
				
				if (self.turnCounter % 2 == 0){
					self.GameBoard[$index] = "O";
				}

				} 

			}

		}

})();

