const ghost = document.getElementById("ghost");
const pacman = document.getElementById("pacman");
let count = 0;

const movePacman = (e) => {
  const xposition = e.pageX - e.offsetX;
  const yposition = e.pageY - e.offsetY;
  pacman.style.position = "absolute";
  pacman.style.left = xposition + "px";
  pacman.style.top = yposition + "px";
  e.target.style.visibility = "hidden";
};

const eatGhost = (e) => {
  movePacman(e);
  count++;
  if (count % 3 === 0) {
    const cherry = document.createElement("img");
    cherry.src = "./images/cherry.png";
    cherry.addEventListener("click", (e) => {
      movePacman(e);
      addPoints(500);
    });
    document.getElementById("pacman-container").append(cherry);
    cherry.className = "cherry";
  }
  addPoints(100);
};

ghost.addEventListener("click", eatGhost);

const interval = setInterval(function appears() {
  const newGhost = document.createElement("img");
  newGhost.src = "./images/fantasmito.png";
  newGhost.className = "ghost";
  newGhost.addEventListener("click", eatGhost);
  document.getElementById("pacman-container").append(newGhost);
}, 2000);

function addPoints(points) {
  const counter = document.getElementById("counter");
  const counterNumber = parseInt(counter.textContent);
  const newPoints = counterNumber + points;
  counter.textContent = String(newPoints).padStart(4, "0");

  if (newPoints >= 5000) {
    clearInterval(interval);
    const gameOver = document.createElement("h2");
    gameOver.textContent = "Game Over";
    gameOver.className = "game-over";
    document.body.appendChild(gameOver);
  }
}
