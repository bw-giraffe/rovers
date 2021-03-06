/*
Rich Rizzo
Tuesday May 17th, 2016

Ran and tested with Node.js.
Let me show you what I've got.
     ___          
    . -^   `--,      
   /# =========`-_   
  /# (--====___====\ 
 /#   .- --.  . --.| 
/##   |  * ) (   * ),
|##   \    /\ \   / |
|###   ---   \ ---  |
|####      ___)    #|
|######           ##|
 \##### ---------- / 
  \####           (  
   `\###          |  
     \###         |  
      \##        |   
       \###.    .)   
        `======/     
*/

function roverCom(plateau, start_1, dir_1, start_2, dir_2) {
	plateau = plateau.split(" ");
	start_1 = start_1.split(" ");
	start_2 = start_2.split(" ");

	var x = 0;
	var y = 0;
	var pathMatrix = [["N", "y", 1], ["E", "x", 1], ["S", "y", -1], ["W", "x", -1]];
	var pmIdx = 0;
	var path;

	function determineDir(dir) {
		pathMatrix.forEach(function(elem, idx){
			if(elem[0] === dir) {
				path = elem;
				pmIdx = idx;
			} 
		});
	}

	function determineXY(startingpos) {
		if(startingpos.length != 3) {
			return false;
		} else {
			x = startingpos[0];
			y = startingpos[1];
			return true;
		}
	}

	function notOutOfBounds(plateau, x, y) {
		var west = Math.abs(plateau[3]) * -1;
		var south = Math.abs(plateau[2]) * -1;
		var east = parseInt(plateau[1]);
		var north = parseInt(plateau[0]);
		if(x < west) {
			throw "rover out of bounds";
		}else if(y < south) {
			throw "rover out of bounds";
		}else if(x > east) {
			throw "rover out of bounds";
		}else if(y > north) {
			throw "rover out of bounds";
		} else {
			return true
		}
	}

	function move(directions) {
		for(i = 0; i < directions.length; i++) {
			if(directions[i] === "L") {
				pmIdx = ((pmIdx+4-1) % 4);
				path = pathMatrix[pmIdx];
			}else if(directions[i] === "R") {
				pmIdx = ((pmIdx+4+1) % 4);
				path = pathMatrix[pmIdx];
			}else if(directions[i] === "M") {
				if(path[1] === "y") {
					y = parseInt(y) + parseInt(path[2]);
			}else if(path[1] === "x") {
					x = parseInt(x) + parseInt(path[2]);
				}
			} else {
				throw "invalid input please use L, R, or M"
			}
		}
		if(notOutOfBounds(plateau, x, y)) {
			return x + " " + y + " " + path[0];
		} 
	}

	determineXY(start_1);
	determineDir(start_1[2]);
	r1Output = move(dir_1);
	determineXY(start_2);
	determineDir(start_2[2]);
	r2Output = move(dir_2);
	
	return r1Output + "\n" + r2Output

}


//sample input output test
function standardInputTest(){
	var sampleArea = "5 5 3 3";
	var sampleDir1 = "1 2 N";
	var instruct1 = "LMLMLMLMM";
	var sampleDir2 = "-3 -1 E";
	var instruct2 = "MMRMMLMMMR";

	var expectedOutput = "1 3 N" + "\n" + "2 -3 S";
	var actualOutput = roverCom(sampleArea, sampleDir1, instruct1, sampleDir2, instruct2);
	console.log("Input is: " + sampleArea + "\n" + sampleDir1 + "\n" + instruct1 + "\n" + sampleDir2 + "\n" + instruct2);
	console.log("Actual output is: ", actualOutput);
	console.log("Expected output is: ", expectedOutput + "\n");
	return expectedOutput === actualOutput;
}

//when a cat stands on the 'm' key
function wonkyInputTest(){
	var sampleArea = "4 6 6 3";
	var sampleDir1 = "-1 2 N";
	var instruct1 = "LMMMMMMMMMMMMM";
	var sampleDir2 = "3 -2 W";
	var instruct2 = "RMRLMMM";

	var expectedOutput = "rover out of bounds";

	var actualOutput;

	try {
		roverCom(sampleArea, sampleDir1, instruct1, sampleDir2, instruct2);
	} catch(err) {
		actualOutput = err;
	}
	console.log("Input is: " + sampleArea + "\n" + sampleDir1 + "\n" + instruct1 + "\n" + sampleDir2 + "\n" + instruct2);
	console.log("Actual output is: ", actualOutput);
	console.log("Expected output is: ", expectedOutput + "\n");
	return expectedOutput === actualOutput;
}

//hitting the wrong key for the instructions
function badInstructionsTest() {
	var sampleArea = "10 10 8 10";
	var sampleDir1 = "2 2 N";
	var instruct1 = "LMRMLMM";
	var sampleDir2 = "-3 -2 W";
	var instruct2 = "RMTLMMM";

	var expectedOutput = "invalid input please use L, R, or M";

	var actualOutput;

	try {
		roverCom(sampleArea, sampleDir1, instruct1, sampleDir2, instruct2);
	} catch(err) {
		actualOutput = err;
	}
	console.log("Input is: " + sampleArea + "\n" + sampleDir1 + "\n" + instruct1 + "\n" + sampleDir2 + "\n" + instruct2);
	console.log("Actual output is: ", actualOutput);
	console.log("Expected output is: ", expectedOutput + "\n");
	return expectedOutput === actualOutput;
}

standardInputTest();
wonkyInputTest();
badInstructionsTest();


