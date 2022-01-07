const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");

function jump() {
  if (dino.classList != "jump") {
    dino.classList.add("jump");

    setTimeout(function () {
      dino.classList.remove("jump");
    }, 300);
  }
}

let isAlive = setInterval(function () {
  // ottiene la posizione Y corrente di dino
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));

  // ottiene la posizione attuale del cactus X
  let cactusLeft = parseInt(
    window.getComputedStyle(cactus).getPropertyValue("left")
  );

  // rileva la collisione
  if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
    // collisione
    alert("Game Over!");
  }
}, 10);

document.addEventListener("keydown", function (event) {
  jump();
});