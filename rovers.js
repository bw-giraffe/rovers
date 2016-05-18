function roverCom(plateau, start_1, dir_1, start_2, dir_2) {
	plateau = plateau.split(" ");
	start_1 = start_1.split(" ");
	start_2 = start_2.split(" ");
	// dir_1 = dir_1.split(" ");
	var x = 0;
	var y = 0;
	var pathMatrix = [["N", "y", 1], ["E", "x", 1], ["S", "y", -1], ["W", "x", -1]];
	var pmIdx = 0;
	var path;

	determineXY(start_1);
	determineDir(start_1[2]);

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
		} else if(y < south) {
			throw "rover out of bounds";
		}else if(x > east) {
			throw "rover out of bounds";
		}else if(y > north) {
			console.log("OUT OF BOUNDSSSSS");
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
			} else if(directions[i] === "R") {
				pmIdx = ((pmIdx+4+1) % 4);
				path = pathMatrix[pmIdx];
			} else if(directions[i] === "M") {
				if(path[1] === "y") {
					y = parseInt(y) + parseInt(path[2]);
			
				} else if(path[1] === "x") {
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

	r1Output = move(dir_1);
	determineXY(start_2);
	determineDir(start_2[2]);
	r2Output = move(dir_2);
	
	return r1Output + "\n" + r2Output

}

console.log(roverCom("5 5 3 3", "1 2 N", "LMLMLMLMM", "-3 -1 E", "MMRMMLMMMR"));






