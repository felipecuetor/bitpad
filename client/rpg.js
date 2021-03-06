
//measured left to right
var x = 3;

//measured top to bottom
var y = 3;

//direction character is facing 1=up 2=right 3=down 4=left
var dir = 3;

//Menu is visible if 1
var menu = 0;

//Type of menu on view
//1 is a message  2 is a menu 3 is a list of elements 4 is textField  5 is a canvas
var menuType

document.onkeydown = checkKey;

//Handles Key down
function checkKey(e) {
    e = e || window.event;
    if(e.keyCode == '17'){
      checkInteraction();
    }
    else if (e.keyCode == '38') {
      if(menu==1){menuUp();}
      else{keyUpCharacter();}
    }
    else if (e.keyCode == '40') {
      if(menu==1){menuDown();}
      else{keyDownCharacter();}
    }
    else if (e.keyCode == '37') {
      if(menu==1){menuLeft();}
      else{keyLeftCharacter();}
    }
    else if (e.keyCode == '39') {
      if(menu==1){menuLeft();}
      else{keyRightCharacter();}
    }
}

function drawCharacter()
{
  var temp = document.getElementById("elem-"+x+"-"+y);
  if(dir==3){
    temp.setAttribute("src", "./data/textures/character3.png");
  }
  else if(dir==1){
    temp.setAttribute("src", "./data/textures/character1.png");
  }
  else if(dir==2){
    temp.setAttribute("src", "./data/textures/character2.png");
  }
  else if(dir==4){
    temp.setAttribute("src", "./data/textures/character4.png");
  }
}

function drawMapBehindCharacter()
{
  var temp = document.getElementById("elem-"+x+"-"+y);
  temp.setAttribute("src", "./data/textures/empty.png");
}

//Define type of block in each square
var blockTypeMap = Create2DArray(14);
blockTypeMap[9][6] = "door";
blockTypeMap[5][2] = "desk";
blockTypeMap[8][2] = "library";
blockTypeMap[9][2] = "library";
blockTypeMap[11][2] = "library";
blockTypeMap[2][2] = "canvas";
blockTypeMap[7][2] = "bed";
blockTypeMap[3][4] = "table";

function menuInteraction()
{
  if(menuType==1)
  {
    dismissMenu();
  }
}

function checkInteraction()
{
  var blockType = "0";
  if(dir == 1)
  {
    blockType = blockTypeMap[x][y-1];
  }
  else if(dir == 2)
  {
    blockType = blockTypeMap[x+1][y];
  }
  else if(dir == 3)
  {
    blockType = blockTypeMap[x][y+1];
  }
  else if(dir == 4)
  {
    blockType = blockTypeMap[x-1][y];
  }

  if(menu==1)
  {
    menuInteraction();
  }
  else if(blockType == "door")
  {
    menuMessage("I wish the developers would LET ME OUT!!!!");
  }
  else if(blockType == "desk")
  {
    menuMessage("Time to get to work");
  }
  else if(blockType == "library")
  {
    menuMessage("Dont see any good books");
  }
  else if(blockType == "canvas")
  {
    menuMessage("I wonder if I have any talent");
  }
  else if(blockType == "bed")
  {
    menuMessage("Im not sleepy");
  }
  else if(blockType == "table")
  {
    menuMessage("Why is this table here?");
  }
}

function menuMessage(message)
{
  var temp = document.getElementById("rpgMenuContainer");
  temp.setAttribute("style","z-index: 5;")
  temp = document.getElementById("rpgMenuMessage").innerHTML = message;
  menu = 1;
  menuType=1;
}

function menuUp()
{

}
function menuDown()
{

}
function menuLeft()
{

}
function menuRight()
{

}

function dismissMenu()
{
  menu = 0;
  menuType=0;
  var temp = document.getElementById("rpgMenuMessage").innerHTML = "";

 document.getElementById("rpgMenuContainer").setAttribute("style","z-index:5;");



}

//Action Characer on Arrow key
function keyUpCharacter()
{
  dir = 1;
  console.log("KeyUp");
    // up arrow
    if(checkCollisionUp()==0){
      drawMapBehindCharacter();
      y = y - 1;
  }
  drawCharacter();

}
function keyDownCharacter()
{
  dir = 3;
    console.log("KeyDown");
    // down arrow
    if(checkCollisionDown()==0){
      drawMapBehindCharacter();
      y = y + 1;
      console.log(x+" "+y);
  }
  drawCharacter();

}
function keyLeftCharacter()
{
  dir = 4;
  console.log("KeyLeft");
   // left arrow
   if(checkCollisionLeft()==0){
      drawMapBehindCharacter();
     x = x - 1;
     console.log(x+" "+y);
   }
   drawCharacter();

}
function keyRightCharacter()
{
  dir = 2;
  console.log("KeyRight");
   // right arrow
   if(checkCollisionRight()==0){
     drawMapBehindCharacter();
     x = x + 1;
     console.log(x+" "+y);
   }
   drawCharacter();
}



