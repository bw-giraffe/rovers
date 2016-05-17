function roverCom(plateau, start_1, dir_1, start_2, dir_2) {
	plateau = plateau.split(" ");
	start_1 = start_1.split(" ");
	dir_1 = dir_1.split(" ");

	var pathMatrix = [["N", y, 1], ["E", x, 1], ["S", y, -1], ["W", x, -1]];
	var pmIdx = 0;
	var x = 0;
	var y = 0;
	var path = pathMatrix[0];

	function startChecker(startingpos) {
		if(startingpos.length != 3) {
			return false;
		} else {
			x = startingpos[0];
			y = startingpos[1];
			path = startingpos[2];
			return true;
		}
	}

	console.log(startChecker(start_1));
	console.log("x ", x);
	console.log("x ", y);
	console.log("path", path);

	for(i = 0; i < dir_1.length; i++) {
		if(dir_1[i] === "L") {
			pmIdx = ((pmIdx - 1) % 4);
			path = pathMatrix[pmIdx];
		} else if(dir_1[i] === "R") {
			pmIdx = ((pmIdx + 1) % 4);
			path = pathMatrix[pmIdx];
		} else if(dir_1[i] === "M") {
			eval(path[1]) = eval(path[1]) + eval(path[2]);
		} else {
			return "invalid input please use L, R, or M"
		}
	}

	console.log("x", x);
	console.log("y", y);
	console.log("path", path);

}

console.log(roverCom("5 5 3 3", "1 2 N", "LMLMLMLMM", " ", " "));






