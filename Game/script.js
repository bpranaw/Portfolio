var cat = document.getElementById("Cat");
var cat_image = document.getElementById("cat_image");
var obstacle = document.getElementById("Obstacle");
var counter = 0;

function remove_animation() {
  cat.classList.remove("animate");
  cat_image.src = "Sprites/standing.png";
}

function jump() {
  if (cat.classList.contains("animate")) return;

  cat_image.src = "Sprites/jumping.png";

  cat.classList.add("animate");
  setTimeout(remove_animation, 500);
}

// Basically The Game Controller
// Checks the Score
var check = setInterval(function () {
  var cat_top = parseInt(window.getComputedStyle(cat).getPropertyValue("top"));
  var obstacle_left = parseInt(
    window.getComputedStyle(obstacle).getPropertyValue("left")
  );

  //Score Checking
  //Position directly under the cat and where the cat hasn't jumped
  if (obstacle_left < 36 && obstacle_left > 0 && cat_top >= 267) {
    obstacle.style.animation = "none";

    alert("Game Over! Your score was: " + Math.floor(counter / 10));
    counter = 0;

    obstacle.style.animation = "obstacle_movement 1s infinite linear";
  } else {
    counter++;
    document.getElementById("score").innerHTML = Math.floor(counter / 10);
  }
}, 10);
