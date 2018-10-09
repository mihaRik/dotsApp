let body = document.addEventListener("click", function () {
    let posX = event.clientX;
    let posY = event.clientY;
    let circle = document.createElement("div");
    let colorR = (Math.random() * 255).toFixed(0);
    let colorG = (Math.random() * 255).toFixed(0);
    let colorB = (Math.random() * 255).toFixed(0);
    document.body.appendChild(circle);
    circle.classList.add("circle")
    circle.style.left = posX + "px";
    circle.style.top = posY + "px";
    circle.style.background = `rgba(${colorR},${colorG},${colorB},.8)`;
    return circle;
})
document.body.addEventListener("click", function () {
    target(event);
})
function target(event) {
    event.target.parentElement.removeChild(event.target);
    event.stopPropagation();
}

let randomPos = document.querySelectorAll(".randomPos");
setInterval(function () {
    let randomX = (Math.random() * 1000).toFixed(0);
    let randomY = (Math.random() * 500).toFixed(0);
    randomPos.forEach(function (randomPos, index) {
        randomPos.style.left = randomX + "px";
        randomPos.style.top = randomY + "px";
    })
}, 500)