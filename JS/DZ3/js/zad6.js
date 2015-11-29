var x = parseInt(prompt("Напишите число")),
	y = parseInt(prompt("Напишите число")),
	z = parseInt(prompt("Напишите число")),
	xyz = [x,y,z];

function a(a, b) {
	return a - b;
}

alert(xyz.sort(a));