const ghost = document.getElementById("ghost");
const pacman = document.getElementById("pacman");
let count = 0

const eatGhost = (e) => {
  const xposition = e.pageX - e.offsetX;
  const yposition = e.pageY - e.offsetY;
  pacman.style.position = "absolute";
  pacman.style.left = xposition + "px";
  pacman.style.top = yposition + "px";
  e.target.style.visibility = "hidden";
  count++
  if (count %3 === 0) {
    const cherry = document.createElement("img")
    cherry.src = "./images/cherry.png"
    document.getElementById("pacman-container").append(cherry)
    cherry.className = "cherry"
  }
};

ghost.addEventListener("click", eatGhost);

setInterval(function appears() {
  const newGhost = document.createElement("img");
  newGhost.src = "./images/fantasmito.png";
  newGhost.className = "ghost";
  newGhost.addEventListener("click", eatGhost);
  document.getElementById("pacman-container").append(newGhost);
}, 2000);


