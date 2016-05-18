function roverCom(plateau, start_1, dir_1, start_2, dir_2) {
	plateau = plateau.split(" ");
	start_1 = start_1.split(" ");
	start_2 = start_2.split(" ");
	console.log(start_2);
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
				console.log("running path matrix p is", path);
				pmIdx = idx;
				console.log("running path matrix p is", pmIdx);
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
		if(y > north || y < south || x > east || x < west) {
			console.log("OUT OF BOUNDSSSSS");
			return "rover out of bounds"
		} else {
			return false;
		}
	}

	function move(directions) {
		for(i = 0; i < directions.length; i++) {
			if(notOutOfBounds(plateau, x, y)) {
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
					return "invalid input please use L, R, or M"
				}
			} else {
				return "aborting mission, rover is out of bounds"
			}
		}
	}

	move(dir_1);
	r1Output = x + " " + y + " " + path[0];

	move(dir_2);
	determineXY(start_2);
	determineDir(start_2[2]);
	move(dir_2);

	r2Output = x + " " + y + " " + path[0];
	
	return r1Output + "\n" + r2Output

}

console.log(roverCom("5 5 3 3", "1 2 N", "LMMMMMMMMMMMMMMMMM", "-3 -1 E", "MMRMMLMMMR"));






