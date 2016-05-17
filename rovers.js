function roverCom(plateau, start_1, dir_1, start_2, dir_2) {
	plateau = plateau.split(" ");
	start_1 = start_1.split(" ");
	dir_1 = dir_1.split(" ");

	var path_matrix = [[N, y, 1], [E, x, 1], [S, y, -1], [W, x, -1]];
	var pm_index = 0;
	var x = 0;
	var y = 0;
	var path;

	function start_checker(startingpos) {
		if(startingpos.length != 3) {
			return false;
		} else {
			x = startingpos[0];
			y = startingpos[1];
			path = startingpos[2];
			return true;
		}
	}

	console.log(start_checker(start_1));
	console.log("x ", x);
	console.log("x ", y);
	console.log("path", path);

	for(i = 0; i < dir_1.length; i++) {
		
	}

}

console.log(roverCom("5 5 3 3", "1 2 N", " ", " ", " "));