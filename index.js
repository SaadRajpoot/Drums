var NumOfDrums = document.querySelectorAll(".drum").length;



for (var i = 0; i < NumOfDrums; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function() {
    var exp = this.innerHTML;
    handleEvent(exp);
    buttonAnimation(exp);
  });

}
document.addEventListener("keypress", function(event) {
  handleEvent(event.key);
  buttonAnimation(event.key);
});

function handleEvent(exp) {
  var audio;

  switch (exp) {
    case "w":
      audio = new Audio("sounds/tom-1.mp3");
      break;
    case "a":
      audio = new Audio("sounds/tom-2.mp3");
      break;
    case "s":
      audio = new Audio("sounds/tom-3.mp3");
      break;
    case "d":
      audio = new Audio("sounds/tom-4.mp3");
      break;
    case "j":
      audio = new Audio("sounds/snare.mp3");
      break;
    case "k":
      audio = new Audio("sounds/crash.mp3");
      break;
    case "l":
      audio = new Audio("sounds/kick-bass.mp3");
      break;
    default:
      console.log("Wrong button pressed.");
      break;

  }

  audio.play();
}

function buttonAnimation(key) {
  var button= document.querySelector("." + key);
button.classList.add("pressed");
  setTimeout(function() {
    button.classList.remove("pressed");
  },100);

}
