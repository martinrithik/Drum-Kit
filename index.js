alert("I'm working");
var nob=document.querySelectorAll(".drum").length;
for( var i=0;i<nob;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
}


  
  

function handleClick(){
    
    
    var alpha=this.innerHTML;
    sound(alpha);
    anime(alpha);

} 


document.addEventListener("keydown",hola);
function hola(event){
   
   sound(event.key);
   anime(event.key);
}



function sound(key){
   
   switch (key) {
      case "w":
          var audio=new Audio("sounds/tom-1.mp3");
          audio.play();
       break;
  
       case "a":
          var audio=new Audio("sounds/tom-2.mp3");
          audio.play();
       break;
       case "s":
          var audio=new Audio("sounds/tom-3.mp3");
          audio.play();
       break;
       case "d":
          var audio=new Audio("sounds/tom-4.mp3");
          audio.play();
       break;
       case "j":
          var audio=new Audio("sounds/snare.mp3");
          audio.play();
       break;
       case "l":
          var audio=new Audio("sounds/crash.mp3");
          audio.play();
       break;
       case "k":
          var audio=new Audio("sounds/kick-bass.mp3");
          audio.play();
       break;

      default:
          break;
  }
   
}
function anime(curkey){
   var act=document.querySelector("."+curkey);
   act.classList.add("pressed");
   setTimeout(function(){
    act.classList.remove("pressed");
   },100);



}