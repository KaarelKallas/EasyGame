var player = document.getElementById("player");
var object = document.getElementById("object");
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
    if (objectRight < 80 && objectRight > 0 && playerBottom <= 10) {

        alert("u lose")

    }
}, 10);
