for(var i=0;i<document.querySelectorAll(".drum").length;i++){
document.querySelectorAll("button")[i].addEventListener("click",function (){
    makeSound(this.innerHTML);
    butanime(this.innerHTML);
});
}

document.addEventListener("keydown", function(et){
    makeSound(et.key);
    butanime(et.key);
});
function makeSound(ke){
    switch (ke) {
        case "w":
            var ad1 = new Audio("./sounds/crash.mp3");
            ad1.play();
            break;
        case "a" :
            var ad2 = new Audio("./sounds/kick-bass.mp3");
            ad2.play();
            break;
        case "s" :
            var ad3 = new Audio("./sounds/snare.mp3");
            ad3.play();
            break;
        case "d" :
            var ad4 = new Audio("./sounds/tom-1.mp3");
            ad4.play();
            break;
        case "j" :
            var ad5 = new Audio("./sounds/tom-2.mp3");
            ad5.play();
            break;
        case "k" :
            var ad6 = new Audio("./sounds/tom-3.mp3");
            ad6.play();
            break;
        case "l" :
            var ad7 = new Audio("./sounds/tom-4.mp3");
            ad7.play();
            break;
        default:
            console.log(this.innerHTML);
            break;
    }
}

function butanime (currkey){
    document.querySelector("."+currkey).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("."+currkey).classList.remove("pressed");
    }, 100);
}