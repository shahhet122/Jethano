var noOfButton = document.querySelectorAll(".key").length;
for(var i = 0; i<noOfButton; i++) {

document.querySelectorAll(".key")[i].addEventListener("click", function(){

    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
   
});    
}

document.addEventListener("keypress",function(event){
    makeSound(event.key)
});

    function makeSound(key){
        switch (key) {

            case "a":
                var a1 = new Audio("attachments/key01.mp3");
                a1.play();
            break;
            
            case "w":
                var a2 = new Audio("attachments/key02.mp3");
                a2.play();
            break;
            
            case "s":
                var a3 = new Audio("attachments/key03.mp3");
                a3.play();
            break;
            
            case "e":
                var a4 = new Audio("attachments/key04.mp3");
                a4.play();
            break;
            
            case "d":
                var a5 = new Audio("attachments/key05.mp3");
                a5.play();
            break;
    
            case "f":
                var a6 = new Audio("attachments/key06.mp3");
                a6.play();
            break;
            
            case "t":
                var a7 = new Audio("attachments/key07.mp3");
                a7.play();
            break;
    
            case "g":
                var a8 = new Audio("attachments/key08.mp3");
                a8.play();
            break;
    
            case "y":
                var a9 = new Audio("attachments/key09.mp3");
                a9.play();
            break;
    
            case "h":
                var a10 = new Audio("attachments/key10.mp3");
                a10.play();
            break;
    
            case "u":
                var a18= new Audio("attachments/key11.mp3");
                a18.play();
            break;
    
        
    
            default: console.log(buttonInnerHTML);
    
        }
    }



