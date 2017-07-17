var row = 4 ; 

function drawTree(row) {
	for (i = 0; i < row; i++){
		var star = '';
		for (j = 0; j <= i; j++) { 
			star += '*';
		}
	console.log(star)
	}
}

drawTree(row);