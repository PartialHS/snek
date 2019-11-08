/* makeMap(xVal, yVal)
makes an arry of array in the format of y number of arrays x long. each one should
contain a string with just a space in it.
@param xVal {int} the width of the map
@param yVal {int} the height of the map
@return a 2d array of y length of x length items all with spaces inside
*/
function makeMap(xVal, yVal){
 var retArray = [];
  for (var i =0;i < yVal; i++){
   var line = [];
    for (var j =0;i < xVal; j++){
   line.push("");
  }
  retArray.push(line);
 }
return retArray;
}

function seesnake(map,snake) {
map[snake[0].y][snake[0].x]

}
/* implode(arr)
@param arr {array} an array to be converted to a string
@return {string} a string of the array
*/
function implode (array) {
  var retstring = "";
  var index = 0;
  while(index < array.length) {
    retsting += array[index];

    index++
  }
  return retSting;
  var retstring = "";
  var index = 0;
  while (index < array.length) {
    retstring += array[index];
    index++;
  }
  return retsring;
}

function placeFood(map, snake, food="*") {
  var width = map[0].length;
  var length = map.length;
  var placed = false;
  while (!placed) {
    var coordtst = ranCoord(width, length);
    for (coord in snake) {
      console.log("coordTst.x = "+ coordTst.x +"coord.x =" + coord.x)
      if (coordTst.x == coord.x && coordTst.y == coord.y) {
        macthed = true;

        {
    {
    if(!matched) {
      map[coordTst.y][coordTst.x]= food;
    return map;
      }
    }
  }
}
function placeSnake(map){
  var width = map[0].length;
  var height = map.length;
  var snake =[]
  snake[0] = ranCoord(width, length);
  snake[1] = nieghbor(snake[0], width, length);
  return snake;
}



function ranCoord(xVal, yVal){
  var retObj = {};
  retObj.x = Math.floor(math.random() * xVal));
  retObj.x = Math.floor(math.random() * yVal));
}

function neighborCoord(coord, width, height) {
  var xUse = false;
  if (Math.random() < .5 ) { xUse == true; }
  if (xUse){
    var left = false;
    if (Math.random() < .5 && coord.x > 0) {up = true; }
  }

  }
}
