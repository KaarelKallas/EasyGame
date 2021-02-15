var player = document.getElementById("player");
var object = document.getElementById("object");
object.classList.add("obAn1");

document.getElementById('reset').addEventListener('click', resetFunction)
function resetFunction() {
    localStorage.highScore = 0
}
function jump() {
    if (player.classList != "animate") {
        player.classList.add("animate");
    }
    setTimeout(function () {
        player.classList.remove("animate");
    }, 500);
}

var checkDead = setInterval(function () {
    var playerBottom = parseInt(window.getComputedStyle(player).getPropertyValue("bottom"));
    var objectRight = parseInt(window.getComputedStyle(object).getPropertyValue("right"));
    var scoreInt = document.getElementById("scoreInt").innerHTML;
    var score = 0


    if (objectRight < 80 && objectRight > 0 && playerBottom <= 10) {
        var ded = true
        var highScore = document.getElementById("hs").innerHTML;

        if (parseInt(highScore) < parseInt(scoreInt)) {
            localStorage.highScore = parseInt(scoreInt)
        }

        document.getElementById("scoreInt").innerHTML = 0
        object.classList.remove("obAn2");
        object.classList.remove("obAn3");
        object.classList.remove("obAn4");
        object.classList.remove("obAn5");
        object.classList.add("obAn1");
    }
    score++
    if (ded != true) {
        document.getElementById("scoreInt").innerHTML++

    }


    if (scoreInt > 1000 && objectRight < 10) {
        object.classList.remove("obAn1");
        object.classList.add("obAn2");
    }
    if (scoreInt > 2000 && objectRight < 10) {
        object.classList.remove("obAn2");
        object.classList.add("obAn3");
    }
    if (scoreInt > 4000 && objectRight < 10) {
        object.classList.remove("obAn3");
        object.classList.add("obAn4");
    }
    if (scoreInt > 6000 && objectRight < 10) {
        object.classList.remove("obAn4");
        object.classList.add("obAn5");
    }


    document.getElementById("hs").innerHTML = localStorage.highScore
}, 10);
