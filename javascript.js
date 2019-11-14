//the area is 30 by 30
const length = 30;
const width = 30;

var snake = [];
var food = null;
//Test code
var map = makeMap(width, length);
snake = placeSnake(map);
map = seeSnake(map, snake);
food = makeFood(map, snake);
map = seeFood(map, food);
var score = snake.length -2;
document.getElementById("map").innerHTML = borderMap(map);
document.getElementById("score").innerHTML = "score =" + score;


document.addEventListener('keydown',function(event) {
  if(event.key =='w' ){
    document.getElementById("wKey").style.backgroundColor = "#ffdb58";}
  if(event.key =='s'){
    document.getElementById("sKey").style.backgroundColor = "#ffdb58";}
  if(event.key =='a'){
    document.getElementById("aKey").style.backgroundColor = "#ffdb58";}
    if(event.key =='d'){
    document.getElementById("dKey").style.backgroundColor = "#ffdb58";}
});
document.addEventListener('keyup',function(event) {

  if(event.key =='w' ){
    document.getElementById("wKey").style.backgroundColor = "#ffdb58";
  food = updateMap(snake, "w", food, width, length)
  var score = snake.length -2;
  document.getElementById("score").innerHTML = "score =" + score;
}
  if(event.key =='s'){
    document.getElementById("sKey").style.backgroundColor = "#ffdb58";
    food =updateMap(snake, "s", food, width, length);
    var score = snake.length -2;
    document.getElementById("score").innerHTML = "score =" + score;
  }
  if(event.key =='a'){
    document.getElementById("aKey").style.backgroundColor = "#ffdb58";
    food = updateMap(snake, "a", food, width, length);
    var score = snake.length -2;
    document.getElementById("score").innerHTML = "score =" + score;
  }
    if(event.key =='d'){
    document.getElementById("dKey").style.backgroundColor = "#ffdb58";
    food = updateMap(snake, "d", food, width, length);
    var score = snake.length -2;

    document.getElementById("score").innerHTML = "score =" + score;
  }
});
