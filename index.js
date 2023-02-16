let numberOfDrums = document.querySelectorAll(".Drum").length;

for (let i = 0; i < numberOfDrums; i++) {
  document.querySelectorAll(".Drum")[i].addEventListener("click", function(){
    handleClick(this.innerHTML);
    buttonAnimation(this.innerHTML);
  });
}

document.addEventListener("keydown", function(event){
    handleClick(event.key); 
    buttonAnimation(event.key);
});

function handleClick(key) {
  let sound;
  switch (key) {
    case "w":
      sound = new Audio("sounds/tom-1.mp3");
      sound.play();
      break;
    case "a":
      sound = new Audio("sounds/tom-2.mp3");
      sound.play();
      break;
    case "s":
      sound = new Audio("sounds/tom-3.mp3");
      sound.play();
      break;
    case "d":
      sound = new Audio("sounds/tom-4.mp3");
      sound.play();
      break;
    case "j":
      sound = new Audio("sounds/kick-bass.mp3");
      sound.play();
      break;
    case "k":
      sound = new Audio("sounds/crash.mp3");
      sound.play();
      break;
    case "l":
      sound = new Audio("sounds/snare.mp3");
      sound.play();
      break;
  }
}

function buttonAnimation(currentKey){

    let activeButton = document.querySelector("."+currentKey);
    
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
}
