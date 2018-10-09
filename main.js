// let body = document.addEventListener("click", function () {
//     let posX = event.clientX;
//     let posY = event.clientY;
//     let circle = document.createElement("div");
//     document.body.appendChild(circle);
//     circle.classList.add("circle")
//     circle.style.left = posX + "px";
//     circle.style.top = posY + "px";
//     circle.style.background = randomColor();
//     return circle;
// })
// function randomColor() {
//     let colorR = (Math.random() * 255).toFixed(0);
//     let colorG = (Math.random() * 255).toFixed(0);
//     let colorB = (Math.random() * 255).toFixed(0);
//     let randomColor = `rgb(${colorR},${colorG},${colorB})`;
//     return randomColor;
// }
// document.body.addEventListener("click", function () {
//     target(event);
// })
// function target(event) {
//     event.target.parentElement.removeChild(event.target);
//     event.stopPropagation();
// }



// let randomPos = document.querySelectorAll(".randomPos");
// setInterval(function () {
//     randomPos.forEach(function (randomPos, index) {
//         let randomX = (Math.random() * window.innerWidth).toFixed(0);
//         let randomY = (Math.random() * window.innerHeight).toFixed(0);
//         randomPos.style.left = randomX + "px";
//         randomPos.style.top = randomY + "px";
//         randomPos.style.background = randomColor();
//     })
// }, 500)


function selectElement(selector) {
    let elem = document.querySelector(selector);
    return elem;
}
function inputEnter() {
    let list = document.createElement("li");
    let inputValue = selectElement("#my-input").value;
    list.innerHTML = inputValue;
    list.classList.add("list-group-item")
    selectElement("ul").appendChild(list);
    selectElement("#my-input").value = "";
}

selectElement(".btn").addEventListener("click", inputEnter);

selectElement("#my-input").addEventListener("keydown", function (y) {
    let x = y.which;
    if (x == 13) {
        inputEnter();
    }
})
// function enter(event) {
// }