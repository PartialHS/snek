//the area is 30 by 30
const length = 30;
const width = 30;

var snake = [];
//Test code
var map = makeMap(width, length);
var score = snake.length -2;
document.getElementById("map").innerHTML = borderMap(map);
document.getElementById("score").innerHTML = "score =" + score;
