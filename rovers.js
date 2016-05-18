function roverCom(plateau, start_1, dir_1, start_2, dir_2) {
	plateau = plateau.split(" ");
	start_1 = start_1.split(" ");
	// dir_1 = dir_1.split(" ");
	var x = 0;
	var y = 0;
	var pathMatrix = [["N", "y", 1], ["E", "x", 1], ["S", "y", -1], ["W", "x", -1]];
	var pmIdx = 0;
	var path;

	pathMatrix.forEach(function(elem, idx){
		if(elem[0] === start_1[2]) {
			path = elem;
			pmIdx = idx;
		} 
	});
	console.log("PATH AFTER ASSIGNMENT", path);
	console.log("FUCKING INDEX IS", pmIdx);

	function startChecker(startingpos) {
		if(startingpos.length != 3) {
			return false;
		} else {
			x = startingpos[0];
			y = startingpos[1];
			return true;
		}
	}

	console.log(startChecker(start_1));
	console.log("x ", x);
	console.log("x ", y);
	console.log("path", path);
	console.log("PATH 1 ELEMENT", path[1]);

	for(i = 0; i < dir_1.length; i++) {
		if(dir_1[i] === "L") {
			pmIdx = ((pmIdx+4-1) % 4);
			console.log("pmIdx for L", pmIdx);
			path = pathMatrix[pmIdx];
			console.log("PATH IS NOW", path);
		} else if(dir_1[i] === "R") {
			pmIdx = ((pmIdx+4+1) % 4);
			console.log("pmIdx for R", pmIdx);
			path = pathMatrix[pmIdx];
			console.log("PATH IS NOW", path);
		} else if(dir_1[i] === "M") {
			if(path[1] === "y") {
				console.log("PATH2", path[2]);
				y = parseInt(y) + parseInt(path[2]);
				console.log("y is now", y);
			} else if(path[1] === "x") {
				console.log("PATH2", path[2]);
				x = parseInt(x) + parseInt(path[2]);
				console.log("x is now", x);
			}
		} else {
			return "invalid input please use L, R, or M"
		}
	}

 	console.log("x ", x);
	console.log("y", y);
	console.log("path", path[0]);
}

console.log(roverCom("5 5 3 3", "1 2 N", "LMLMLMLMM", " ", " "));






