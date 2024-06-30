const ghost = document.getElementById("ghost")
const pacman = document.getElementById("pacman")

ghost.addEventListener("click", (e) => {
    const xposition = e.pageX - e.offsetX
    const yposition = e.pageY - e.offsetY
    pacman.style.position = "absolute"
    pacman.style.left = xposition + "px"
    pacman.style.top = yposition + "px"
    ghost.parentNode.removeChild(e.target);

})