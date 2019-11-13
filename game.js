/* makeMap(xVal, yVal)
makes an arry of array in the format of y number of arrays x long. each one should
contain a string with just a space in it.
@param xVal {int} the width of the map
@param yVal {int} the height of the map
@return a 2d array of y length of x length items all with spaces inside
*/
function makeMap(xVal, yVal){
 var retArray = [];
  for (var i = 0; i < yVal; i++){
   var line = [];
    for (var j =0; j < xVal; j++){
   line.push(" ");
  }
  retArray.push(line);
 }
return retArray;
}
/*
seeSnake(map, snake)
make a drqing of the snake on the Map
the snake is represented by a large O for the head, and small o for the body
@param array {map} 2d array
@param {snake} array of coordinates
@return map
*/
function seeSnake(map, snake){
// put the head on the map
  map[snake[0].y][snake[0].x] = "O";
// make the rest of the body
  for (var i = 1; i < snake.length; i++) {
    map[snake[i].y][snake[i].x] = "o";
  }
  return map;
}

/* implode(arr)
@param arr {array} an array to be converted to a string
@return {string} a string of the array
*/
function implode(array){
  var retString = "";
  var index = 0;
  while (index < array.length){
    retString= retString +array[index]
    index++
  }
  return retString;

}

/* borderMap(text)
a function to take a 2 dimensional array and turn it into a single string of
text, making each inner array a line of text. Also decorates with a text border
@param text {array} a 2d array filled with strings.
@param end{string} what to use as a line ending
@return {string} a string as described above
*/
function borderMap(text){
  var retStr = "+";
  var width = text[0].length;
  for (var i = 0; i < width; i++) {
    retStr += "-";
  }
  retStr += "+ <br>";
  for (var i = 0; i < text.length; i++) {
    retStr +="|" + implode(text[i]) + "|<br>";
}
  retStr += "+";
  for (var i = 0; i < width; i++) {
    retStr += "-";
  }
  retStr += "+";
  return retStr;
}

function placeFood(map, snake, food="*"){
  var width = map[0].length;
  var height = map.length;
  var place = false;

  while (!place) {
    var coordTst = ranCoord(width, height);
    var matched = false;
    for (obj in snake){

        if(coordTst.x == snake[obj].x && coordTst.y == snake[obj].y){
        matched = true;
      }
    }
    if (!matched){
      map[coordTst.y][coordTst.x] = food;
      return map;
    }
  }
}

function ranCoord(xVal, yVal){
  var retObj = {};
  retObj.x = Math.floor(Math.random() * xVal);
  retObj.y = Math.floor(Math.random() * yVal);
return retObj;
}



/* neighborCoord(width, height, coord)
returns a coordinate object next to coord constrained by thr width and height, only
returns cardinal neighbors
@param coord {obj} object with x & y keys
@param width {int} max value for the x of return object
@param height {int} max value for the y of the return objects
*/

function neighborCoord(coord, width, height){
  // want to change x or y
  // want to be 0 or greater
  // want to be less than width or height
  var xUse = false
  if (Math.random() < .5) { xUse = true; } // determine if we are using x or y
  if (xUse){
    var left = false;
    if(Math.random() < .5 && coord.x > 0 ) {left = true;}
    if(coord.x < width -2) {left = true;}
    if(left){ return {x: coord.x - 1, y: coord.y};}
    else { return {x: coord.x + 1, y: coord.y};}
    }
    else{
      var up = false;
      if(Math.random() < .5 && coord.y > 0 ) {up = true;}
      if(coord.y < height -2) {up = true;}
      if(up){return {x: coord.x , y: coord.y -1};}
      else {return {x: coord.x, y: coord.y +1};}
    }
  }




/* placeSnake(map)
a function to place a snake on a map, A snake is an array of locations. It does
not actually reside on the map,so this function simply maes an array of two
side by side locations.
@param map {array} 2d array of text
@return {array} an array of objects containing coordinates.
*/
function placeSnake(map){
  var width = map[0].length;
  var height = map.length;
  var snake = [];
  snake[0] =ranCoord(width, height);
  snake[1] = neighborCoord(snake[0], width, height);
  return snake;
}

/* moveSnake(snake, dir, food=false)
takes a snake array and adds a new item to the front of it in direction dir. (n, s, e w)
removes last item from the snake array as well, if food is equal to false
does the remove before the addition
@param snake {array} an array represeting a snake
@param dir {string} the string "w", "a", "s", or "d"
@param food {bool} if there is a food
@return the new location for the snake
*/
function moveSnake(snake, dir, food=false){

if (dir == "w"){
  snake.unshift({x:snake[0].x, y: snake[0].y-1})
}
if (dir == "s"){
  snake.unshift({x:snake[0].x , y: snake[0].y +1})
}
if (dir == "a"){
    snake.unshift({x:snake[0].x -1, y: snake[0].y})
}
if (dir == "d"){
      snake.unshift({x:snake[0].x +1, y: snake[0].y})
}
if (!food){
  snake.pop();
 }
 return snake;
}