//Methods to check collision or collision interactions
function checkCollisionUp()
{
  console.log(blocks[x][y-1]);
  return temp = blocks[x][y-1];
}
function checkCollisionDown()
{
  console.log(blocks[x][y+1]);
  return temp = blocks[x][y+1];
}
function checkCollisionRight()
{
  console.log(blocks[x+1][y]);
  return temp = blocks[x+1][y];
}
function checkCollisionLeft()
{
  console.log(blocks[x-1][y]);
  return temp = blocks[x-1][y];
}

//Define limits of the character ie outer walls there are no pixels here
function Create2DArray(rows) {
  var arr = [];

  for (var i=0;i<rows;i++) {
     arr[i] = [];
  }

  return arr;
}
var blocks = Create2DArray(14);
empty();


function empty(){
  var contx = 0;
  var conty = 0;
  while(contx<14)
  {
    while(conty<8)
    {
      console.log("init "+contx+" "+conty);
      blocks[contx][conty]=0;
      conty=conty+1;
    }
    conty = 0;
    contx=contx+1;
  }
}


blocks[0][0] = 1;
blocks[0][1] = 1;
blocks[0][2] = 1;
blocks[0][3] = 1;
blocks[0][4] = 1;
blocks[0][5] = 1;
blocks[0][6] = 1;
blocks[0][7] = 1;

blocks[13][0] = 1;
blocks[13][1] = 1;
blocks[13][2] = 1;
blocks[13][3] = 1;
blocks[13][4] = 1;
blocks[13][5] = 1;
blocks[13][6] = 1;
blocks[13][7] = 1;

blocks[1][0] = 1;
blocks[2][0] = 1;
blocks[3][0] = 1;
blocks[4][0] = 1;
blocks[5][0] = 1;
blocks[6][0] = 1;
blocks[7][0] = 1;
blocks[8][0] = 1;
blocks[9][0] = 1;
blocks[10][0] = 1;
blocks[11][0] = 1;
blocks[12][0] = 1;

blocks[1][7] = 1;
blocks[2][7] = 1;
blocks[3][7] = 1;
blocks[4][7] = 1;
blocks[5][7] = 1;
blocks[6][7] = 1;
blocks[7][7] = 1;
blocks[8][7] = 1;
blocks[9][7] = 1;
blocks[10][7] = 1;
blocks[11][7] = 1;
blocks[12][7] = 1;

//walls
blocks[1][6] = 1;
blocks[2][6] = 1;
blocks[3][6] = 1;
blocks[4][6] = 1;
blocks[5][6] = 1;
blocks[6][6] = 1;
blocks[7][6] = 1;
blocks[8][6] = 1;
blocks[9][6] = 1;
blocks[10][6] = 1;
blocks[11][6] = 1;
blocks[12][6] = 1;

blocks[1][1] = 1;
blocks[2][1] = 1;
blocks[3][1] = 1;
blocks[4][1] = 1;
blocks[5][1] = 1;
blocks[6][1] = 1;
blocks[7][1] = 1;
blocks[8][1] = 1;
blocks[9][1] = 1;
blocks[10][1] = 1;
blocks[11][1] = 1;
blocks[12][1] = 1;

blocks[1][1] = 1;
blocks[1][2] = 1;
blocks[1][3] = 1;
blocks[1][4] = 1;
blocks[1][5] = 1;
blocks[1][6] = 1;
blocks[1][7] = 1;

blocks[12][0] = 1;
blocks[12][1] = 1;
blocks[12][2] = 1;
blocks[12][3] = 1;
blocks[12][4] = 1;
blocks[12][5] = 1;
blocks[12][6] = 1;
blocks[12][7] = 1;
//Define elements with collision
blocks[3][4] = 1;
blocks[5][2] = 1;
blocks[7][2] = 1;
blocks[8][2] = 1;
blocks[9][2] = 1;
blocks[11][2] = 1;
blocks[10][5] = 1;
blocks[2][2] = 1;
