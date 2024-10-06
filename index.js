var n=document.querySelectorAll(".drum").length;

for(var i=0;i<n;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){ 
        this.style.color="black";
        var a = this.innerHTML;
        switch (a){
            case 'w': var audio=new Audio("sounds/crash.mp3"); break;
            case 'a': var audio=new Audio("sounds/kick-bass.mp3"); break;
            case 's': var audio=new Audio("sounds/snare.mp3"); break;
            case 'd': var audio=new Audio("sounds/tom-1.mp3"); break;
            case 'j': var audio=new Audio("sounds/tom-2.mp3"); break;
            case 'k': var audio=new Audio("sounds/tom-3.mp3"); break;
            case 'l': var audio=new Audio("sounds/tom-4.mp3"); break;
            default: var audio=new Audio("sounds/tom-4.mp3"); break;
        }
        audio.play();
         
        var activebutton= document.querySelector("."+a);
        activebutton.classList.add("pressed");


        setTimeout(function() {
            activebutton.classList.remove("pressed");
        }, 100);



    });
}


document.addEventListener("keypress",function(event){
    var a =event.key;
    switch (a){
        case 'w': var audio=new Audio("crash.mp3"); break;
        case 'a': var audio=new Audio("kick-bass.mp3"); break;
        case 's': var audio=new Audio("snare.mp3"); break;
        case 'd': var audio=new Audio("tom-1.mp3"); break;
        case 'j': var audio=new Audio("tom-2.mp3"); break;
        case 'k': var audio=new Audio("tom-3.mp3"); break;
        case 'l': var audio=new Audio("tom-4.mp3"); break;
        default: var audio=new Audio("tom-4.mp3"); break;
    }
    audio.play();
    var activebutton= document.querySelector("."+a);
        activebutton.classList.add("pressed");

    setTimeout(function() {
        activebutton.classList.remove("pressed");
    }, 100);



   });

