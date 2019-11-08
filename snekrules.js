
const length = 30;
const width = 30;

var map = makeMap(width, length);
document.getElementById("map").innerHTML = borderMap(map);
document.getElementById("score").innerHTML = "score =" + score;
