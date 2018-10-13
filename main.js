// App Section
let circleLoop;
let circle;

function selectAllElement(selector) {
    let allElem = document.querySelectorAll(selector);
    return allElem;
}

function selectElement(selector) {
    let elem = document.querySelector(selector);
    return elem;
}

function random(limit) {
    let random = (Math.random() * limit).toFixed(0);
    return random;
}

function randomColor() {
    let colorR = random(255);
    let colorG = random(255);
    let colorB = random(255);
    let color = `rgb(${colorR},${colorG},${colorB})`;
    return color;
}

function circleCounter(selector) {
    let circleCount = document.querySelectorAll(selector);
    return circleCount.length;
}

function circleCreator(color) {
    let count = random(5);
    for (let i = 0; i < count; i++) {
        let circle = document.createElement("div");
        circle.classList.add("circle" + color);
        circle.style.background = color;
        document.body.appendChild(circle);
    }
}

function circleRandomMovement(selector) {
    circleLoop = setInterval(function () {
        circle = selectAllElement(selector);
        circle.forEach(function (circle) {
            circle.style.left = random(window.innerWidth) + "px";
            circle.style.top = random(window.innerHeight - 100) + "px";
        })
    }, 1000);
}

function randomizer(color, selector) {
    createBoss(color);
    let randomizerLoop = setInterval(function () {
        circleCreator(color);
        circleRandomMovement(selector);
        if ((circleCounter(selector) + circleCounter(selector + "come")) > 20) {
            clearInterval(randomizerLoop)
        }
    }, 1000)
    gameAction(color, selector);
}

function createBoss(color) {
    let circle = document.createElement("div");
    circle.classList.add(color + "Boss");
    circle.style.background = color;
    document.body.appendChild(circle);
    circle.style.left = random((window.innerWidth - 100)) + "px";
    circle.style.top = random((window.innerHeight - 200)) + "px";
    circle.innerHTML = "20";
}

function gameAction(color, selector) {
    selectElement("." + color + "Boss").addEventListener("click", function () {
        let bossX = this.getBoundingClientRect().x + 50;
        let bossY = this.getBoundingClientRect().y + 50;
        if ((circleCounter(selector) + circleCounter(selector + "come")) > 20) {
            this.innerHTML = "DONE"
        } else {
            this.innerHTML = `${20-(circleCounter(selector)+circleCounter(selector+"come"))}`;
        }
        selectAllElement(selector).forEach(function (circles) {
            circles.style.left = bossX + "px";
            circles.style.top = bossY + "px";
            circles.classList.add(selector.slice(1) + "come");
            circles.classList.remove(selector.slice(1));
        })
        selectAllElement(selector + "come").forEach(function (comeCircles) {
            setTimeout(function () {
                comeCircles.style.display = "none"
            }, 1000)
        })
    })
}
$("#colorPicker").on("keydown", function (event) {
    let color = $("#colorPicker").val();
    if (event.which == 13) {
        randomizer(color, ".circle" + color);
        $("#colorPicker").val("")
    }
})
$(".overlay").click(function () {
    $(this).remove();
    $("#colorPicker").focus();
})