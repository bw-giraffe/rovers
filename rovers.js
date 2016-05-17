function roverCom(plateau, start_1, dir_1, start_2, dir_2) {
	plateau = plateau.split(" ");
	start_1 = start_1.split(" ");

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

}

console.log(roverCom("5 5 3 3", "1 2 N", " ", " ", " "));