let numDrums = document.querySelectorAll(".drum").length;


// button press

for (var i = 0; i < numDrums; i++) {

    document.getElementsByClassName("drum")[i].addEventListener("click", function(event) {

        // this keyword holds the button which is being clicked;
        var button = this.innerHTML;
        makeSound(button);
        buttonAnimation(button);
    });
}


// keyboard press

// look closely to see that how we have connected keyboard with  document
// document is the parent of all HTML , so if anything happens on index page then document will consider it as an event;

document.addEventListener("keydown", function(event) {

    // check console.log(event) to see the details of event
    var button = event.key;
    makeSound(button);
    buttonAnimation(button);
});

function buttonAnimation(button) {

    document.querySelector("." + button).classList.add("pressed");
    setTimeout(function() {
        document.querySelector("." + button).classList.remove("pressed");
    }, 100);
}



function makeSound(button) {
    switch (button) {
        case "w":
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
        case "a":
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;
        case "s":
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case "d":
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        case "j":
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;
        case "k":
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        case "l":
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;

        default:
            console.log(button);
    }
}