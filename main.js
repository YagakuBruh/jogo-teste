var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var x = canvas.width/2;
var y = canvas.height/2;
var squareSize = 50;

function drawSquare() {
  ctx.fillStyle = "#0095DD";
  ctx.fillRect(x, y, squareSize, squareSize);
}

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function moveSquare(dx, dy) {
  x += dx;
  y += dy;
}

function handleKeyDown(event) {
  switch(event.keyCode) {
    case 37: // left arrow
      moveSquare(-10, 0);
      break;
    case 38: // up arrow
      moveSquare(0, -10);
      break;
    case 39: // right arrow
      moveSquare(10, 0);
      break;
    case 40: // down arrow
      moveSquare(0, 10);
      break;
  }
  clearCanvas();
  drawSquare();
}

drawSquare();
document.addEventListener("keydown", handleKeyDown);

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var x = canvas.width/2;
var y = canvas.height/2;
var squareSize = 50;

function drawSquare() {
  ctx.fillStyle = "#0095DD";
  ctx.fillRect(x, y, squareSize, squareSize);
}

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function moveSquare(dx, dy) {
  x += dx;
  y += dy;
}

function handleKeyDown(event) {
  switch(event.keyCode) {
    case 37: // left arrow
      moveSquare(-10, 0);
      break;
    case 38: // up arrow
      moveSquare(0, -10);
      break;
    case 39: // right arrow
      moveSquare(10, 0);
      break;
    case 40: // down arrow
      moveSquare(0, 10);
      break;
  }
  clearCanvas();
  drawSquare();
}

drawSquare();
document.addEventListener("keydown", handleKeyDown);

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var playerX = canvas.width/2;
var playerY = canvas.height/2;
var playerSize = 50;

var npcX = canvas.width/4;
var npcY = canvas.height/4;
var npcSize = 50;

function drawPlayer() {
  ctx.fillStyle = "#0095DD";
  ctx.fillRect(playerX, playerY, playerSize, playerSize);
}

function drawNPC() {
  ctx.strokeStyle = "#FF0000";
  ctx.strokeRect(npcX, npcY, npcSize, npcSize);
}

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function moveNPC() {
  var directions = ["up", "down", "left", "right"];
  var direction = directions[Math.floor(Math.random() * directions.length)];
  switch(direction) {
    case "up":
      npcY -= npcSize;
      break;
    case "down":
      npcY += npcSize;
      break;
    case "left":
      npcX -= npcSize;
      break;
    case "right":
      npcX += npcSize;
      break;
  }
}

function handleKeyDown(event) {
  switch(event.keyCode) {
    case 37: // left arrow
      playerX -= 10;
      break;
    case 38: // up arrow
      playerY -= 10;
      break;
    case 39: // right arrow
      playerX += 10;
      break;
    case 40: // down arrow
      playerY += 10;
  Para adicionar NPCs que andam aleatoriamente pelo mapa, é necessário criar um novo código JavaScript que defina a lógica dos NPCs e sua movimentação. A lógica dos NPCs pode ser baseada em algoritmos de movimentação aleatória, como o algoritmo de caminhada aleatória.

O algoritmo de caminhada aleatória é um algoritmo simples que faz com que um NPC se mova aleatoriamente pelo mapa. O NPC escolhe uma direção aleatória e se move nessa direção por um determinado número de passos antes de escolher uma nova direção aleatória.

Aqui está um exemplo de como adicionar NPCs que andam aleatoriamente pelo mapa:

```javascript
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var playerX = canvas.width/2;
var playerY = canvas.height/2;
var playerSize = 50;

var npcX = canvas.width/4;
var npcY = canvas.height/4;
var npcSize = 50;

function drawPlayer() {
  ctx.fillStyle = "#0095DD";
  ctx.fillRect(playerX, playerY, playerSize, playerSize);
}

function drawNPC() {
  ctx.strokeStyle = "#FF0000";
  ctx.strokeRect(npcX, npcY, npcSize, npcSize);
}

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function moveNPC() {
  var directions = ["up", "down", "left", "right"];
  var direction = directions[Math.floor(Math.random() * directions.length)];
  switch(direction) {
    case "up":
      npcY -= npcSize;
      break;
    case "down":
      npcY += npcSize;
      break;
    case "left":
      npcX -= npcSize;
      break;
    case "right":
      npcX += npcSize;
      break;
  }
}

function handleKeyDown(event) {
  switch(event.keyCode) {
    case 37: // left arrow
      playerX -= 10;
      break;
    case 38: // up arrow
      playerY -= 10;
      break;
    case 39: // right arrow
      playerX += 10;
      break;
    case 40: // down arrow
      playerY += 10;
  Para adicionar NPCs que andam aleatoriamente pelo mapa, é necessário criar um novo código JavaScript que defina a lógica dos NPCs e sua movimentação. A lógica dos NPCs pode ser baseada em algoritmos de movimentação aleatória, como o algoritmo de caminhada aleatória.

O algoritmo de caminhada aleatória é um algoritmo simples que faz com que um NPC se mova aleatoriamente pelo mapa. O NPC escolhe uma direção aleatória e se move nessa direção por um determinado número de passos antes de escolher uma nova direção aleatória.

Aqui está um exemplo de como adicionar NPCs que andam aleatoriamente pelo mapa:

```javascript
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var playerX = canvas.width/2;
var playerY = canvas.height/2;
var playerSize = 50;

var npcX = canvas.width/4;
var npcY = canvas.height/4;
var npcSize = 50;

function drawPlayer() {
  ctx.fillStyle = "#0095DD";
  ctx.fillRect(playerX, playerY, playerSize, playerSize);
}

function drawNPC() {
  ctx.strokeStyle = "#FF0000";
  ctx.strokeRect(npcX, npcY, npcSize, npcSize);
}

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function moveNPC() {
  var directions = ["up", "down", "left", "right"];
  var direction = directions[Math.floor(Math.random() * directions.length)];
  switch(direction) {
    case "up":
      npcY -= npcSize;
      break;
    case "down":
      npcY += npcSize;
      break;
    case "left":
      npcX -= npcSize;
      break;
    case "right":
      npcX += npcSize;
      break;
  }
}

function handleKeyDown(event) {
  switch(event.keyCode) {
    case 37: // left arrow
      playerX -= 10;
      break;
    case 38: // up arrow
      playerY -= 10;
      break;
    case 39: // right arrow
      playerX += 10;
      break;
    case 40: // down arrow
      playerY += 10;
