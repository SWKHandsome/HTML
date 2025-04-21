let light = 0;
let OffDisplay = "OFF";
let onDisplay = "ON";

const Button = document.getElementById('Btn');
const Status = document.getElementById('statusDisplay');

Button.addEventListener('click', function(){
    light ++;
    if (light % 2 == 0){
        Status.textContent = onDisplay;
        
    }

    else{
        Status.textContent = OffDisplay;
    }




});