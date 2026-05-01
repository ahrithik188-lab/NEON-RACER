let car = document.getElementById("car");
let game = document.getElementById("game");
let scoreText = document.getElementById("score");
let gameOverText = document.getElementById("gameOver");
let restartBtn = document.getElementById("restart");

let position = 120;
let score = 0;
let speed = 3;
let gameRunning = true;

// MOVE CAR
document.addEventListener("keydown", function(e) {

```
if (!gameRunning) return;

if (e.key === "a" || e.key === "ArrowLeft") position -= 20;
if (e.key === "d" || e.key === "ArrowRight") position += 20;

if (position < 0) position = 0;
if (position > 240) position = 240;

car.style.left = position + "px";
```

});

// CREATE ENEMY
function createEnemy() {
if (!gameRunning) return;

```
let enemy = document.createElement("img");
enemy.src = "https://cdn-icons-png.flaticon.com/512/743/743007.png";
enemy.classList.add("enemy");

let x = Math.floor(Math.random() * 240);
enemy.style.left = x + "px";

game.appendChild(enemy);

moveEnemy(enemy);
```

}

// MOVE ENEMY
function moveEnemy(enemy) {

```
let top = -80;

let interval = setInterval(() => {

    if (!gameRunning) {
        clearInterval(interval);
        return;
    }

    top += speed;
    enemy.style.top = top + "px";

    // COLLISION
    let carRect = car.getBoundingClientRect();
    let enemyRect = enemy.getBoundingClientRect();

    if (
        carRect.left < enemyRect.right &&
        carRect.right > enemyRect.left &&
        carRect.top < enemyRect.bottom &&
        carRect.bottom > enemyRect.top
    ) {
        gameOver();
    }

    if (top > 500) {
        enemy.remove();
        clearInterval(interval);
    }

}, 20);
```

}

// SPAWN TRAFFIC
setInterval(() => {
if (gameRunning) createEnemy();
}, 1500);

// SCORE SYSTEM
setInterval(() => {
if (gameRunning) {
score++;
scoreText.innerText = "Score: " + score;

```
    if (score % 10 === 0) speed += 0.5;
}
```

}, 500);

// GAME OVER
function gameOver() {
gameRunning = false;
gameOverText.style.display = "block";
restartBtn.style.display = "block";
}

// RESTART
function restartGame() {
location.reload();
}
