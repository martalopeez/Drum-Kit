// .drum para especificar que queremos recorrer todos los botones que tienen la clase drum
// el listener es la función handleClick a la que llamamos sin paréntesis (con () se ejecutaría nada más añadir el evento)

// Detecting Button Press
for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function() {
    makeSound(this.innerHTML);
  });
}

// Detecting Key Press
document.addEventListener("keypress", function(event) {
  makeSound(event.key);
})

function makeSound(key) {
  switch (key) {
    case "w":
      new Audio('sounds/tom-1.mp3').play();
      break;
    case "a":
      new Audio("sounds/tom-2.mp3").play();
      break;
    case "s":
      new Audio("sounds/tom-3.mp3").play();
      break;
    case "d":
      new Audio("sounds/tom-4.mp3").play();
      break;
    case "j":
      new Audio("sounds/snare.mp3").play();
      break;
    case "k":
      new Audio("sounds/crash.mp3").play();
      break;
    case "l":
      new Audio("sounds/kick-bass.mp3").play();
      break;
    default: console.log(this.innerHTML);
  }
}

// Sin función anónima:
// function handleClick() {
//   new Audio("sounds/tom-1.mp3").play();
// }
