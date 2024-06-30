const ghost = document.getElementById("ghost")
const pacman = document.getElementById("pacman")

const eatGhost = (e) => {
    const xposition = e.pageX - e.offsetX
    const yposition = e.pageY - e.offsetY
    pacman.style.position = "absolute"
    pacman.style.left = xposition + "px"
    pacman.style.top = yposition + "px"
    // e.target.parentNode.removeChild(e.target)
    e.target.style.visibility = "hidden"
}

ghost.addEventListener("click", eatGhost)

 setInterval(function appears() {
    const newGhost = document.createElement("img")
    newGhost.src = "./images/fantasmito.png"
    newGhost.className = "ghost"
    newGhost.addEventListener("click", eatGhost)
    document.getElementById("pacman-container").append(newGhost)
 }, 2000)