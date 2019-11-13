//the area is 30 by 30
const length = 30;
const width = 30;

var snake = [];
//Test code
var map = makeMap(width, length);
snake = placeSnake(map);
map = seeSnake(map, snake);
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
  snake = moveSnake(snake, "w");
  map = makeMap(width, length);
  map = seeSnake(map, snake);
  var score = snake.length -2;
  document.getElementById("map").innerHTML = borderMap(map);
  document.getElementById("score").innerHTML = "score =" + score;
}
  if(event.key =='s'){
    document.getElementById("sKey").style.backgroundColor = "#ffdb58";
    snake = moveSnake(snake, "s");
    map = makeMap(width, length);
    map = seeSnake(map, snake);
    var score = snake.length -2;
    document.getElementById("map").innerHTML = borderMap(map);
    document.getElementById("score").innerHTML = "score =" + score;
  }
  if(event.key =='a'){
    document.getElementById("aKey").style.backgroundColor = "#ffdb58";
    snake = moveSnake(snake, "a");
    map = makeMap(width, length);
    map = seeSnake(map, snake);
    var score = snake.length -2;
    document.getElementById("map").innerHTML = borderMap(map);
    document.getElementById("score").innerHTML = "score =" + score;
  }
    if(event.key =='d'){
    document.getElementById("dKey").style.backgroundColor = "#ffdb58";
    snake = moveSnake(snake, "d");
    map = makeMap(width, length);
    map = seeSnake(map, snake);
    var score = snake.length -2;
    document.getElementById("map").innerHTML = borderMap(map);
    document.getElementById("score").innerHTML = "score =" + score;
  }
});
