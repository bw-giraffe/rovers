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

	startChecker(start_1);
	determineStart(start_1[2]);

	function determineStart(dir) {
		pathMatrix.forEach(function(elem, idx){
			if(elem[0] === dir) {
				path = elem;
				console.log("running path matrix p is", path);
				pmIdx = idx;
				console.log("running path matrix p is", pmIdx);
			} 
		});
	}

	function startChecker(startingpos) {
		if(startingpos.length != 3) {
			return false;
		} else {
			x = startingpos[0];
			y = startingpos[1];
			return true;
		}
	}

	for(i = 0; i < dir_1.length; i++) {
		if(dir_1[i] === "L") {
			pmIdx = ((pmIdx+4-1) % 4);
			path = pathMatrix[pmIdx];
		} else if(dir_1[i] === "R") {
			pmIdx = ((pmIdx+4+1) % 4);
			path = pathMatrix[pmIdx];
		} else if(dir_1[i] === "M") {
			if(path[1] === "y") {
				y = parseInt(y) + parseInt(path[2]);
			} else if(path[1] === "x") {
				x = parseInt(x) + parseInt(path[2]);
			}
		} else {
			return "invalid input please use L, R, or M"
		}
	}

	r1Output = x + " " + y + " " + path[0];
	console.log("r1", r1Output);

	startChecker(start_2);
	determineStart(start_2[2]);
	console.log("x is now", x);
	console.log("y is now", y);
	console.log("path is now", path);

	for(i = 0; i < dir_2.length; i++) {
		if(dir_2[i] === "L") {
			pmIdx = ((pmIdx+4-1) % 4);
			path = pathMatrix[pmIdx];
		} else if(dir_2[i] === "R") {
			pmIdx = ((pmIdx+4+1) % 4);
			path = pathMatrix[pmIdx];
		} else if(dir_2[i] === "M") {
			if(path[1] === "y") {
				y = parseInt(y) + parseInt(path[2]);
			} else if(path[1] === "x") {
				x = parseInt(x) + parseInt(path[2]);
			}
		} else {
			return "invalid input please use L, R, or M"
		}
	}

	r2Output = x + " " + y + " " + path[0];
	console.log("r2", r2Output);


}

console.log(roverCom("5 5 3 3", "1 2 N", "LMLMLMLMM", "-3 -1 E", "MMRMMLMMMR"));






