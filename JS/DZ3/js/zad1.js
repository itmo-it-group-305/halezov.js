// Заданы два массива 
// A = [ 12, 4, 3, 10, 1, 20 ] B = [-3, -7, -100, -33] 
// необходимо их объединить в один массив C добавив массив B в конец(в начало) A. 


var A = [ 12, 4, 3, 10, 1, 20];
var B = [-3, -7, -100, -33];
var C = [A.concat(B)];
alert(C);